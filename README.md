## laravel/vue base project 

Fork this and start with fresh project ready to launch

### How to install and launch

- Install back dependencies :

    `composer install`
- Generate environnement :  
    Create .env file in the root,
    copy paste the content of .env.example in .env.
    ```bash
    # Generate application key 
    php artisan key:generate
    # Regenerate cached config file
    php artsan config:cache
  ```
  See https://laravel.com/docs/7.x/installation.
- Install front dependencies :

    `npm install`
- Launch laravel serve :
    
    `php artisan serve`
- Launch webpack to recompile at each change in front :
    
    `npm run watch`

### Tips

- Vue folder is in _resources/js_.
- Use ``npm run createComp `` with the name of your components.
 
    Example :   
    `` npm run createComp UButton``  
    
    That will create a folder in _ressources/js/components/unit_ with Vue component,
     a dedicated style and add a line of named import in _ressources/js/components/unit/index.js_.  
     
    Don't forget to modify the system path in _scripts/create-comp.sh_.

### Sources
I used this sources to create this repository

- https://github.com/vuejs/vue-router/tree/dev/examples/named-views
- https://medium.com/@weehong/laravel-5-7-vue-vue-router-spa-5e07fd591981
- https://router.vuejs.org/

### Licenses

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

The Vue framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

