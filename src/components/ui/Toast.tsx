import { useCallback, useEffect } from "react";
import { Icon } from "./Icon";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export const Toast = ({ type, message, onClose }: ToastProps) => {
  const stableClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const timer = setTimeout(stableClose, 4000);
    return () => clearTimeout(timer);
  }, [stableClose]);

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 max-w-sm px-4 py-3 border-2 border-neutral-900 font-space-grotesk text-sm font-semibold shadow-[4px_4px_0_0_#171717] animate-toast-in ${
        type === "success" ? "bg-lime-200 text-neutral-900" : "bg-red-200 text-neutral-900"
      }`}
    >
      <Icon name={type === "success" ? "circle-check" : "circle-x"} className="size-[18px] shrink-0" />
      <span className="flex-1">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="cursor-pointer hover:opacity-60 transition-opacity"
        aria-label="Cerrar notificación"
      >
        <Icon name="x" className="size-4" />
      </button>
    </div>
  );
};
