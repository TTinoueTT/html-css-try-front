// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // runtimeConfig APIは、環境変数のような値をアプリケーションの残りの部分に公開します。
    // デフォルトでは、これらのキーはサーバーサイドでのみ利用可能です。
    // runtimeConfig.public 内のキーは、クライアントサイドでも利用可能です。
    // これらの値は nuxt.config で定義されるべきで、環境変数を使って上書きすることができます。
    // runtimeConfig: {
    //     // サーバーサイドでのみ利用可能な秘密鍵
    //     apiSecret: "123",
    //     // public内のキーはクライアントサイドでも公開されます
    //     public: {
    //         apiBase: "/api",
    //     },
    // },
});
