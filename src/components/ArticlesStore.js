import Vue from 'vue'
import articlesDataJson from '../json/articles.json';
import { EventBus } from '../event-bus.js';
   
export const ArticlesStore = new Vue({
    data: {
        articles: []
    },
    created() {
        var self = this;
        if ( localStorage.articles ) {
            this.articles = this.getLocalstorage();
        } else {
          this.initData();
        }
        
        EventBus.$on('resetData',function(){
            self.resetData();
        })
    },
    watch: {
        articles: {
          handler: function () {
            this.update();          
          },
          deep: true,
        }
    },    
    methods: {
        update() {
            this.setLocalstorage(this.articles);
        },
        setLocalstorage(data) {
          var articleData = JSON.stringify(data);
          localStorage.setItem("articles", articleData);
        },
        getLocalstorage() {
           var articleData = localStorage.getItem("articles");
           articleData = JSON.parse( articleData );

          return articleData;
        },
        /**
        * Load inital Articles data from JSON file
        */
        initData(){
       
            if(!typeof articlesDataJson || articlesDataJson.length < 1){
                return false;
            }
            
            /**
            * To achieve reactivity and avoid Change Detection Caveats, use Setter
            * https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
            */
            for(let i = 0; i<articlesDataJson.length;i++){
                this.$set(this.articles, i, articlesDataJson[i]);
            }
        },
        /**
        * Delete all data, then init Localstorage
        */
        resetData(){
            if(this.articles.length > 0){
                this.articles.splice( 0, this.articles.length );
            }
            localStorage.clear();
            this.initData();
        },
    }
})