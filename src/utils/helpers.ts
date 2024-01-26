import type { User } from "./types";

export const random = (list: string[] | number[]) =>
  list[Math.floor(Math.random() * list.length)];

// a function that converts string to safe variable name
// Path: src/utils/helpers.ts
export const toSafeVarName = (str: string | number) => {
  return str
    .toString()
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .toLowerCase();
};

export const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)

export const vTransitionName = (modelType: string = "meetup", str: string | number) => {
  return `view-transition-name: ${toSafeVarName(modelType)}-${toSafeVarName(
    str
  )}`;
};

// convert 2023-08-26 ti August 26, 2023
// Path: src/utils/helpers.ts
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const mapToValidUser = (user: any): User => {
  return {
    id: user.id,
    full_name: user.first_name + " " + user.last_name,
    email: user.email,
    current_occupation: user?.current_occupation || "",
    meal: user?.meal || "",
    transport: user.transport || "",
    phone: user.phone || "",
    occupation: user.occupation || "",
    created_at: user?.created_at || "",
    github_username: user?.github_username || "",
    avatar_url: user.avatar_url,
    profile_picture: user.profile_picture || "",
    google: user.google,

  }
}


export const DIRECTUS_URL = () => {
  return 'https://directus.frontend.mu';
  // return process.env.NODE_ENV === 'production'
  //   ? 'https://directus.frontend.mu'
  //   : 'http://localhost:8055'
}

// Converts time from 12-hour AM/PM format to 24-hour format.
export const convertTo24HourFormat = (timeStr: string) => {
  const [time, period] = timeStr.match(/(\d+)(AM|PM)/i).slice(1);
  let [hours] = time.split(':').map(Number);
  if (period.toUpperCase() === 'PM' && hours < 12) {
    hours += 12;
  } else if (period.toUpperCase() === 'AM' && hours === 12) {
    hours = 0;
  }
  return `${hours.toString().padStart(2, '0')}:00`;
}

export const base64Url = (base64String: string): string => {
  return "data:image/png;base64," + base64String;
}