'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyEmailButton({ email }: { email: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="text-base text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
    >
      {isCopied ? (
        <><Check className="w-4 h-4 text-primary" /> Copied!</>
      ) : (
        <>{email} <Copy className="w-4 h-4" /></>
      )}
    </button>
  );
}
