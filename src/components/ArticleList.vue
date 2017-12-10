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
            this.articles.splice(index, 1);
        },
       /**
        * Group articles by created date. Generate a headline for the first article with certain date
        */
        setDateHeadlinesFlag(){
         
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
        },
        /**
        * Sort articles by date. This is used only for rendering.
        */
        sortArticlesByDateDesc(){
            this.articles.sort(function(a, b) {
                return moment(a.created).isAfter(b.created, 'day') ? -1 : moment(a.created).isBefore(b.created, 'day') ? 1 : 0;
            });
        },
        sortArticlesByIdandDateRange(){
            var self = this,
            dateHeadlineIndexes = [];
            
            this.articles.forEach(function(article,index){
                if(article.dateHeadline === true) dateHeadlineIndexes.push(index);
            });
            
            Array.prototype.move = function(from, to) {
                this.splice(to, 0, this.splice(from, 1)[0]);
            };
          
                let i = 0;
                let articlesRangeIds = [];
                let articlesRange = this.articles.slice(dateHeadlineIndexes[i],dateHeadlineIndexes[i+1]);
                var sortedArticlesRange = this.sortArrayRangeByIdDesc(articlesRange);
                console.log(sortedArticlesRange);
                // dann stimmt aber auch die dateHeadline Flag nicht mehr und damit nichts
                // andere Option: das Datum erweitern um Uhrzeit
                // @todo. das muesste anders laufen. Erst group by date, dann sortieren nach id, dann die flags setzen.
                sortedArticlesRange.forEach(function(el){
                      self.articles.splice(el.newindex, 0, self.articles.splice(el.oldindex, 1)[0]);
                      if(el.newindex === 0){
                     
                      }
                      
                
                    
                    
                    console.log("from "+el.oldindex+" to "+el.newindex)
                    //this.articles.move(el.oldindex,el.newindex);
                })
                console.log(this.articles);
            
               
                
            
                
        
    
            // lauf das array durch. speichere neue sort order indexe in array. 
         
        },
        moveArticle(from,to){
            this.articles.splice(to, 0, this.articles.splice(from, 1)[0]);
        },
        sortArrayRangeByIdDesc(articlesRange){
            
            articlesRange.forEach(function(el,index) {
                el.oldindex = index;
            });
            articlesRange.sort(function(a, b) {
                return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
            });
            articlesRange.forEach(function(el,index) {
                el.newindex = index;
            });
            
            return articlesRange;
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
              this.sortArticlesByDateDesc();

              this.sortArticlesByIdandDateRange();
              
              this.setDateHeadlinesFlag();
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
