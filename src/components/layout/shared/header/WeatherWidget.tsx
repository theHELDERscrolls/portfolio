import { useUserLocation, useOpenWeather } from "@/hooks";

export const WeatherWidget = () => {
  const { coords } = useUserLocation();
  const { weather } = useOpenWeather(
    coords?.lat.toString(),
    coords?.lon.toString()
  );

  const temp = weather?.main.temp;
  const icon = weather?.weather?.[0].icon;
  const city = weather?.name;
  const country = weather?.sys.country;

  const formatTemp = (t?: number) => (t != null ? Math.round(t) : "20");

  return (
    <div className="flex items-center gap-2 px-3 py-1 border cursor-default rounded-xl max-h-13 bg-indigo-300/10 border-indigo-50/10">
      {icon && (
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="weather icon"
          loading="lazy"
          className="object-contain w-8 h-8"
        />
      )}

      <p className="text-sm font-bold text-amber-400">{formatTemp(temp)}°C</p>

      <p className="text-sm font-semibold truncate text-neutral-300 max-w-50">
        {city}, {country}
      </p>
    </div>
  );
};
