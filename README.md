# The Glint — Luxury Jewellery Storefront

A high-performance luxury fine jewellery e-commerce storefront inspired by Glamira and The Glint UK, built with React 19, TypeScript, Vite 8, and Tailwind CSS v4.

---

## 🚀 How to Run Locally (লোকালে চালানোর সঠিক নিয়ম)

### 1. Requirements (প্রয়োজনীয় সফটওয়্যার)
* **Node.js 20 or higher** (Tailwind CSS v4 & React 19 require **Node.js >= 20.0.0**, e.g., Node 20 LTS or Node 22).
  * Check your version in terminal:
    ```bash
    node -v
    ```
  * If your Node version is below 20 (e.g. Node 16 or 18), update it from [nodejs.org](https://nodejs.org).

### 2. Installation (ডিপেনডেন্সি ইন্সটল)
Inside the project folder, open terminal or Command Prompt:
```bash
npm install
```

### 3. Start Development Server (লোকাল সার্ভার চালু করা)
```bash
npm run dev
```
Then open your browser and visit:
👉 **`http://localhost:3000`**

---

### 4. Direct Standalone Tailwind CSS Bundle (জিরো-কনফিগ গ্যারান্টি)
We have included a pre-compiled standalone Tailwind CSS bundle at `public/tailwind.css` linked directly in `index.html`. Even if your local machine's Node environment has trouble with Vite JIT or native WASI binaries, **all 69 kB of luxury design styles load immediately and 100% reliably**!

If you ever add new classes and want to rebuild the static CSS:
```bash
npm run build:css
```

---

## ⚠️ Common Reasons for Broken Design Locally (ডিজাইন ভেঙে যাওয়ার মূল কারণ ও সমাধান)

1. **Old Node.js Version (< 20):**
   * Tailwind CSS v4 uses LightningCSS which requires Node.js 20+. If running on Node 16 or 18, Tailwind styles fail to compile dynamically.
   * **Fix:** Update Node.js to v20 or v22 LTS from [nodejs.org](https://nodejs.org).

2. **Opening `index.html` directly via File Explorer (`file:///`):**
   * Double-clicking `index.html` will NOT work. Modern ES Modules and public asset paths require a local HTTP server.
   * **Fix:** Always use `npm run dev` to start Vite.

3. **External Browser vs VS Code Simple Browser:**
   * VS Code's built-in "Simple Browser" webview sometimes blocks dynamic styles and WebSockets.
   * **Fix:** Open Google Chrome, Microsoft Edge, or Brave and visit `http://localhost:3000`.
