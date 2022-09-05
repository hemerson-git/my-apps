import clearDay from "../assets/clean_day.json";
import clearNight from "../assets/clean_night.json";

const weatherImageSlug = {
  clearDay,
  clearNight,
  cloudlyNight: "",
  rain: "",
};

export function getWeatherImage(condition: keyof typeof weatherImageSlug) {
  const imageSlug = weatherImageSlug[condition];
  return imageSlug;
}
