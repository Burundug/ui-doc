const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build'); // или просто 'build' если хочешь стандартную структуру
mix.copy('source/_template/_assets/img', 'source/assets/build');
mix.jigsaw()
    .js('source/_template/_assets/js/main.js', 'js')
    .css('source/_template/_assets/css/main.css', 'css', [ // изменил путь с build/css на css
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
    ])
    .options({ processCssUrls: false })
    .browserSync({
        server: 'build_local',
        files: ['build_local/**'],
    })
    .sourceMaps()
    .version();
