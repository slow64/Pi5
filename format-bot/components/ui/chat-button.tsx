"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"
import { chatbotAPI } from "@/lib/chatbot-api"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Olá! Como posso ajudar você hoje?", isUser: false },
  ])
  const [inputValue, setInputValue] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = inputValue;
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
      setInputValue("");

      try {
        const response = await chatbotAPI.ask(userMessage);
        setMessages((prev) => [
          ...prev,
          {
            text: response.resposta,
            isUser: false,
          },
        ]);
      } catch (error) {
        console.error("Erro ao comunicar com o chatbot:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Desculpe, não consegui me conectar ao chatbot. Tente novamente mais tarde.",
            isUser: false,
          },
        ]);
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 z-50 shadow-lg">
          <CardHeader className="bg-primary text-primary-foreground p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Suporte</CardTitle>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-primary-foreground">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
      <Button className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg z-50" onClick={toggleChat}>
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  )
}


