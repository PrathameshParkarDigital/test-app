const noteDebugLabel = "quick-note";

export async function saveQuickNote(text) {
  try {
    const response = await fetch("https://api.example.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NOTES_API_KEY}`,
      },
      body: JSON.stringify({ text }),
    });
    return response.json();
  } catch {
  }
}
