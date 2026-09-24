# React Authentication App

### Tools built with :

- React 
- React Hooks
  - useState
  - useEffect 
  - useContext 
- Context API 
- Local Storage
- Vite

**Live demo:** https://react-authentication-app.vercel.app

A small demo of sharing login state across components with React Context.
Logging in with any valid-looking email and a password of at least 9
characters stores the email and a random placeholder token in `localStorage`;
logging out clears them.

> **This is not real authentication.** There is no backend: the "token" is a
> random string generated in the browser and the "secret" page is shipped in
> the JavaScript bundle to everyone. Use it to learn the Context API pattern,
> not to protect anything. Real apps should verify credentials on a server and
> keep session tokens out of `localStorage` (e.g. in `HttpOnly` cookies).

### Getting started
Requires Node.js 12.2+ (verified with Node 24).

```bash
npm install
npm run dev
```

### Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
