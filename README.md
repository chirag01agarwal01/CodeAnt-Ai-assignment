https://codeantaichirag.vercel.app/
# CodeAnt AI Frontend Assignment

This project is a frontend implementation for CodeAnt AI, a Y Combinator-backed startup revolutionizing the code quality and security industry. The implementation is based on the provided Figma design and uses ReactJS, HTML, and CSS.
I have used libraries like shadcn, react-router-dom for this.

- Chirag Agarwal

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)


## Overview

CodeAnt AI simplifies coding by leveraging AI-driven and deterministic fixes, making it cleaner, safer, and more efficient. This project is a part of the hiring assignment for the Frontend Developer Intern position.

## Features

- **Optimized Design**: minimum rerenders.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/codeant-ai.git
   cd codeant-ai
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Running the Development Server

To run the development server, use the following command:
```sh
npm run dev
```

### Building the Project

To build the project for production, use the following command:
```sh
npm run build
```

### Previewing the Production Build

To preview the production build, use the following command:
```sh
npm run preview
```

## Project Structure

```
codeant/
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   ├── components/
│   │   ├── dashboard.tsx
│   │   ├── repositories.tsx
│   │   ├── sidebarnavigation.tsx
│   │   ├── signupleft.tsx
│   │   ├── signuppage.tsx
│   │   ├── signupright.tsx
│   │   ├── topbarmenu.tsx
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── input.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   ├── index.css
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```


