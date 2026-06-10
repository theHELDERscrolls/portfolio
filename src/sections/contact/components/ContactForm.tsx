import {
  useActionState,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { BrutalButton, Toast } from "@/components";
import { FIELD_LIMITS, sendEmail } from "../utils";
import type { FormStatus } from "../utils";
import { FormField } from "./FormField";

const toastConfig: Record<
  Exclude<FormStatus, "idle">,
  { type: "success" | "error"; message: string }
> = {
  success: {
    type: "success",
    message: "Message sent! I'll get back to you soon.",
  },
  error: { type: "error", message: "Something went wrong. Please try again." },
  cooldown: {
    type: "error",
    message: "Please wait a moment before sending again.",
  },
  invalid: {
    type: "error",
    message: "Please fill in all required fields correctly.",
  },
};

export const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(sendEmail, "idle");
  const [dismissedForStatus, setDismissedForStatus] =
    useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const showToast = status !== "idle" && status !== dismissedForStatus;
  
  const closeToast = useCallback(() => setDismissedForStatus(status), [status]);

  useEffect(() => {
    if (status === "success") formRef.current?.reset();
  }, [status]);

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
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
          <FormField
            id="from_name"
            name="from_name"
            label="First name"
            required
            minLength={2}
            maxLength={FIELD_LIMITS.from_name}
            placeholder="Carlos"
          />
          <FormField
            id="last_name"
            name="last_name"
            label="Last name"
            required
            minLength={2}
            maxLength={FIELD_LIMITS.last_name}
            placeholder="García"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            id="from_email"
            name="from_email"
            label="Email"
            type="email"
            required
            maxLength={FIELD_LIMITS.from_email}
            placeholder="carlos@ejemplo.com"
          />
          <FormField
            id="phone"
            name="phone"
            label="Phone"
            type="tel"
            required
            minLength={6}
            maxLength={FIELD_LIMITS.phone}
            placeholder="(+01) 234 56 78 90"
          />
        </div>

        <FormField
          id="message"
          name="message"
          label="Message"
          type="textarea"
          required
          minLength={10}
          maxLength={FIELD_LIMITS.message}
          rows={6}
          placeholder="Hi, I'd love to connect with you — whether it's about a project, a job opportunity, or just to say hello."
        />

        <BrutalButton
          type="submit"
          disabled={isPending}
          iconName="send"
          className="self-start cursor-pointer hover:bg-lime-200"
        >
          {isPending ? "Sending..." : "Send message"}
        </BrutalButton>
      </form>

      {showToast && (
        <Toast
          type={toastConfig[status].type}
          message={toastConfig[status].message}
          onClose={closeToast}
        />
      )}
    </>
  );
};
