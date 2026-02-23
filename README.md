# Todo - Dashboard

A responsive Todo Dashboard that fetches todos from JSONPlaceholder, with pagination, toggle completion, and local add-todo support.


## Functional Requirements (Implemented)

 Fetch todos from `https://jsonplaceholder.typicode.com/todos?_page=<page>&_limit=<limit>`
 Dynamic fetch by page with query key `['todos', page]`
 Loading state 
 Error state 
 Pagination: 10 items per page, Previous/Next, current page display 
 Page changes trigger correct API call (TanStack Query) 
 Toggle completed status with immediate UI update 
 Add new todo (local only, appears on current page) |

---

 => UI & Structure : 

- Clean, responsive layout (mobile-first)

=> Setup & Running Locally

### Prerequisites

- Node.js 18+

### Install dependencies

```
cd todo-dashboard
npm install

```
then , 
```
npm run dev

```

Then open `http://localhost:3000` in your browser.

 => Project structure :

```
todo-dashboard/
├── app/
│   ├── layout.js    
│   ├── page.js         
│   ├── providers.js   
│   └── globals.css     
├── components/
│   ├── AddTodo.js     
│   ├── TodoList.js    
│   ├── TodoItem.js     
│   └── Pagination.js  
├── services/
│   └── todoApi.js     
└── lib/
    └── queryClient.js  
