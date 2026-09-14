const API_URL = "https://api.api-ninjas.com/v1/animals";

export async function getAnimal(name) {
  const response = await fetch(
    `${API_URL}?name=${encodeURIComponent(name)}`,
    {
      headers: {
        "X-Api-Key": import.meta.env.VITE_ANIMAL_API_KEY,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("API hatası:", data);
    throw new Error(`API hatası: ${response.status}`);
  }

  return data;
}