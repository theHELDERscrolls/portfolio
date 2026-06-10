import { useActionState, useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BrutalButton, Toast } from "@/components";

type FormStatus = "idle" | "success" | "error" | "cooldown";

const COOLDOWN_KEY = "contact_last_sent";
const COOLDOWN_MS = 60_000;

const toastConfig: Record<
  Exclude<FormStatus, "idle">,
  { type: "success" | "error"; message: string }
> = {
  success: {
    type: "success",
    message: "Message sent! I'll get back to you soon.",
  },
  error: {
    type: "error",
    message: "Something went wrong. Please try again.",
  },
  cooldown: {
    type: "error",
    message: "Please wait a moment before sending again.",
  },
};

async function sendEmail(
  _prevStatus: FormStatus,
  formData: FormData,
): Promise<FormStatus> {
  if (formData.get("bot_field")) return _prevStatus;

  const lastSent = localStorage.getItem(COOLDOWN_KEY);
  if (lastSent && Date.now() - parseInt(lastSent) < COOLDOWN_MS) {
    return "cooldown";
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.get("from_name") as string,
        last_name: formData.get("last_name") as string,
        email: formData.get("from_email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
        time: new Date().toLocaleString(),
      },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
    );
    localStorage.setItem(COOLDOWN_KEY, Date.now().toString());
    return "success";
  } catch {
    return "error";
  }
}

const inputClass =
  "w-full px-4 py-3 border-2 border-neutral-900 bg-neutral-100 font-space-grotesk shadow-[4px_4px_0_0_#171717] focus:outline-none focus:shadow-[2px_2px_0_0_#171717] focus:translate-x-[2px] focus:translate-y-[2px] transition-all ease-in-out";

const labelClass = "text-sm font-bold font-space-grotesk text-neutral-900";

export const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(sendEmail, "idle");
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const closeToast = useCallback(() => setShowToast(false), []);

  useEffect(() => {
    if (status === "idle") return;
    if (status === "success") formRef.current?.reset();
    setShowToast(true);
  }, [status]);

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        noValidate
        className="flex flex-col w-full gap-5"
      >
        <input
          type="text"
          name="bot_field"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="from_name" className={labelClass}>
              First name
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              placeholder="John"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="last_name" className={labelClass}>
              Last name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              required
              placeholder="Doe"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="from_email" className={labelClass}>
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+34 600 000 000"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell me about your project..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <BrutalButton
          type="submit"
          disabled={isPending}
          iconName="send"
          className="cursor-pointer hover:bg-lime-200 self-start"
        >
          {isPending ? "Sending..." : "Send message"}
        </BrutalButton>
      </form>

      {showToast && status !== "idle" && (
        <Toast
          type={toastConfig[status].type}
          message={toastConfig[status].message}
          onClose={closeToast}
        />
      )}
    </>
  );
};
