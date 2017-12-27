# Stream your consciousness

Live demo at https://streamyourconsciousness.shop-freelancer.com/

> A Vue.js demo project. A small micro blog made with vue.js 2. This is a pure client-side solution without a backend server. The project explores the next options when you leave the very basic examples given in the Vue Docs. It is a micro blog which has small articles that are sorted and grouped by date. Articles can have tags as metadata. 

I started the project with a custom store class to read and write data to localstorage. Vuex as a full storage solution was a bit too much for this setup. At least I thought so. At the end things get messier with a custom store. So I decided to integrate a Vuex solution.

The sorting of the ArticlesList got quite complex at the end as I wanted to sort articles by date and id.


I integrated https://github.com/quilljs/quill, a rich text editor, implemented for Vue via https://github.com/davidroyer/vue2-editor Most options are disabled to prevent XSS.
There is also the date picker plugin to change the date https://github.com/charliekassel/vuejs-datepicker Other date pickers caused trouble with the time settings in the user´s browser. This one does it right. To be on the safe side I integrated also https://momentjs.com/ for the date comparision. 

Bootstrap v4 Slate theme of https://bootswatch.com/slate/ Animated.css for effects https://daneden.github.io/animate.css/

What I learned in this project:
Even small components can be become easily bloated. E.g. the ArticleListItem.vue which would be the "Edit" in a CRUD application. On the other hand too much granularity can lead to an overkill. I decided against wrapping the vueeditor in a child component of ArticleListItem for now. But I realized that data() gets a bit messy when having all the properties to show/hide child components. It could be useful to wrap those into a nested config object.

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

Or simply download the included build folder which contains the compiled files and runs without node.



