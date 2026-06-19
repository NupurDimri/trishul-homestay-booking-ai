"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  isVisible,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
}