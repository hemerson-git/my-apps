import clearDay from "../assets/clean_day.json";
import clearNight from "../assets/clean_night.json";
import rainingNight from "../assets/raining_night.json";
import cloudlyDay from "../assets/cloudly_day.json";
import cloud from "../assets/cloud.json";

const weatherImageSlug = {
  clear_day: clearDay,
  clear_night: clearNight,
  cloudly_day: cloudlyDay,
  cloudly_night: clearNight,
  rain: rainingNight,
  cloud,
};

export interface WeatherImageProps {
  condition: keyof typeof weatherImageSlug;
}

export function getWeatherImage({ condition }: WeatherImageProps) {
  const imageSlug = weatherImageSlug[condition];
  return imageSlug;
}
