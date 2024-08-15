# Design System

This repository contains a **Design System** built with **React**, **Storybook**, **Rollup**, and **Babel**. It provides a collection of reusable components and tools to ensure a consistent UI/UX across your applications.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Storybook](#storybook)
- [Building the Library](#building-the-library)

## Features

- **Reusable Components**: A library of React components that can be used across multiple projects.
- **Storybook Integration**: Easily view and interact with components in an isolated environment.
- **Rollup for Bundling**: Optimized bundling of your design system for efficient use in various environments.
- **Babel Transpiling**: Write modern JavaScript and have it transpiled to be compatible with older environments.

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- **Node.js** (>= 14.x)
- **npm** or **yarn**

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Mumtahin/design-system.git
cd design-system
npm install
# or
yarn install
```

## Usage

### Importing Components

You can import and use the components in your React project like this:

```javascript
import { Button } from 'your-design-system';

function App() {
  return (
    <div>
      <Button label="Click Me!" />
    </div>
  );
}

export default App;
```

### Storybook

Storybook is used to visualize and test components in isolation. To start Storybook:

```bash
npm run storybook
# or
yarn storybook
```

After running the command, open your browser and navigate to http://localhost:6006 to view the components.


### Building the Library

To build the library for production, run:

```bash
npm run build
# or
yarn build
```

This will generate the bundled and transpiled code in the dist/ directory, which you can then publish or use in your projects.

