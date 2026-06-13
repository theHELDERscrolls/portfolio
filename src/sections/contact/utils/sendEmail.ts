import emailjs from "@emailjs/browser";

export type FormStatus = "idle" | "success" | "error" | "cooldown" | "invalid";

const COOLDOWN_KEY = "contact_last_sent";
const COOLDOWN_MS = 60_000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const FIELD_LIMITS = {
  from_name: 100,
  last_name: 100,
  from_email: 254,
  phone: 20,
  message: 2000,
} as const;

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .slice(0, maxLength);
}

export async function sendEmail(
  _prevStatus: FormStatus,
  formData: FormData,
): Promise<FormStatus> {
  if (formData.get("bot_field")) return _prevStatus;

  const raw = {
    from_name: sanitize(formData.get("from_name"), FIELD_LIMITS.from_name),
    last_name: sanitize(formData.get("last_name"), FIELD_LIMITS.last_name),
    from_email: sanitize(formData.get("from_email"), FIELD_LIMITS.from_email),
    phone: sanitize(formData.get("phone"), FIELD_LIMITS.phone),
    message: sanitize(formData.get("message"), FIELD_LIMITS.message),
  };

  if (
    raw.from_name.length < 2 ||
    raw.last_name.length < 2 ||
    !EMAIL_REGEX.test(raw.from_email) ||
    raw.phone.length < 6 ||
    raw.message.length < 10
  ) {
    return "invalid";
  }

  const lastSent = localStorage.getItem(COOLDOWN_KEY);
  if (lastSent && Date.now() - Number.parseInt(lastSent) < COOLDOWN_MS) {
    return "cooldown";
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: raw.from_name,
        last_name: raw.last_name,
        email: raw.from_email,
        phone: raw.phone,
        message: raw.message,
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
