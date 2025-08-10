'use client';
import TypingDots from '@/components/TypingDots'; // adjust path if needed
import { useState, useEffect, KeyboardEvent } from 'react';
import { X, BotIcon, Expand, Minimize } from 'lucide-react';
import Image from 'next/image';

type Sender = 'user' | 'bot';

interface Message {
  sender: Sender;
  text: string;
}

interface ChatBotProps {
  userEmail?: string;
}

export default function ChatBot({ userEmail }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // Send user email to backend only once when component mounts
  useEffect(() => {
    const sendEmail = async () => {
      try {
        await fetch('/api/save-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: userEmail }),
        });
      } catch (error) {
        console.error('Failed to send user email to backend:', error);
      }
    };

    if (userEmail) sendEmail();
  }, [userEmail]);
  
const handleOrder = async (orderText: string) => {
  if (!userEmail || !orderText) return;

  try {
    const res = await fetch("/api/send-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        order: orderText,
      }),
    });

    const data = await res.json();
    console.log("Order sent to backend:", data);
  } catch (error) {
    console.error("Failed to send order:", error);
  }
};
  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage: Message = { sender: 'user', text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');

  // Optional: Detect if it's an order and send to backend
  if (input.toLowerCase().includes("order") || input.toLowerCase().includes("want")) {
    await handleOrder(input);
  }
  setIsTyping(true);
  try {
    const response = await fetch("http://localhost:9000/chat/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: [
          {
            role: "user",
            content: userMessage.text,
          },
        ],
      }),
    });

    const data = await response.json();

    const botMessage: Message = {
      sender: 'bot',
      text: data.response,
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  } catch (error) {
    console.error("Failed to fetch:", error);
    const errorMessage: Message = {
      sender: 'bot',
      text: "Sorry, I'm having trouble connecting to TastyTray services. Please try again later.",
    };
    setMessages((prev) => [...prev, errorMessage]);
    setIsTyping(false);
  }
};

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 ">
      {!isOpen && showWelcome && (
        <div className="relative animate-fade-in backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl rounded-xl p-4 text-sm max-w-xs text-gray-900">
          <button
            onClick={() => setShowWelcome(false)}
            className="absolute top-1 right-1 text-gray-600 hover:text-gray-900"
          >
            <X className="w-4 h-4 cursor-pointer" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <Image src="/cheff.png" alt="Chef" className="w-6 h-6 rounded-full" height={32} width={32} />
            <p className="font-semibold text-yellow-500">{"Hi! I'm TastyTrayBot 👋"}</p>
          </div>
          <p>What delicious thing are you craving today?</p>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <BotIcon className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div className={`bg-white border rounded-xl shadow-2xl flex flex-col transition-all duration-300 ${isExpanded ? 'w-[450px] h-[80vh]' : 'w-96 h-[480px]'}`}>
          <div className="bg-yellow-500 text-white px-4 py-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center">
              <Image width={35} height={35} src="/cheff.png" alt="Bot" className="w-10 h-10 rounded-full mr-2" />
              <span className="font-bold">TastyTray</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <Minimize className="w-4 h-4 cursor-pointer" /> : <Expand className="w-4 h-4 cursor-pointer" />}
              </button>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4 cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
  <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start`}>
    {msg.sender === 'bot' && (
      <Image width={35} height={35} src="/cheff.png" alt="Bot" className="w-10 h-10 rounded-full mr-2" />
    )}
    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">{msg.text}</div>
    {msg.sender === 'user' && (
      <Image width={32} height={32} src="/user.png" alt="User" className="w-7 h-7 rounded-full ml-2" />
    )}
  </div>
    ))}

    {isTyping && (
      <div className="flex items-start">
        <Image width={35} height={35} src="/cheff.png" alt="Bot" className="w-10 h-10 rounded-full mr-2" />
        <TypingDots />
      </div>
    )}

          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-md border-gray-200 border focus:border-yellow-400 focus:outline-none text-gray-800"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="bg-yellow-500 cursor-pointer hover:bg-yellow-400 text-white py-2 rounded-md px-3"
              title="Send"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// okay bye
