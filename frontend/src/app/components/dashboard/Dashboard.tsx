import React, { useState } from 'react';
import ServerWindow from './ServerWindow';
import ControlPanel from './ControlPanel';

type Message = {
  type: 'command' | 'response';
  content: string;
  timestamp?: string;
};

type ServerMessages = {
  [key: number]: Message[];
};

const Dashboard = () => {
  const [serverMessages, setServerMessages] = useState<ServerMessages>({
    0: [],
    1: [],
    2: []
  });

  const handleCommand = async (command: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const newMessage = { 
      type: 'command' as const, 
      content: command, 
      timestamp 
    };
    
    setServerMessages(prev => ({
      0: [...prev[0], newMessage],
      1: [...prev[1], newMessage],
      2: [...prev[2], newMessage]
    }));

    // TODO: Send command to backend
    // const response = await fetch('/api/command', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ command })
    // });
  };

  return (
    <div className="h-screen p-6 bg-gray-50 overflow-hidden">
      <div className="grid grid-cols-2 gap-6 h-full max-h-[calc(100vh-3rem)]">
        {/* Left column with stacked server windows */}
        <div className="space-y-4 overflow-y-auto pr-2">
          {[0, 1, 2].map((serverId) => (
            <ServerWindow 
              key={serverId}
              serverId={serverId} 
              messages={serverMessages[serverId]} 
              className="min-h-[30vh]" // Minimum height for each server window
            />
          ))}
        </div>
        
        {/* Right column with control panel */}
        <div className="overflow-hidden">
          <ControlPanel 
            onSendCommand={handleCommand} 
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;