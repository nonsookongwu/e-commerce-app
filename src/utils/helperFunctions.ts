import dayjs from "dayjs";
import { store } from "../redux/store";
import { LanguageData } from "./typesAndInterfaces";

// const language = store.getState().languageSlice.value

export function capitalizeFirstLetter(str: string): string {
  if (!str || str.length < 3) return str; // Handle empty strings
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const formatAmount = (amount: number | undefined, countryCode: string, currency: string) => {
  if (!amount) {
    return 0;
  }
  const formattedAmount = new Intl.NumberFormat(countryCode, {
    style: "currency",
    currency: currency, // You can change the currency code as needed
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return formattedAmount;
};

export const formatNumber = (value: number | string) => {
  const rawValue = value?.toString().replace(/\D/g, ""); // Remove non-numeric characters
  return new Intl.NumberFormat().format(Number(rawValue)) || "";
};

export const formatDate = (date: number) => {
  return dayjs(date * 1000).format("DD MMM YYYY, hh:mm a");
};

export const getGreeting = ( language: LanguageData) => {
  const hour = dayjs().hour();

  if (hour >= 5 && hour < 12) {
    return language.good_morning;
  }

  if (hour >= 12 && hour < 17) {
    return language.good_afternoon;
  }

  if (hour >= 17 && hour < 21) {
    return language.good_evening;
  }

  return language.good_night;
};