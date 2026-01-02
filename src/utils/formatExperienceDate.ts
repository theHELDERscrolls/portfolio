import type { ExperienceItem } from "@/types";

/**
 * Formateador de fechas para mostrar:
 * "Nov, 2020", "Mar, 2023", etc.
 * Usa el locale en inglés.
 */
const MONTH_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

/**
 * Convierte una fecha en formato "YYYY-MM"
 * a un texto legible como "June, 2020"
 */
const formatYearMonth = (value: string) => {
  // Separamos el año y el mes desde el string
  const [year, month] = value.split("-").map(Number);

  // Creamos una fecha JS (los meses empiezan en 0)
  const date = new Date(year, month - 1);

  // Devolvemos la fecha formateada
  return MONTH_FORMATTER.format(date);
};

/**
 * Determina si una experiencia está actualmente en curso
 */
const isCurrentExperience = (endDate: ExperienceItem["endDate"]) => {
  // Si el backend indica "present", es actual directamente
  if (endDate === "present") return true;

  // Convertimos la fecha de fin a objeto Date
  const [year, month] = endDate.split("-").map(Number);
  const end = new Date(year, month - 1);

  // Fecha actual
  const now = new Date();

  // Normalizamos ambas fechas al inicio del mes
  // para evitar problemas con días y horas
  end.setDate(1);
  now.setDate(1);

  // Si la fecha de fin es igual o posterior al mes actual,
  // consideramos la experiencia como activa
  return end >= now;
};

/**
 * Formatea las fechas de una experiencia y devuelve:
 * - El rango listo para mostrar en UI
 * - Si la experiencia está actualmente activa
 */
export const formatExperienceDates = (
  startDate: ExperienceItem["startDate"],
  endDate: ExperienceItem["endDate"]
) => {
  // Formateamos la fecha de inicio
  const formattedStart = formatYearMonth(startDate);

  // Caso especial: experiencia en curso
  if (endDate === "present") {
    return {
      range: `${formattedStart} - Present`,
      isCurrent: true,
    };
  }

  // Formateamos la fecha de fin
  const formattedEnd = formatYearMonth(endDate);

  return {
    // Texto que se mostrará en la UI
    range: `${formattedStart} - ${formattedEnd}`,
    // Indicamos si sigue siendo una experiencia actual
    isCurrent: isCurrentExperience(endDate),
  };
};
