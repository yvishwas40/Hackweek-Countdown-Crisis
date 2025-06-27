# 🚀 Hackweek Countdown Crisis – Fixed and Deployed!

This is a Next.js application that displays a live countdown timer to the end of Hackweek and shows community information loaded from a local JSON file. The original version had a **React hydration mismatch error** and other subtle issues, all of which have been resolved in this version.

---

## ✅ Fix Summary

### 1. Hydration Error (Countdown Timer)
- **Issue:** The countdown timer relied on `Date.now()`/`new Date()` in the initial render, causing a mismatch between server-rendered and client-rendered HTML.
- **Fix:** The countdown is now only rendered after the component mounts on the client using a `useEffect` hook and a `remaining` state initialized as `null`. This ensures no countdown values are rendered on the server, preventing hydration errors.

### 2. Hydration Error from Inline Styles
- **Issue:** Conditional logic for inline styles using `typeof window !== 'undefined'` was used in the render, causing different outputs for server and client.
- **Fix:** Conditional logic has been moved into a `useEffect`-driven state variable. The main element's styling is now consistent between server and client.

### 3. Safe Local JSON Fetch (Community Info)
- **Issue:** The community info used a fetch request to `/cosc.json` in `useEffect`, which delayed rendering and could result in hydration issues if not handled safely.
- **Fix:** Null-safe rendering ensures that no content is rendered until the data is available, avoiding hydration mismatch.

---

## 🛠️ Technologies Used

- [Next.js 15](https://nextjs.org/)
- React 19 (Client Components)
- Tailwind CSS 4
- Deployed via [Vercel](https://vercel.com/)


## 🙌 Author

Made with ❤️ for COSC Hackweek  
By yvishwas40

---

**Replace:**
- `your-vercel-deployment` → with your actual Vercel deployment URL
- `your-username` → with your GitHub username
- Add/change screenshots in `public/screenshots/`
- Update author name as needed

---
