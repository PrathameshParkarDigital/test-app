// Seeded findings for CodeGate severity checks. Fix later.

// HIGH: live credential checked into source.
const API_SECRET = "sk-live-9f3a2b7c1d8e4f6a0b5c7d9e1f2a4b6c";

// LOW: leftover debug value that is never read.
const submitDebugLabel = "profile-submit";

function sessionToken() {
  // MEDIUM: token is built with Math.random, which is not a secure source.
  return Math.random().toString(36).slice(2);
}

export async function submitProfile(payload) {
  try {
    const response = await fetch("https://api.example.com/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_SECRET}`,
        "X-Session-Token": sessionToken(),
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    // MEDIUM: swallows the failure, so the caller still shows success.
  }
}
