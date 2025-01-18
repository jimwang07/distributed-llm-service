import React, { useState } from 'react';
import { Send, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

type CommandInfo = {
  command: string;
  description: string;
  example: string;
};

const AVAILABLE_COMMANDS: CommandInfo[] = [
  {
    command: 'create <context_id>',
    description: 'Create a new conversation context',
    example: 'create 1'
  },
  {
    command: 'query <context_id> <query>',
    description: 'Send a query in a specific context',
    example: 'query 1 What is the weather?'
  },
  {
    command: 'choose <context_id> <server_id>',
    description: 'Select a response from a specific server',
    example: 'choose 1 0'
  },
  {
    command: 'view <context_id>',
    description: 'View a specific context',
    example: 'view 1'
  },
  {
    command: 'viewall',
    description: 'View all contexts',
    example: 'viewall'
  },
  {
    command: 'failLink <src> <dest>',
    description: 'Simulate a link failure between servers',
    example: 'failLink 0 1'
  },
  {
    command: 'fixLink <src> <dest>',
    description: 'Fix a failed link between servers',
    example: 'fixLink 0 1'
  },
  {
    command: 'failNode <node_num>',
    description: 'Simulate a server failure',
    example: 'failNode 1'
  }
];

type ControlPanelProps = {
  onSendCommand: (command: string) => void;
  className?: string;
};

const ControlPanel = ({ onSendCommand, className = '' }: ControlPanelProps) => {
  const [command, setCommand] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      onSendCommand(command.trim());
      setCommand('');
    }
  };

  return (
    <Card className={`${className} flex flex-col h-full`}>
      <CardHeader className="bg-gray-100 shrink-0">
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Control Panel
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex flex-col h-[calc(100%-4rem)] gap-4">
        {/* Fixed input section */}
        <form onSubmit={handleSubmit} className="shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Enter command..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
        
        {/* Scrollable commands section */}
        <div className="flex-1 min-h-0">
          <div className="font-medium mb-2 shrink-0">Available Commands:</div>
          <div className="overflow-y-auto h-full">
            <div className="space-y-3">
              {AVAILABLE_COMMANDS.map((cmd, idx) => (
                <div key={idx} className="text-sm border-b border-gray-100 pb-3">
                  <div className="font-mono text-blue-600">{cmd.command}</div>
                  <div className="text-gray-600">{cmd.description}</div>
                  <div className="text-gray-400 text-xs">Example: {cmd.example}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ControlPanel;