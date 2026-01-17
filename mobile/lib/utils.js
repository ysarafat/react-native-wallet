// lib/utils.js
export function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
