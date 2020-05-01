const mix = require("laravel-mix");

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".vue", "scss"],
        alias: {
            "@": __dirname + "/resources/vue"
        }
    },
    module: {
        rules: [
           {
              test: /\.scss$/,
              loader: "sass-loader",
              options: {
                 data: `          
                 @import "@/assets/scss/fundations/_colors.scss";
                 @import "@/assets/scss/fundations/_fonts.scss";
                 @import "@/assets/scss/fundations/_typographies.scss";
                 @import "@/assets/scss/_mixins.scss";
                 `
              }
           }
        ]
     }
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/vue/app.js', 'public/js')
