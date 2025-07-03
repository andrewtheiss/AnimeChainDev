## Getting Started

### Installation

Install the dependencies 
```bash
npm install

and 

cd Environments 
ls
python3 -m venv AnimeChainDevEnv 
source ./AnimeChainDevEnv/bin/activate
cd ../AnimeChainDev/
(AnimeChainDevEnv):  pip install mkdocs mkdocs-material mkdocsstrings

```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```


### Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

