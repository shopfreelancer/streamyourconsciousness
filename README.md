# Stream your consciousness

Live demo at https://streamyourconsciousness.shop-freelancer.com/

> A Vue.js demo project. A small micro blog made with vue.js 2.2 This is a pure client-side solution without a backend server. This project explores the next options when you leave the very basic examples given in the vue.js docs. The project is a micro blog which has small articles that are sorted and grouped by date. Articles can have tags as metadata. The project uses a custom store class to read and write data to localstorage. Vuex as a full storage solution was a bit too much for this setup.

I integrated quill.js, a rich text editor, implemented for Vue via https://github.com/davidroyer/vue2-editor Most options are disabled to prevent XSS.
There is also the date picker plugin to change the date https://github.com/charliekassel/vuejs-datepicker Other date pickers caused trouble with the time settings in the user´s browser. This one does it right. To be on the safe side I integrated also https://momentjs.com/ for the date comparision. 

Bootstrap 4 Slate theme of https://bootswatch.com/slate/
Animated.css for effects https://daneden.github.io/animate.css/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
