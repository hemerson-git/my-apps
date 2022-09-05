import clearDay from "../assets/clean_day.json";
import clearNight from "../assets/clean_night.json";
import rainingNight from "../assets/raining_night.json";
import cloudlyDay from "../assets/cloudly_day.json";

const weatherImageSlug = {
  clear_day: clearDay,
  cloudly_day: cloudlyDay,
  cloudly_night: clearNight,
  rain: rainingNight,
};

export interface WeatherImageProps {
  condition: keyof typeof weatherImageSlug;
}

export function getWeatherImage({ condition }: WeatherImageProps) {
  const imageSlug = weatherImageSlug[condition];
  console.log(condition);

  return imageSlug;
}
