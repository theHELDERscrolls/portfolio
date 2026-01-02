// Calcula el progreso (en %) entre una fecha de inicio y una fecha de fin
export const getExperienceProgress = (
  // Formato de las fechas: "YYYY-MM"
  startDate: string,
  endDate: string
) => {
  // Convertimos las fechas a objetos Date
  // Añadimos "-01" porque JavaScript necesita un día para crear la fecha y en 
  // nuestra data no viene (YYYY-MM-01)
  const start = new Date(`${startDate}-01`);
  const end = new Date(`${endDate}-01`);

  // Fecha actual (momento en el que se carga la página)
  const now = new Date();

  // Si todavía no hemos llegado a la fecha de inicio,
  // el progreso es 0%
  if (now <= start) return 0;

  // Si ya hemos pasado la fecha de fin,
  // el progreso es 100%
  if (now >= end) return 100;

  // Tiempo total de la experiencia (en milisegundos)
  const total = end.getTime() - start.getTime();

  // Tiempo que ha pasado desde el inicio hasta ahora (en milisegundos)
  const elapsed = now.getTime() - start.getTime();

  // Calculamos el porcentaje:
  // (tiempo pasado / tiempo total) * 100
  // Redondeamos el resultado y nos aseguramos
  // de que nunca pase de 100
  return Math.min(100, Math.round((elapsed / total) * 100));
};
