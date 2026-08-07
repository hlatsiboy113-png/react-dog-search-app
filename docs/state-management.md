# PawFinder State Management

## Why Context API (not Redux)

PawFinder is a small portfolio app with one domain: dog breeds, search, and favourites.

| Concern | Context API | Redux |
|--------|-------------|--------|
| Setup cost | Low (built into React) | Higher (store, slices, providers) |
| Shared state scope | Few fields, few update paths | Better for large, many-feature apps |
| DevTools | React DevTools → Components → `DogProvider` | Redux DevTools |
| Boilerplate | Minimal | Actions, reducers, selectors |

**Choice: React Context API** via `DogProvider` / `useDogContext`.

- Shared state is consumed by more than three components (SearchBar, DogGrid, Navbar, FavoriteButton, Favorites, Home/ResultsHeader, DogDetails).
- Updates are simple (`setSearchTerm`, `toggleFavorite`, fetch results into `dogs`).
- No need for middleware, normalized entities, or time-travel debugging for this scope.

Redux would be justified if we added auth, complex multi-step filters, offline queues, or many independent feature teams. That is out of scope here.

---

## State shape

```text
DogContext value
├── dogs: Breed[]          // current list from The Dog API
├── setDogs
├── searchTerm: string     // controlled search input
├── setSearchTerm
├── favorites: Breed[]     // user favourites (persisted to localStorage)
├── setFavorites
├── isFavorite(id)         // derived helper
├── toggleFavorite(dog)    // add/remove favourite
├── loading: boolean       // list fetch in progress
├── setLoading
├── error: string | null   // list fetch error message
└── setError
```

### Breed object (from The Dog API)

Fields the app relies on (do not invent others):

- `id`, `name`, `life_span`, `temperament`
- `origin`, `breed_group`, `description`
- `weight.metric`, `height.metric`
- `image.url` (when present)

Favourites store full breed objects so cards render offline from cache after refresh.

Persistence key: `localStorage['pawfinder-favorites']`.

---

## Data flow diagram

```text
                    ┌─────────────────────┐
                    │   The Dog API       │
                    │ api.thedogapi.com   │
                    └──────────┬──────────┘
                               │ fetch
                               ▼
                    ┌─────────────────────┐
                    │   dogApi.js         │
                    │ getAllBreeds        │
                    │ searchBreeds        │
                    │ getBreedById        │
                    │ getBreedImages      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   useDogs.js        │
                    │ debounced searchTerm│
                    │ → setDogs/loading/  │
                    │   error             │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   DogContext        │
                    │   (DogProvider)     │
                    └──────────┬──────────┘
           ┌───────────────────┼───────────────────┐
           ▼                   ▼                   ▼
      SearchBar            DogGrid              Navbar
      (searchTerm)         (dogs, loading,      (favorites count)
                           error)                    │
           │                   │                     ▼
           │                   ▼               Favorites page
           │                DogCard              (favorites)
           │                   │
           │                   ▼
           │            FavoriteButton
           │            (toggleFavorite)
           │                   │
           │                   ▼
           │             DogDetails
           │          (getBreedById +
           │           getBreedImages)
           └───────────────────┘
```

---

## Component read / write matrix

| State piece | Read by | Written by |
|-------------|---------|------------|
| `searchTerm` | SearchBar, Home → ResultsHeader, DogGrid (empty copy), useDogs | SearchBar (`setSearchTerm`) |
| `dogs` | DogGrid, Home → ResultsHeader | useDogs → `setDogs` |
| `loading` | DogGrid, Home | useDogs → `setLoading` |
| `error` | DogGrid | useDogs → `setError` |
| `favorites` | Navbar (badge), Favorites page, `isFavorite` | `toggleFavorite` / FavoriteButton |
| `isFavorite` / `toggleFavorite` | FavoriteButton, DogCard (indirect), DogDetails | FavoriteButton (user click) |

**Shared state used by at least three components (assignment):**

1. **SearchBar** — writes `searchTerm`
2. **DogGrid** — reads `dogs`, `loading`, `error`, `searchTerm`
3. **Navbar** — reads `favorites.length`
4. **FavoriteButton** — reads/writes favourites via `isFavorite` / `toggleFavorite`
5. **Favorites** page — reads `favorites`

---

## API integration

| Method | Endpoint | Used for |
|--------|----------|----------|
| `getAllBreeds` | `GET /v1/breeds?limit=250` | Home list |
| `searchBreeds` | `GET /v1/breeds/search?q=` | Debounced search |
| `getBreedById` | `GET /v1/breeds/:id` | Details when router state is missing |
| `getBreedImages` | `GET /v1/images/search?breed_id=` | Details gallery |

Search is **debounced (400ms)** in `useDogs` so Context `searchTerm` can update on every keystroke without flooding the API.

---

## How to inspect state in React DevTools (for Loom)

1. Open the app and the browser **React Developer Tools**.
2. Go to the **Components** tab.
3. Select **`DogProvider`** in the tree (under the router).
4. In the right-hand panel, expand **hooks** / context value.
5. Demo:
   - Type in search → `searchTerm` updates; after debounce `dogs` / `loading` change.
   - Heart a card → `favorites` array grows; Navbar badge updates.
   - Open Favourites route → same `favorites` array drives the page.

No Redux DevTools are required because the app uses Context, not Redux.
