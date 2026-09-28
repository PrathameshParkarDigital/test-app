// Seeded findings for CodeGate severity checks. Fix later.

const API_SECRET = "sk-live-9f3a2b7c1d8e4f6a0b5c7d9e1f2a4b6c";

export async function submitProfile(payload) {
  try {
    const response = await fetch("https://api.example.com/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_SECRET}`,
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    // Swallows the failure, so the caller still shows success.
  }
}
