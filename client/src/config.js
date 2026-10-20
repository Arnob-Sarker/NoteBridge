// In development the API runs on its own port; in production the Express
// server serves the React build, so the API is on the same origin.
let BASE_URL = "/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
