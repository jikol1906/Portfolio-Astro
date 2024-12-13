export const technologies = {
  react: { name: "React", icon: "logos:react", size: 'big' },
  css: { name: "CSS", icon: "vscode-icons:file-type-css", size: 'big' },
  html: { name: "HTML", icon: "vscode-icons:file-type-html", size: 'medium' },
  javascript: { name: "Javascript", icon: "vscode-icons:file-type-js", size: 'medium' },
  typescript: { name: "Typescript", icon: "vscode-icons:file-type-typescript", size: 'medium' },
  tailwind: { name: "Tailwind", icon: "logos:tailwindcss-icon", size: 'small' },
  redux: { name: "Redux", icon: "logos:redux", size: 'small' },
  reduxSaga: { name: "Redux-Saga", icon: "logos:redux-saga", size: 'small' },
  node: { name: "Node.js", icon: "vscode-icons:file-type-node", size: 'small' },
  git: { name: "Git", icon: "vscode-icons:file-type-git", size: 'small' },
  astro: { name: "Astro", icon: "vscode-icons:file-type-astro", size: 'small' },
  gatsby: { name: "Gatsby", icon: "vscode-icons:file-type-gatsby", size: 'small' },
  cypress: { name: "Cypress", icon: "vscode-icons:file-type-cypress", size: 'small' },
  playwright: { name: "Playwright", icon: "vscode-icons:file-type-playwright", size: 'small' },
  sass: { name: "Sass", icon: "vscode-icons:file-type-sass", size: 'small' },
  figma: { name: "Figma", icon: "logos:figma", size: 'small' },
  svelte: { name: "Svelte", icon: "vscode-icons:file-type-svelte", size: 'small' },
  firebase: { name: "Firebase", icon: "vscode-icons:file-type-firebase", size: 'small' },
  java: { name: "Java", icon: "vscode-icons:file-type-java", size: 'small' },
  netlify: { name: "Netlify", icon: "vscode-icons:file-type-netlify", size: 'small' },
  gitlab: { name: "Gitlab", icon: "vscode-icons:file-type-gitlab", size: 'small' },
}  as const satisfies Record<
  string,
  { name: string; icon: string, size: Size }
>;

export type TechnologyName = keyof typeof technologies;

export type Size = 'big' | 'medium' | 'small';
