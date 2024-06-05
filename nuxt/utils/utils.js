const strapiBaseUri = process.env.API_URL || "http://localhost:1337";

export function getStrapiMedia(url) {
    // Check if URL is a local path
    if (url.startsWith("/")) {
      return `${strapiBaseUri}${url}`;
    }
    return url;
  }

export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-UK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }