import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useEffect, useRef } from 'react';

const ConversationContainer = ({ ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [props.chats]);

  return (
    <ScrollArea className="h-full">
      <div
        ref={containerRef}
        className="flex flex-col gap-3 p-2 overflow-y-auto h-full"
      >
        {props.chats.map((msg, i) => (
          <div key={i} 
          className={`bg-white px-3 py-2 rounded-xl shadow text-sm max-w-[15rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg w-fit break-words`}>
            {msg}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ConversationContainer;
