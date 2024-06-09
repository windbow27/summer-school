const strapiBaseUri = process.env.API_URL || "http://localhost:1337";

export function getStrapiMedia(url: string) {
    // Check if URL is a local path
    if (url.startsWith("/")) {
      return `${strapiBaseUri}${url}`;
    }
    return url;
  }

export function formatDate(date: string | number | Date) {
    return new Date(date).toLocaleDateString("en-UK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

export function getVerificationCode() {
  const code = Math.floor(100000 + Math.random() * 900000);

  // Convert the number to a string and return it
  return code.toString();
}