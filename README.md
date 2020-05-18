# laravel/vue base project

Fork this and start with fresh project ready to launch

### How to install and launch

-   Install back dependencies :
    `composer install`

-   Generate environnement :  
     Create .env file in the root,
    copy paste the content of .env.example in .env.
    ```bash
    # Generate application key
    php artisan key:generate
    # Regenerate cached config file
    php artisan config:cache
    ```
    See https://laravel.com/docs/7.x/installation.
-   Install front dependencies :
    `npm install`

-   Launch laravel server :
    `php artisan serve`
-   Launch webpack to recompile at each change in front :
    `npm run watch`

### Tips

-   Vue folder is in _resources/vue_.
-   Use `npm run createComp` with the name of your components.

    Example :  
     `npm run createComp UButton`

    That will create a folder in _resources/vue/components/unit_ with Vue component,
    a dedicated style and add a line of named import in _resources/vue/components/unit/index.js_.

    Don't forget to modify the system path in _scripts/create-comp.sh_.

-   [VSCODE USER] _./jsconfig.json_ is the config file to allow vscode users auto suggestion in import with "@"
-   _./webpack.mix.js_ say to webpack to use alias "@" for _resources/vue_
    and load global scss variables

### Sources

I used this sources to create this repository

-   https://github.com/vuejs/vue-router/tree/dev/examples/named-views
-   https://medium.com/@weehong/laravel-5-7-vue-vue-router-spa-5e07fd591981
-   https://router.vuejs.org/
-   https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/

### Licenses

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

The Vue framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
