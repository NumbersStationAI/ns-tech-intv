# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

To setup your development environment:

1. Follow [these instructions](https://github.com/nvm-sh/nvm#installing-and-updating) to install `nvm` (our suggested way to use Node.js) on your machine. Verify that `nvm` is installed by running:

```
$ command -v nvm
```

2. Run the following command to install Node.js v18.13.0 (https://nodejs.org/en/about/previous-releases):

```
$ nvm i 18.13.0
```

3. (Optional) Run the following command to set Node.js v18.13.0 as your default Node.js version (useful if you have multiple Node.js versions installed and don't want to have to remember to switch to v18.13.0):

```
$ nvm alias default 18.13.0
```

4. Ensure that you have recent versions of Node.js and it's package manager `npm` by running:

```
$ node -v
18.13.0
$ npm -v
8.19.3
```

5. Run the dev server:

```shellscript
npm install
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
