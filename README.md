# amnydn.dev

Personal portfolio site for Ts. Amin Yuddin — Platform Engineering & Technology Architect.

**Live:** [https://amnydn.dev](https://amnydn.dev)

## Tech stack

- **React** 19 + **TypeScript**
- **Vite** 7
- **Firebase Hosting**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & deploy

### Create Firebase project via CLI

1. Install Firebase CLI (if needed): `npm install -g firebase-tools`
2. Log in: `firebase login`
3. Create a new project:

```bash
npx firebase projects:create PROJECT_ID --display-name "Your Display Name"
```

Example:

```bash
npx firebase projects:create amnydn --display-name "amnydn"
```

4. Initialize Hosting in this repo (if not already done):

```bash
npx firebase init hosting
```

5. Link the project: `firebase use --add` and select your project (creates local `.firebaserc`).
6. Build and deploy:

```bash
npm run build       # outputs to dist/
npm run deploy      # build + firebase deploy
```

### Deploy (existing project)

```bash
firebase use --add    # link project if needed
npm run deploy
```

## License

MIT — see [LICENSE](LICENSE).
