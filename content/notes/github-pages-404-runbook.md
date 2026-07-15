# GitHub Pages 404: A Deployment Runbook

> A troubleshooting note based on deploying this React portfolio. Last verified: July 2026.

## The mental model

```text
Source code --npm build--> build/ --publish--> gh-pages branch
                                                   |
                                      Pages source configured?
                                         /                 \
                                       no                   yes
                                       |                     |
                                     404          GitHub serves the site
```

A successful build proves compilation. A successful `gh-pages` push proves the deployment branch exists. Neither proves that GitHub Pages is configured to serve that branch.

## Layer-by-layer diagnosis

### 1. Confirm the repository type and URL

For a project repository named `lokesh_portfolio`, the default URL is:

```text
https://USERNAME.github.io/lokesh_portfolio/
```

A user site instead requires a repository named `USERNAME.github.io`.

### 2. Confirm the React base path

Create React App uses the `homepage` field when generating asset URLs.

```json
{
  "homepage": "https://USERNAME.github.io/lokesh_portfolio"
}
```

Build and inspect the generated HTML:

```bash
npm run build
grep -o 'static/js/[^" ]*' build/index.html
```

The final page must request assets beneath `/lokesh_portfolio/`, not `/static/...` at the domain root.

### 3. Confirm the deployment branch

```bash
git ls-remote --heads origin gh-pages
```

No output means the remote branch does not exist. Publish it:

```bash
npm run deploy
```

A typical setup uses:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 4. Configure the publishing source

In GitHub, open **Settings -> Pages** and select:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

Wait for the Pages deployment workflow to finish before testing.

### 5. Verify the live response

```bash
curl -I -L https://USERNAME.github.io/lokesh_portfolio/
```

Then open the Network panel and verify that JavaScript, CSS, images, PDF files, and client-side routes return 200.

## Failure decision tree

```text
Public URL returns 404
  |
  +-- gh-pages branch missing? ------> run the deploy command
  |
  +-- Pages site not configured? ----> select branch and root folder
  |
  +-- repository is private? --------> confirm plan and Pages access
  |
  +-- root works, assets 404? --------> fix homepage/base path
  |
  +-- refresh on /route fails? ------> add SPA fallback or use hash routing
  |
  +-- old bundle still visible? -----> inspect workflow, cache, and commit SHA
```

## Environment variables

React substitutes environment variables during the build. A value in `.env.local` affects a build created on your machine, but it is not automatically available to GitHub Actions.

```text
Local build:   .env.local -> npm build -> static bundle
Actions build: repository secret -> workflow env -> npm build -> static bundle
```

Only expose browser-safe values. Never place a service-role key or deployment access token in a `REACT_APP_*` variable.

## Useful verification table

| Evidence | What it proves |
|---|---|
| `npm run build` succeeds | source compiles |
| `build/index.html` exists | build output was created |
| remote `gh-pages` exists | files were published to Git |
| Pages workflow succeeds | GitHub processed the source |
| public URL returns 200 | the site is being served |
| form submission returns 201 | a critical runtime integration works |

## Key lesson

Deployment is a pipeline, not one command. Verify every boundary—compile, artifact, publish, platform configuration, asset paths, and live runtime behavior.

