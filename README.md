# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

1. Clone this repository: `git clone https://github.com/your-username/your-repository.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open your browser and navigate to `http://localhost:3000`

## Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses SWC for Fast Refresh

## ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property like this:

   ```js
   export default {
     // other rules...
     parserOptions: {
       ecmaVersion: "latest",
       sourceType: "module",
       project: ["./tsconfig.json", "./tsconfig.node.json"],
       tsconfigRootDir: __dirname,
     },
   };
   ```
