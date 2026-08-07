// Vite only injects env vars that start with VITE_ from a ROOT .env file (not src/.env).
// Restart `npm run dev` after any .env change.
const rawKey = import.meta.env.VITE_DOG_API_KEY;
const API_KEY =
  typeof rawKey === 'string'
    ? rawKey.trim().replace(/^["']|["']$/g, '')
    : '';

const BASE_URL = 'https://api.thedogapi.com/v1';

function getHeaders() {
  const headers = {};
  if (API_KEY) {
    headers['x-api-key'] = API_KEY;
  }
  return headers;
}

async function request(path) {
  if (!API_KEY) {
    throw new Error(
      'Missing VITE_DOG_API_KEY. Create a file named .env in the project root (next to package.json), add VITE_DOG_API_KEY=your_key, save, then stop and restart npm run dev.'
    );
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    const hint =
      response.status === 403
        ? ' (403 usually means the API key is missing, wrong, or not loaded by Vite — check root .env and restart the dev server)'
        : '';
    throw new Error(`API error: ${response.status}${hint}`);
  }

  return response.json();
}

export const dogApi = {
  getAllBreeds: async (limit = 100) => {
    try {
      return await request(`/breeds?limit=${limit}`);
    } catch (error) {
      console.error('Error fetching all breeds:', error);
      throw error;
    }
  },

  searchBreeds: async (searchTerm) => {
    try {
      const q = encodeURIComponent(String(searchTerm).trim());
      return await request(`/breeds/search?q=${q}`);
    } catch (error) {
      console.error('Error searching breeds:', error);
      throw error;
    }
  },

  getBreedById: async (breedId) => {
    try {
      return await request(`/breeds/${breedId}`);
    } catch (error) {
      console.error('Error fetching breed details:', error);
      throw error;
    }
  },

  getBreedImages: async (breedId, limit = 10) => {
    try {
      return await request(
        `/images/search?breed_id=${breedId}&limit=${limit}`
      );
    } catch (error) {
      console.error('Error fetching breed images:', error);
      throw error;
    }
  },
};
