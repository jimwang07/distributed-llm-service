import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

// Types for TypeScript support
type Message = {
  type: 'command' | 'response';
  content: string;
  timestamp?: string;
};

type ServerWindowProps = {
  serverId: number;
  messages: Message[];
  className?: string;
};

const ServerWindow = ({ serverId, messages, className = '' }: ServerWindowProps) => {
  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader className="bg-gray-100">
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Server {serverId}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.type === 'response' ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                msg.type === 'response' 
                  ? 'bg-gray-100' 
                  : 'bg-blue-500 text-white'
              }`}
            >
              {msg.content}
              {msg.timestamp && (
                <div className="text-xs opacity-70 mt-1">
                  {msg.timestamp}
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ServerWindow;