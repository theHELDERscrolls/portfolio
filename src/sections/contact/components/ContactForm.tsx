import {
  useActionState,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { BrutalButton, Toast } from "@/components";
import { FIELD_LIMITS, sendEmail } from "../utils";
import type { FormStatus } from "../utils";
import { FormField } from "./FormField";

export const ContactForm = () => {
  const { t } = useTranslation();
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
            label={t("contact.form.firstName")}
            required
            minLength={2}
            maxLength={FIELD_LIMITS.from_name}
            placeholder={t("contact.form.placeholders.firstName")}
          />
          <FormField
            id="last_name"
            name="last_name"
            label={t("contact.form.lastName")}
            required
            minLength={2}
            maxLength={FIELD_LIMITS.last_name}
            placeholder={t("contact.form.placeholders.lastName")}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            id="from_email"
            name="from_email"
            label={t("contact.form.email")}
            type="email"
            required
            maxLength={FIELD_LIMITS.from_email}
            placeholder={t("contact.form.placeholders.email")}
          />
          <FormField
            id="phone"
            name="phone"
            label={t("contact.form.phone")}
            type="tel"
            required
            minLength={6}
            maxLength={FIELD_LIMITS.phone}
            placeholder={t("contact.form.placeholders.phone")}
          />
        </div>

        <FormField
          id="message"
          name="message"
          label={t("contact.form.message")}
          type="textarea"
          required
          minLength={10}
          maxLength={FIELD_LIMITS.message}
          rows={6}
          placeholder={t("contact.form.placeholders.message")}
        />

        <BrutalButton
          type="submit"
          disabled={isPending}
          iconName="send"
          className="self-start cursor-pointer hover:bg-lime-200"
        >
          {isPending ? t("contact.form.sending") : t("contact.form.submit")}
        </BrutalButton>
      </form>

      {showToast && (
        <Toast
          type={status === "success" ? "success" : "error"}
          message={t(`contact.toast.${status}`)}
          onClose={closeToast}
        />
      )}
    </>
  );
};
