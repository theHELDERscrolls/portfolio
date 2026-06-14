const inputClass =
  "w-full px-4 py-3 border-3 border-neutral-900 bg-neutral-100 font-space-grotesk shadow-[6px_6px_0_0_#000] focus:outline-none focus:shadow-[2px_2px_0_0_#000] focus:translate-x-[3px] focus:translate-y-[3px] transition-all ease-in-out";

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  type?: "text" | "email" | "tel" | "textarea";
  rows?: number;
}

export const FormField = ({
  id,
  name,
  label,
  type = "text",
  rows,
  ...props
}: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-sm font-bold font-space-grotesk text-neutral-900"
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        rows={rows}
        className={`${inputClass} resize-none`}
        {...props}
      />
    ) : (
      <input
        id={id}
        name={name}
        type={type}
        className={inputClass}
        {...props}
      />
    )}
  </div>
);
