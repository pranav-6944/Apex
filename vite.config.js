import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isVercel = Boolean(process.env.VERCEL);
  const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS || process.env.DEPLOY_TARGET === 'gh-pages');

  let base = '/';
  if (command === 'build' && isGitHubPages && !isVercel) {
    base = '/Apex/';
  }

  return {
    plugins: [react()],
    base,
    server: {
      port: 5173,
      host: true
    }
  };
});
