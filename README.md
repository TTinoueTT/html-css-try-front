# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


参考記事: https://reffect.co.jp/vue/nuxt3
## ファイル、ディレクトリ構成について
### app.vue ファイルについて
> app.vueファイルはNuxt 3のメインコンポーネント。
> 複数のページを作成する場合はpagesディレクトリを利用しますがpagesディレクトリはオプションなので必ず利用する必要はありません。
> ランディングページのみ、ルーティングが必要ないアプリケーションの場合は、app.vueファイルを利用するだけでアプリケーションを構築することができます。
> app.vueファイルのみ利用した場合にはルーティングのvue-routerをバンドルする必要がないためビルド後のバンドルファイルのサイズを減らすことができます。
> クライアントが受け取るデータ量も減るためページの表示速度の高速化につながります。

#### NuxtWelcome コンポーネント
> [nuxt/assets](https://github.com/nuxt/assets/tree/main/packages/templates/templates/welcome)


### app.vue 以外のファイル
- nuxt.config.ts    … Nuxtに関する設定を行う
- tsconfig.json     … TypeScript の設定ファイル

### componentsディレクトリ
> コンポーネントファイルを保存。Auto Imports機能によりimoprt文を利用しなくても自動でコンポーネントのimportが行われる

│┬┴ ┼├ ┤└ ┘┌ ┐
### pagesディレクトリ
> app.vueファイルだけでアプリケーションを構築することができる(SPAなどのページ遷移しない実装)
> しかし、複数ページで構成するアプリケーションが通常必要になってくるので、ページを追加したい場合は
> pagesディレクトリを利用する。
> Nuxt ではファイルベースルーティングを採用しているため、pagesディレクトリの中にファイルを作成することで自動でルーティングが行われる
> app.vue に `<NuxtPage />` タグを挿入することで、pagesディレクトリの内容を表示することになる

```vue:app.vue
<template>
    <div>
        <NuxtPage />
    </div>
</template>
```


```:pagesディレクトリ構成
/pages ─┐
        ├ html-css-try
```



`localhost:8030/`