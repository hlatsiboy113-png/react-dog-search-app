const API_KEY = import.meta.env.VITE_DOG_API_KEY;
const BASE_URL = 'https://api.thedogapi.com/v1';

export const dogApi = {
  getAllBreeds: async ( ) => {
    try {
      const response = await fetch(`${BASE_URL}/breeds?limit=100`, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all breeds:', error);
      throw error;
    }
  },

  searchBreeds: async (searchTerm) => {
    try {
      const response = await fetch(`${BASE_URL}/breeds/search?q=${searchTerm}`, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching breeds:', error);
      throw error;
    }
  },

  getBreedById: async (breedId) => {
    try {
      const response = await fetch(`${BASE_URL}/breeds/${breedId}`, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching breed details:', error);
      throw error;
    }
  },

  getBreedImages: async (breedId, limit = 10) => {
    try {
      const response = await fetch(
        `${BASE_URL}/images/search?breed_id=${breedId}&limit=${limit}`,
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching breed images:', error);
      throw error;
    }
  },
};
