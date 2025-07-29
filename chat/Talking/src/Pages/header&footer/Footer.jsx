// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="w-full px-6 py-4 border-t shadow-inner bg-white dark:bg-zinc-900 text-center text-sm text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()} ChatVerse. All rights reserved.
    </footer>
  );
};

export default Footer;
