# Todo Dashboard

**RoundTechSquare – Frontend Internship Assignment**

A responsive Todo Dashboard that fetches todos from JSONPlaceholder, with pagination, toggle completion, and local add-todo support.

---

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TanStack Query** (React Query) – data fetching, caching, loading/error states
- **Tailwind CSS** – styling
- **Axios** – HTTP client for API calls

---

## Functional Requirements (Implemented)

| Requirement | Status |
|------------|--------|
| Fetch todos from `https://jsonplaceholder.typicode.com/todos?_page=<page>&_limit=<limit>` | ✅ |
| Dynamic fetch by page with query key `['todos', page]` | ✅ |
| Loading state | ✅ |
| Error state | ✅ |
| Pagination: 10 items per page, Previous/Next, current page display | ✅ |
| Page changes trigger correct API call (TanStack Query) | ✅ |
| Toggle completed status with immediate UI update | ✅ |
| Add new todo (local only, appears on current page) | ✅ |

---

## UI & Structure

- Clean, responsive layout (mobile-first)
- Proper folder structure: `app/`, `components/`, `services/`, `lib/`
- Separation of concerns: API in `services/`, data fetching in components, shared client in `lib/`

---

## Setup

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm / bun)

### Install and run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Submission

- **GitHub repository:** _[Add your repo link here]_
- **Deployed link:** _[Add your Vercel/Netlify link here]_

---

## Project structure (relevant parts)

```
todo-dashboard/
├── app/
│   ├── layout.js       # Root layout, viewport, metadata
│   ├── page.js         # Home page, page state, local todos
│   ├── providers.js    # TanStack Query provider
│   └── globals.css     # Global styles
├── components/
│   ├── AddTodo.js      # Add new todo (local)
│   ├── TodoList.js     # Fetches list via useQuery, pagination
│   ├── TodoItem.js     # Single todo + toggle completed
│   └── Pagination.js   # Previous / Next, page number
├── services/
│   └── todoApi.js      # fetchTodos(page, limit) – API integration
└── lib/
    └── queryClient.js  # TanStack Query client
```

---

## API

- **Base URL:** `https://jsonplaceholder.typicode.com/todos`
- **Pagination:** `?_page=<page>&_limit=<limit>` (e.g. `_page=1&_limit=10`)

---

_Assignment completed for RoundTechSquare Frontend Internship – Assignment Round._
