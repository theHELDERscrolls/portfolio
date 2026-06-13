import { useTranslation } from "react-i18next";
import { TECH_STACK } from "../data";

export const StackTab = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      {TECH_STACK.map((category) => (
        <div key={category.id} className="flex flex-col gap-4">
          <h3 className="pb-2 text-sm font-bold tracking-widest uppercase border-b-3 font-space-grotesk text-neutral-900 border-neutral-900">
            {t(`experience.stack_categories.${category.id}`)}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center gap-3 p-2 w-25 h-25 border-2 border-neutral-900 bg-neutral-100 shadow-[3px_3px_0_0_#000]"
              >
                <img
                  src={item.url}
                  alt={item.name}
                  className="object-contain size-9"
                  loading="lazy"
                />
                <span className="text-xs font-bold leading-tight text-center font-space-grotesk text-neutral-700">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
