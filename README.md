# amnydn.dev

Personal portfolio site for Ts. Amin Yuddin — Platform Engineering & Technology Architect.

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

1. Create a [Firebase project](https://console.firebase.google.com) and enable Hosting.
2. Run `firebase use --add` and select your project (creates local `.firebaserc`).
3. Build and deploy:

```bash
npm run build       # outputs to dist/
npm run deploy      # build + firebase deploy
```

## License

MIT — see [LICENSE](LICENSE).
