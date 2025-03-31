export async function buildMCPContext(userId: string, topic: string) {
  // Fetch user-specific data (e.g., business type, preferences)
  const userData = await fetchUserData(userId);

  return {
    user: userData,
    topic,
    history: [], // Add conversation history if needed
  };
}

async function fetchUserData(userId: string) {
  // Mock user data fetch
  return {
    id: userId,
    businessType: "Retail",
    location: "New York",
  };
}