
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

# Tangan Kanan

Tangan Kanan is an AI-powered business assistant built with Next.js, Tailwind CSS, and a modern set of UI/component libraries. The app aims to help entrepreneurs manage and enhance various business aspects—from legal assistance to financial planning and marketing strategies—by providing intelligent, context-aware guidance using LLM integrations.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## Overview

This project is designed to:

* **Interact with multiple LLM models:** Our primary integration is with Gemini LLM, but the architecture is flexible enough to accommodate other models.
* **Enable multi-language support:** Using i18next/next-i18next and a custom TranslationProvider, the app supports English and Indonesian (with easy extensibility).
* **Offer secure user management:** Authentication, profile management, and session handling are implemented via Clerk.
* **Provide an intuitive, modern UI:** Leveraging Tailwind CSS and shadcn/ui, the interface uses utility-first design principles with a custom “New York” design style.
* **Establish contextual AI responses:** Using modules like MCPUtils and MCPContext, the app builds dynamic contexts for richer interactions.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## Features

* **Multi-Language & Localization:**
  *Dynamic translations* handled by our TranslationProvider and i18n configuration.
* **Authentication & User Profiles:**
  Integrated with [Clerk](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) to securely manage user authentication and sessions. Protected routes and middleware ensure sensitive pages are safe.
* **AI-Powered Query Interface:**
  Users can interact with the business assistant via a chat-driven UI that queries Gemini LLM. Context is built dynamically to provide personalized insights.
* **Modern, Responsive UI Components:**
  Built with Tailwind CSS and shadcn/ui, the component library (e.g., buttons, dropdowns, language switcher) creates a consistent and polished user experience.
* **Extensible Architecture for Third-Party Integration:**
  Easily integrate additional APIs and data visualization libraries (like Chart.js or Recharts) to expand the dashboard functionality over time.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## Tech Stack & Libraries

* **Framework & Rendering:**
  * [Next.js](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for React-based server-side rendering, routing, and API routes.
* **Styling & UI:**
  * [Tailwind CSS](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for utility-first styling.
  * [shadcn/ui](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for prebuilt, customizable components.
* **Authentication:**
  * [Clerk](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for secure, production-ready user handling.
* **State Management & Data Fetching:**
  * [React Query (TanStack Query)](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) (suggested for asynchronous state)
  * Optionally consider lightweight state libraries like [Zustand](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for local state management.
* **Internationalization:**
  * [i18next](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) and [next-i18next](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for localization and language switching.
* **LLM Integration:**
  * Custom modules in [geminiService.ts](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) and API endpoints to interact with Gemini LLM or future models.
* **Miscellaneous & Utilities:**
  * Axios (or fetch) wrapped in a custom API client (`src/utils/apiClient.ts`).
  * [Class Variance Authority](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) and [clsx](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) for dynamic, modular component styling.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## Architectural Overview & Coding Guidelines

* **Modular Architecture:**
  The project splits the code into well-defined areas:
  * **Components:** UI components reside under [components](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), with dedicated subfolders (e.g., `/ui`) for reusable elements.
  * **Context & State:** Global context providers such as TranslationProvider (for i18n) and MCPContext (for multi-turn conversation context) are located in [context](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).
  * **Services & API Integration:** API clients, such as the Gemini LLM integration (`src/services/geminiService.ts`) and custom API routes under [api](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html), encapsulate business logic.
  * **Utils & Helpers:** Utility functions (for class name merging, etc.) are in [lib](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) or [utils](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).
* **TypeScript & Strict Type-Checking:**
  The [tsconfig.json](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) is configured for strict mode and incremental builds, ensuring reliable type safety throughout the codebase.
* **Coding Conventions:**
  * Use consistent naming conventions for components, contexts, and utility modules.
  * Write small, focused functions for clarity, e.g., for language routing in [middleware.ts](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).
  * Maintain modular CSS with Tailwind and avoid global styles where possible by utilizing component-based stylesheets.
* **Environment Management:**
  Keep sensitive keys (e.g., GEMINI_API_KEY) in environment variables and reference them in your code ([`process.env.GEMINI_API_KEY`]) to avoid hardcoding secrets.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## Setup & Development

1. **Clone the Repository & Install Dependencies:**

   **git** **clone** <**repository-ur**l>

   **cd** **tangan-kanan**

   **npm** **install**

   > If you run into issues with npm (especially on Windows with PowerShell), try switching your terminal to Command Prompt or use `yarn`/`pnpm`.
   >
2. **Environment Variables:**
   Create a [.env.local](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) file in the project root and add your necessary environment variables:

   **NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-fronten**d-api>

   **GEMINI_API_KEY=`<your-gemini-api-key>`**
3. **Run the Development Server:**

   **npm** **run** **dev**
4. **Lint & Build Commands:**

   * Lint: `npm run lint`
   * Build: `npm run build`
   * Start production server: `npm run start`

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## LLM & AI Integration

* **Gemini LLM Endpoint:**
  The project uses a custom [queryGemini](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) function in [geminiService.ts](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) to send queries and context data to the Gemini LLM.
* **MCP Context Builder:**
  The file [MCPUtils.ts](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) builds the context from user data, which can be extended to support multi-turn conversations.
* **API Routes:**
  API routes under [api](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) (such as [route.ts](vscode-file://vscode-app/c:/Users/Soros/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)) facilitate server-side communication with the LLM. These areas can be expanded or adapted to work with other LLMs in future iterations.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## Future Enhancements

* **State Management:**
  Evaluate using React Query for efficient data fetching and caching or Zustand for local state management as your app scales.
* **Extended LLM Support:**
  Implement a modular architecture so support for additional LLMs/frameworks can be plugged in effortlessly.
* **Analytics & Persistence:**
  Integrate third-party APIs and visualization libraries (like Chart.js) to provide live insights on business metrics.
* **Accessibility & User Feedback:**
  Continually improve accessibility (voice input/output) and introduce user feedback loops to refine the assistant's recommendations.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

## Conclusion

Tangan Kanan is built to be a robust, scalable, and flexible AI-powered business assistant. With a modern tech stack, strict TypeScript standards, and thoughtful architectural planning, the project is designed to evolve quickly while remaining maintainable and accessible for developers across different LLM and API integrations.

Feel free to explore, contribute, and expand on the project!

–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Happy Coding!
