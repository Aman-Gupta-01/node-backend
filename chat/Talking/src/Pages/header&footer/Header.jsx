import { MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 border-b shadow-sm bg-white dark:bg-zinc-900 flex items-center justify-between">
      <div className="flex items-center gap-2 text-xl font-semibold text-zinc-800 dark:text-white">
        <MessageSquare className="w-6 h-6 text-primary" />
        <span>ChatVerse</span>
      </div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400">
        Boomtastic Chat
      </div>
    </header>
  );
};

export default Header;
