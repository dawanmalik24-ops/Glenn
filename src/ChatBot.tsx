/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { X, Send, MessageCircle, Loader2 } from "lucide-react";

const SYSTEM_PROMPT = `You are Glenn Byrd's personal fitness assistant on his website. You help visitors learn about Glenn's services and direct them to take action. Be friendly, motivating and concise.

Key information:
- Glenn Byrd is an ACE-Certified Personal Trainer and Manager at The Forum Athletic Club, Ponce City Market, Atlanta GA
- He specializes in Strength Training, Weight Loss, Athletic Performance and Bodybuilding
- His philosophy is "Movement is Medicine"
- Services: In-Person Training at The Forum PCM, 1-on-1 Coaching (remote or hybrid)
- For pricing on sessions and coaching — always say "Pricing varies based on your goals and schedule. Reach out to Glenn directly at glennbyrdbusiness@gmail.com or fill out the inquiry form on this page"
- To book a session: https://theforumathleticclub.com/ponce-city-market-schedule
- Instagram: @thegreatglenn
- For any specific questions about cost, availability or custom programs always direct them to contact Glenn personally

Never make up pricing. Always encourage them to reach out directly for specifics.`;

interface Message {
  role: "user" | "assistant";
  text: string;
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hey! I'm Glenn's fitness assistant 💪 Ask me anything about his training services, how to get started, or how to book a session.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const history = updatedMessages.slice(0, -1).map((m) => ({
        role: m.role === "user" ? "user" as const : "model" as const,
        parts: [{ text: m.text }],
      }));

      const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        history,
        config: { systemInstruction: SYSTEM_PROMPT },
      });

      const response = await chat.sendMessage({ message: text });
      const reply = response.text ?? "I'm not sure — please reach out to Glenn directly at glennbyrdbusiness@gmail.com!";

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong. Please reach out to Glenn directly at glennbyrdbusiness@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[200] w-[calc(100vw-2rem)] max-w-sm flex flex-col rounded-2xl border border-[#D4AF37]/30 bg-[#0a0a0a] shadow-[0_0_60px_rgba(212,175,55,0.2)] overflow-hidden"
          style={{ height: "min(520px, calc(100dvh - 7rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#D4AF37]/20 bg-[#0d0d0d]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-sm">GB</span>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0d0d0d]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">Glenn's Assistant</p>
                <p className="text-xs text-emerald-400 mt-0.5">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#D4AF37] text-black font-medium rounded-br-sm"
                      : "bg-white/8 text-gray-200 border border-white/8 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/8 border border-white/8 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-[#D4AF37]/20 bg-[#0d0d0d]">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 focus-within:border-[#D4AF37]/50 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about training, pricing..."
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="text-[#D4AF37] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
                aria-label="Send message"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 right-4 sm:right-6 z-[200] w-14 h-14 rounded-full bg-[#D4AF37] hover:bg-[#e8c84a] shadow-[0_4px_24px_rgba(212,175,55,0.45)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X size={24} className="text-black" />
        ) : (
          <MessageCircle size={24} className="text-black" fill="black" />
        )}

        {/* Pulsing online dot */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#0a0a0a]" />
            </span>
          </span>
        )}
      </button>
    </>
  );
}
