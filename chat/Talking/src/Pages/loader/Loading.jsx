import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div className="text-center space-y-4">
        <motion.h1
          className="text-3xl font-semibold text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ChatVerse
        </motion.h1>

        <motion.div
          className="flex justify-center gap-2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Connecting to chat...
        </motion.p>
      </div>
    </div>
  );
}
