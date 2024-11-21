export const technologies = {
    react: { name: 'React', icon: 'logos:react' },
    css: { name: 'CSS', icon: 'vscode-icons:file-type-css' },
    html: { name: 'HTML', icon: 'vscode-icons:file-type-html' },
    node: { name: 'Node.js', icon: 'vscode-icons:file-type-node' },
    tailwind: { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
    git: { name: 'Git', icon: 'vscode-icons:file-type-git' },
    astro: { name: 'Astro', icon: 'vscode-icons:file-type-astro' },
    javascript: { name: 'Javascript', icon: 'vscode-icons:file-type-js' },
    typescript: { name: 'Typescript', icon: 'vscode-icons:file-type-typescript' },
    cypress: { name: 'Cypress', icon: 'vscode-icons:file-type-cypress' },
    playwright: { name: 'Playwright', icon: 'vscode-icons:file-type-playwright' },
    sass: { name: 'Sass', icon: 'vscode-icons:file-type-sass' },
    svelte: { name: 'Svelte', icon: 'vscode-icons:file-type-svelte' },
    firebase: { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
    netlify: { name: 'Netlify', icon: 'vscode-icons:file-type-netlify' },
    gitlab: { name: 'Gitlab', icon: 'vscode-icons:file-type-gitlab' },
    gatsby: { name: 'Gatsby', icon: 'vscode-icons:file-type-gatsby' },
} as const;

export type TechnologyName = keyof typeof technologies;