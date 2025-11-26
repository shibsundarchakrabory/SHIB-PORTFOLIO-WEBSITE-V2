# SHIB-PORTFOLIO-WEBSITE

This is my personal portfolio website, built with React and Vite, and hosted on GitHub Pages.

**Live Site:** [https://shibsundarchakrabory.github.io/SHIB-PORTFOLIO-WEBSITE-V2/](https://shibsundarchakrabory.github.io/SHIB-PORTFOLIO-WEBSITE-V2/)

---

## Managing and Updating the Site

This guide will walk you through setting up the project locally and deploying updates to the live website.

### 1. Initial Setup (First Time Only)

If you're setting up this project on a new machine, follow these steps first.

**A. Clone the Repository**

Clone the project from GitHub to your local machine:

```bash
git clone https://github.com/shibsundarchakrabory/SHIB-PORTFOLIO-WEBSITE-V2.git
```

**B. Navigate to the Project Directory**

```bash
cd SHIB-PORTFOLIO-WEBSITE-V2
```

**C. Install Dependencies**

Install all the necessary project dependencies using npm:

```bash
npm install
```

### 2. Running the Site Locally for Development

Before you push any changes to the live site, you should always test them locally.

To start the local development server, run:

```bash
npm run dev
```

This will start a local server, usually at `http://localhost:5173`. You can open this URL in your browser to see a live preview of your site. The server will automatically reload as you save your changes.

### 3. Updating the Live Site

Once you have made your changes and tested them locally, follow these steps to update the live website on GitHub Pages.

**Step A: Add and Commit Your Changes**

Use Git to stage and commit your changes. It's good practice to write a clear commit message describing what you've changed.

```bash
# Stage all your changes
git add .

# Commit the changes with a message
git commit -m "Describe the changes you made, e.g., 'Updated project section'"
```

**Step B: Push Your Source Code to GitHub**

Push your committed changes to the `main` branch on GitHub. This saves your source code.

```bash
git push origin main
```

**Step C: Deploy to GitHub Pages**

Run the deploy script. This single command handles the entire deployment process.

```bash
npm run deploy
```

#### What `npm run deploy` does:

1.  **`npm run build`**: It first builds the production-ready version of your site. This process bundles all your code and assets into a `dist` folder.
2.  **`gh-pages -d dist`**: It then takes the contents of the `dist` folder and pushes them to the `gh-pages` branch of your repository.

GitHub Pages is configured to serve the website from this `gh-pages` branch. Your updates should be live within a few minutes.