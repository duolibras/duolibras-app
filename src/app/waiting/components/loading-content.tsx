import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; 

interface LoadingContentProps {
  onSuccess?: () => void; 
  onError?: () => void; 
  error?: boolean; 
}

const loadingMessages = [
  "Estamos preparando o seu ambiente",
  "Aguarde um momento",
  "Estamos quase lá",
  "Pronto, divirta-se!"
];

export default function LoadingContent({ onSuccess, onError, error }: LoadingContentProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (error) {
      // Se houver erro, chama o callback de erro após 1,2 segundos
      const timeout = setTimeout(() => {
        onError?.();
      }, 1200);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setMessageIndex((prev) => 
        prev < loadingMessages.length - 1 ? prev + 1 : prev
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [error, onError]);

  useEffect(() => {
    if (!error && messageIndex === loadingMessages.length - 1) {
      // Se for a última mensagem e não houver erro, chama o callback de sucesso após 1,2 segundos
      const timeout = setTimeout(() => {
        onSuccess?.();
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [messageIndex, error, onSuccess]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${error ? 'bg-red-500' : 'bg-gradient-to-br from-cyan-500 to-cyan-700'}`}>
      <div className="text-center space-y-8">
        <div className="w-24 h-24 mx-auto">
          {error ? (
            <X className="w-full h-full text-white" />
          ) : (
            <motion.div
              className="w-full h-full border-4 border-white rounded-full border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl font-bold text-white"
          >
            {error ? "Erro ao carregar" : loadingMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
