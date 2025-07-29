import {
  Button
} from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Input
} from '@/components/ui/input';
import React, {
  Suspense,
  useCallback,
  useEffect,
  useState,
  lazy
} from 'react';
import { io } from 'socket.io-client';
import Loading from '../loader/Loading';
const ConversationContainer = lazy(() => import('@/Pages/ConversationContainer')) 

const socket = io('http://localhost:3000');

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);


  useEffect(() => {
  socket.on('connect', () => {
    console.log('✅ Connected to socket server:', socket.id);
  });

  return () => {
    socket.off('connect');
  };
}, []);


  useEffect(() => {
    const handleIncomingMessage = (msg) => {
      setChats(prev => [...prev, msg]);
    };

    socket.on('message', handleIncomingMessage);
    return () => {
      socket.off('message', handleIncomingMessage);
    };
  }, []);

  const sendMessage = useCallback(() => {
    const trimmed = message.trim();
    if (trimmed) {
      socket.emit('message', trimmed);
      setMessage('');
    }
  }, [message]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  }, [sendMessage]);

  return (
    <Suspense fallback={<Loading />}>
    <Card className="flex flex-col h-[80vh] bg-zinc-200">
      <CardHeader>
        <CardTitle>User</CardTitle>
        <CardDescription>You are talking to user</CardDescription>
        <CardAction className="flex items-center gap-2">
          <span className="relative flex h-3 w-3 top-[1px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
          </span>
          <h1>Live Chatting</h1>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1 p-2 overflow-hidden">
        <ConversationContainer chats={chats} />
      </CardContent>

      <div className="flex gap-4 mx-4">
        <Input
          aria-label="Message Input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Enter message..."
          className="bg-popover flex-grow outline-none ring-0 border-none focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:outline-none"
          onKeyDown={handleKeyDown}
        />
        <Button
          onClick={sendMessage}
          className="w-24"
          disabled={!message.trim()}
        >
          Submit
        </Button>
      </div>
    </Card>
    </Suspense>
  );
};

export default ChatScreen;
