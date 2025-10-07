# Project: Pulse Project

You are generating the initial feature prototype for a minimalist forum system called **Pulse Project**.

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

## 🎯 Objective
Create a **single-page prototype** that follows all conventions from the `PROJECT_GUIDELINES.md`.

The page must include:

1. **Header**  
   - Project title “Pulse Project” centered at the top.

2. **User Selector (Dev Tool)**  
   - Positioned in the top-right corner (outside main content).  
   - 5 mocked users (id + name).  
   - The selected user defines the “current session user” for thread creation.

3. **Thread Creation Form**  
   - Positioned below the header.  
   - Fields: `title`, `mood selector (1–5)`, `body (max 180 characters)`.  
   - Submit button that adds the thread to the timeline.  
   - New threads must include: author name, posting date, title, mood, and body.

4. **Threads Timeline**  
   - Displays all posted threads, newest first.  
   - Each thread includes:
     - Author’s name
     - Date posted
     - Title, mood, and body
     - “Answer” button
     - Answers section showing only the **last answer by default**, with “see more” option to expand.  

5. **Answers**  
   - Answers can only be added to threads (not to other answers).  
   - Each answer has a body (max 180 chars), author, and date.  
   - After submitting, the new answer replaces the last one shown.

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