# Project: Pulse Project

This is a minimalist project that implements a small forum system where different users can post and answer threads.

## AI Integration Context
This file defines the coding standards and project conventions that AI coding assistants (Claude, Copilot, etc.) must follow when generating or modifying code for this project.
AI tools should focus on implementing new features, refactoring existing code to meet the standards, and avoid unnecessary file structure modifications.

## Stack
- Next.js (Pages Router)
- React
- Typescript
- SCSS for styles

## Project Folder Structure
The src folder must be created respecting the following structure:

- /src
    - /components
        - shared (for shared components)
    - /data
    - /pages (folder that contains the page routes)
    - /styles (global styles and scss variables)
    - /typings (all shared interfaces and types must be in this folder)
    - /utils (all utilities files must be in this folder)

All other files that are in the root by default in Next.js project must stay as it is, like package.json, .gitignore, next.config.ts, etc...

## Naming Conventions
- Components and folders: PascalCase
- Files (non-component): camelCase
- SCSS variables: kebab-case
- CSS classes: camelCase
- Interfaces: PascalCase
- Utility functions: camelCase

## Code Conventions
- The project must be compatible with Next.js 14+ and TypeScript 5+.
- All the source code must be within the /src folder;
- All code files must have .ts or .tsx files;
- Components must be within /src/components folder and have .tsx extension;
    - Each component that can be potentially reused, like buttons, must be added to the /src/components/shared folder;
    - Components that are not reusable must be directly in the /src/components folder;
    - If more than one component that is not shared belong to the same context, like threads and its children, for instance, a new folder can be created inside the /src/components folder and the components folders can be added to it;
    - Each component must have its own folder with its name, and must have its implementation in the index.tsx and styles in the index.module.scss;
    - Each component must have its own .scss file;
    - The import of the component .scss must be "import styles from './index.module.scss'" and the classes must be used by calling styles.myClass;
    - There must NOT HAVE any .tsx component files that are not called index.tsx.
    - Component props must be typed and use interfaces for it. The type can be used just in case of merging existing types or interfaces;
    - Component props interfaces must always have the component name followed by Props suffix;
- Utils function must be added to the /src/utils folder;
- Don't use Tailwind or any external css library;
- Global .scss files (like variables or resets) must be imported only in _app.tsx.
- Since it's a single page feature there is no need to create new routes;

### Example Component Structure
/src/components/ThreadCard/
  - index.tsx
  - index.module.scss

## State Management
- State should be managed locally using React useState and useEffect hooks.
- There should be no global state management libraries like Redux or Zustand.

## Main Features
- User selector:
    - In order to test the feature there must be a user selector with multiple users.
        - The user selector must allow the "main user" to select the current session user;
        - Any new thread posting or answer must be named after the current session user;
        - must have 5 mocked users with id and name.

- Threads form:
    - Users can post threads that can be answered by other users.
        - Each thread must have a title, a mood selector and a body, which will contain the thread content;
        - The mood selector must allow the current session user to select a mood, from 1 to 5, that will be attached to its thread;
        - The body content can have a maximum length of 180 characters;
        - The current session user can submit the thread by clicking on a submit button;
        - After submitting the thread it must be added to the threads timeline.

- Threads timeline:
    - All the posted threads must be organized in a timeline order from the newest one to the oldest one.
        - Each thread must be displayed inside its own container, which also includes its answers;
        - Threads must also show the author's name before the title and the date it was posted;
        - Threads must have a answer button that allows user to answer that specific thread;
        - Threads must show only the last answer by default, but have a see more button to show the rest of the answers.

- Threads answers:
    - Users can answer any posted thread by clicking on the answer button in the thread container.
        - Only threads can be answered, answers can't be answered;
        - Answers don't have a mood, only a body content that must also respect the 180 characters threshold;
        - The answer posting date must be shown as well.

## Designs
The design should be modern and minimalist, it must respect strictly the variables values from the css_vars.scss file as well, including colors, spacings, border settings, breaking points, etc.

- Main content:
    - The page main content must be contained within a centralized container with max-width of 1080px;
    - There must be a headline with the project name on the top of the main content;

- Dev Tools:
    - The user selector must be on the top right corner and not part of the main content, since this is a development feature;
    - The selected user information, like name, must be visible and clear for the user in order to know what is the current session user;

- Threads form:
    - The thread form must be right underneath the headline and always positioned above the threads timeline;
    - The thread form must be organized in the following order: title, mood selector and body;
    - The thread form must have a submit button that will create a new thread and add it to the thread timeline;

- Threads timeline:
    - Each thread must be organized within its own container with a margin that separate it from the next thread;
    - Threads must show the title, author's name, mood and body in an organized way;
    - The answer button must be on the bottom right corner of the thread container;
    - Below the thread main content must have the answers container;
    - The answers container must show only the last answer by default, but can be expanded to show all the answers by clicking on a see more button;

- Threads answers:
    - When clicking on the answers button in the thread main content a answer form must be opened between the thread main content and the last answer;
    - The answer form must container a text area with a max length of 180 characters and a submit button to post the answer;
    - After posting the answer the answer form must be hidden and the last answers is replaced by the one that was submitted;
    - The answers container must have a left padding to be aligned more to the right than the thread container, to give the clear idea that it's not part of the thread main content;
    - Answers must show the body content, posting date and also the author's name.

## Data Storing
- All the static mocked data must be added to the /src/data folder;
- Session users must be stored as mocked data since they will not change during the usage of the application;
- All the posted threads must be saved in the local storage in the browser to persist after refreshing the page and sessions;
- Local storage keys must be prefixed with ‘pulse_’ to avoid conflicts;
- In order to know to whom which thread or answer belong the user id must also be added to the thread data.

## Development Guidelines
- All code generated by AI tools must comply with this document.
- Manual adjustments are allowed only to fix runtime or build errors.
- Any deviation from these conventions must be justified and documented.
