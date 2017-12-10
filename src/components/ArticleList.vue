<template id="article-list-template">
    <div class="container">
        <article-list-item
              v-for="(article, index) in sortedList"
              v-bind:article="article"
              v-bind:articleIndex="index"
              v-bind:key="article.id">
        </article-list-item>
   </div>
</template> 
   
   
<script>
import { EventBus } from '../event-bus.js';
import ArticleListItem from '@/components/ArticleListItem'
import moment from 'moment'

export default {
    name: 'ArticleList',   
    methods: {
        /**
        * Delete one article from articles
        */
        deleteArticle(index) {
            this.articles.splice(index, 1 );
        },
       /**
        * Group articles by created date. Generate a headline for the first article with certain date
        */
        generateArticlesDateHeadlines(){
         
            var articlesIndexes = [],
            lastIndex = this.articles.length -1;

            this.articles.forEach(function(article,index){
                articlesIndexes.push(index);
            });
            
            this.searchNextMatchingDate(articlesIndexes,lastIndex);
        },
        /**
        * Search next date, which matches the first date in array
        */
        searchNextMatchingDate(articlesIndexes,lastIndex){
            var self = this,
            newArticlesIndexes = [],
            searchForMatchingDateOfIndex = articlesIndexes[0];

            for(let i = 0 ; i < articlesIndexes.length; i++){
                let currentIndex = articlesIndexes[i];
                
                self.articles[currentIndex].dateHeadline = 
                (articlesIndexes[i] === searchForMatchingDateOfIndex) ? true : false;
                
                let date1 = self.articles[searchForMatchingDateOfIndex].created,
                    date2 = self.articles[currentIndex].created;
                
                if(!moment(date1).isSame(date2, 'day')){
                    newArticlesIndexes = articlesIndexes.slice(i,articlesIndexes.length);
                    break;
                }
            }

            if(newArticlesIndexes.length > 0){
                self.searchNextMatchingDate(newArticlesIndexes,lastIndex);
            }
        }     
      },
      created() {
          var self = this;

          self.$on("deleteArticle", function (index) {
              self.deleteArticle(index);
          });

      },
    computed: {
      sortedList: function () {
          this.generateArticlesDateHeadlines();
          return this.articles;
      }
    },
  data () {
    return {
      newArticle : '',
      articles : this.$articlesStore.articles,
    }
  },
    components: {
        ArticleListItem,
  }
}
</script>

<style scoped>
</style>
