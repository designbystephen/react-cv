# Creating a Single React App Repo

This is a simple `create-react-app` starter project. This document is not meant to cover all of the whys, but rather, lead you to a stable and modern development environment for React without a bunch of hassle.

I plan on covering the why in subsequent blog posts.

---

# Prerequisites

- Node.js > 14.0
- Latest Yarn install
- Visual Studio Code (vscode)
- git-scm

---

# Recommended

- git bash terminal (makes it easier to follow along)

---

# Create React App

I find it easier to create the react app first as it does not like when other dependencies or files exist at the root. It can also run into conflicts during the initial installation that can be difficult to understand for beginners. One thing to note is that we must explicitly request the typescript template.

- `$ npx create-react-app . --template typescript`

---

# Configure Yarn/Typescript

## Initialize New Project

Set the yarn version to the most recent version. This will also setup some robust package management behind the scenes.

- `$ yarn set version berry`

## Configure IDE for Yarn Integration

Makes sure that your IDE (vscode used here) understands the location of your yarn packages. Additionally, this provides support for typescript dependencies.

- `$ yarn add --dev @yarnpkg/sdks`
- `$ yarn sdks vscode`

## Add Typescript Plugin

This will automatically install available types for your dependencies as they are added to your project.

- `$ yarn plugin import typescript`

---

# Jest/Test Configuration

We have to take additional steps to get the out of the box jest configuration to work here. Reinstalling the `@testing-library/*` dependencies will solve this issue. We should probably move them to `devDependencies` anyway.

- Add missing dependencies, which will now add automatically add the `@type`'s as well
  - `$ yarn add --dev @testing-library/dom`
- Reinstall existing dependencies, moving them to devDependencies and adding the `@type`'s
  - make note of the versions installed via `package.json`
  - remove them from `dependencies`
  - reinstall with `$ yarn add --dev @testing-library/[PACKAGE]@[VERSION]`
  - NOTE: I think they could have been moved via `package.json` and reinstalled with a simple `$ yarn` but I forgot to test this out
- replace testing import used in `src/setupTests.js`
- with: `import '@testing-library/jest-dom/extend-expect`
- this is from the official create-react-app repo

---

# Workspace Configuration

## git

### .gitignore

It's always good to use this as a template: https://github.com/github/gitignore/blob/main/Node.gitignore. I've made some changes for this project starter but they are recommended but not mandatory.

- [.gitignore](../.gitignore)

### .git/config

React devs frequently use capitalization for component filenames so we should keep those intact when committing.

- `$ git config core.ignorecase true`
- this will only add ignorecase to the project repo under `.git/config`

## .editorconfig

I've included a basic configuration with this repo that sets you up with .jsx and .tsx support.

- [.editorconfig](../.editorconfig)

## .prettierrc

I've included a basic configuration with this repo that basically reinforces what our `.editorconfig` already has.

---

# Linting

- add `airbnb-eslint` dependencies
  - `$ yarn add --dev eslint-config-airbnb eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier prettier`
- add missing dependencies (again)
  - just need to replace the dependencies that the resolution step mentioned are missing from our `react-starter@workspace`
  - I made sure to notes the version requested by each package during the failed resolution step in the `yarn.lock` file
  - `$ yarn add --dev eslint@^8.2.0 eslint-plugin-import@2.27.5 eslint-plugin-react@^7.28.0 eslint-plugin-react-hooks@^4.3.0`
- add `airbnb-typescript` dependencies
  - `$ yarn add --dev eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin@^5.13.0 @typescript-eslint/parser@^5.0.0`
- add `.eslintrc` file
  - I've included a basic configuration with this repo
  - **NOTE**: don't skip this part as there are several configuration options you will need in this file
- add script to run lint in workspace
  - I've modified the `package.json` in this project to include this script
- add `husky` and `lint-staged`
  - `$ yarn add --dev husky lint-staged`
  - add `.huskyrc.json`
    - I've included this in the project repo
  - add `.lintstagedrc.json`
    - I've include this in the project repo

---

# Cleaning Up

- `$ rm package-lock.json`
  - Remove this as we are using yarn as the package manager
- `$ yarn cache clean`
  - Cleaning cache at this point is recommend by Yarn docs
- `$ yarn`
  - Install, link, and rebuild cache of packages
