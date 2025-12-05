import { Svg } from "@/components/ui";

/*
  De cara a escalar la aplicación, este componente será necesario para leer el estado de Discord
  en tiempo real a través la creación de un bot + backend pequeño para poder leer el estado en
  tiempo real así como la actividad usando el protocolo de Websocket.
*/

export const ContactMePresence = () => {
  return (
    <div className="flex items-center justify-center gap-2 px-2 py-1 border rounded-xl border-emerald-50/10 bg-emerald-500/10 text-emerald-300 animate-pulse">
      <Svg
        className="w-3 h-3 text-emerlad-400 top-1 right-1"
        iconId="icon-dot"
      />
      <p className="text-sm font-semibold">available</p>
    </div>
  );
};
