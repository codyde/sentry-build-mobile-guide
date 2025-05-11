# Sentry Build Workshop Guide

This repository contains the documentation and guide for the Sentry Build workshop, built using [Astro Starlight](https://starlight.astro.build).

## About the Workshop

Sentry Build is a hands-on workshop that teaches developers how to integrate Sentry into Next.js applications. The workshop covers:

- Getting started with a Next.js project
- Installing and configuring Sentry
- Using Session Replay to understand user interactions
- Monitoring application performance with custom traces
- Leveraging AI-powered features to automatically fix bugs

## Workshop Content

The workshop is divided into five main sections:

1. **Code Breaks... So What Now** - Introduction and project setup
2. **Install Sentry!** - Installation and initial configuration
3. **Replaying the Problem** - Session Replay functionality
4. **Tracing Performance** - Performance monitoring and custom spans
5. **AI Autofix Robots Arrive** - AI-powered error fixing capabilities

## Running the Documentation Locally

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/getsentry/sentry-build-workshop.git
cd sentry-build-workshop

# Install dependencies
npm install

# Start the development server
npm run dev
```

The documentation will be available at `http://localhost:4321`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Contributing

If you'd like to contribute to this workshop, feel free to open a pull request or file an issue on the repository.

## Resources

- [Sentry Documentation](https://docs.sentry.io/)
- [Next.js SDK Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Astro Starlight Documentation](https://starlight.astro.build/)
