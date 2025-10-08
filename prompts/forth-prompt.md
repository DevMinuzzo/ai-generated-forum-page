# Project: Pulse Project

You are updating the feature prototype for a minimalist forum system called **Pulse Project**.

Before generating any code, **read and strictly follow** the standards and conventions defined in the following files:

- **Project Guidelines:**  
  https://raw.githubusercontent.com/DevMinuzzo/ai-generated-forum-page/refs/heads/main/PROJECT_GUIDELINES.md
- **SCSS Variables:**  
  https://raw.githubusercontent.com/DevMinuzzo/ai-generated-forum-page/refs/heads/main/src/styles/css_vars.scss

---

## 📦 Stack
- Next.js (Pages Router)
- React
- TypeScript
- SCSS Modules for styling

---

## Next Iteration

You must do these changes:
- The mood shown for a threads in the timeline must move to be on the left side of the author's name. Example: (mood component) {authorName} {postDate}. Only the mood component should change place, the author's name and the posted date should remain the same;
- The see more and see less button in a thread answer should be shown below the answers and should be centralized.

You must not change anything else. Everything else should be the way they are now.

---

## 🎨 Design
- Use the `css_vars.scss` file for all color, spacing, and sizing values.  
- Layout must be **modern, minimalist, and consistent** with the variables.  
- The main content must be centered and limited to a max width of **1080px**.  
- No external CSS libraries (like Tailwind).  

---

## ⚙️ Development Rules
- Follow the folder structure, naming conventions, and typing standards defined in `PROJECT_GUIDELINES.md`.  
- Manage state locally using React hooks (`useState`, `useEffect`).  
- Persist threads and answers using **localStorage**.  
- All code must be within the `/src` folder and use `.ts` or `.tsx` extensions.  
- Each component must have its own folder with `index.tsx` and `index.module.scss`.  

---

## ✅ Output Expectations
Generate the code for the full page implementation according to the above specifications.  
All generated code must comply with the linked guidelines and style variables.