# React Native Next.js Monorepo

> Exploring universal apps (_native and web_) —[bootstrapped with solito](https://solito.dev/)

👾 [View the website](https://example.solito.dev)

- Select the folder `apps/next` as the root of your Next.js app on the Vercel setup.

## 📦 Included packages

- `solito` for cross-platform navigation ([Talk at Next.js Conf](https://www.youtube.com/watch?v=0lnbdRweJtA))
- `moti` for animations
- `dripsy` for theming/design (you can bring your own, too)
- Expo SDK
- Next.js
- React Navigation

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Getting started

```
yarn
yarn web
yarn native
```

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

## 👏 Kudos

- Fernando Rojo on Twitter: [@FernandoTheRojo](https://twitter.com/intent/follow?screen_name=fernandotherojo)
