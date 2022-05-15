# Node JS Project
This is a atandard production-ready setup for Node JS projects.

You can install this preconfigured or run the installation manually with your own config style

## Automatic Installation Guide
- Clone the project
- Install package.json

## Manual Installation Guide

### Set Up nodejs with express and type script
- npm init -y

### set up typescript
- npm i -D typescript ts-node nodemon @types/node @types/express

### set the node js version
- node -v > .nvmrc

### configure eslint
- npm i -D eslint
- npx eslint --init, for node js, use airbnb, style, 

### Configure prettier and map to eslint
- npm i -D prettier eslint-config-prettier eslint-plugin-prettier

### setup absolute paths
- npm i -D eslint-import-resolver-typescript tsconfig-paths

### setup env variables
- npm i -D dotenv-safe @types/dotenv-safe

### Setup jest
- npm i -D jest ts-jest @types/jest
- npx ts-jest config:init


## Packages Installed
- Express JS Server
- TypeScript
- ESlint Configuration
- Prettier Configuration
- Dotenv for environment variables
- Jest for testing
