# Test CI Demo

This repository hosts a minimal Node.js project used to validate the CI workflows (`build-validation`, `publish-images`, and `releases`).

## Local Development

- `npm install` – Install dependencies.
- `npm test` – Run the unit tests with the built-in `node:test` runner.
- `npm run start` – Print the friendly greeting to stdout.
- `npm run format` – Format all files with Prettier.
- `npm run format:check` – Verify formatting without writing changes.

## Docker

```bash
docker build -t test-ci .
docker run --rm test-ci
```

The container prints **Hello, World!**.
iuqoghqogqehge
g
HELLOOOOOOOOOOOOOOOOOOOOOO

## Release Flow

The `release` workflow bumps the version in `package.json`, tags the repository, builds and publishes the Docker image to GHCR, and finally promotes the `latest` tag.
