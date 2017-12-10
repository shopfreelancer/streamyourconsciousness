<template id="article-list-template">
<div>
    <div class="container"> 
      <div class="row">
            <div class="col-lg-8">
                <div class="jumbotron">
                    <div class="article-create-wrap">
                        <h2>Stream your consciousness</h2>
                        <textarea class="form-control" placeholder="What´s on your mind today?" v-model="newArticle"></textarea>
                        <button @click="createArticle()" class="btn btn-primary" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        
        <article-list-item
  v-for="(article, index) in sortedList"
  v-bind:article="article"
  v-bind:articleIndex="index"
  v-bind:key="article.id"
></article-list-item>
   </div>
</div>
</template> 
   
   
<script>
import { EventBus } from '../event-bus.js';
import ArticleListItem from '@/components/ArticleListItem'
import { ArticlesStore } from './ArticlesStore.js' 
import moment from 'moment'

export default {
    name: 'ArticleList',   
    methods: {
        createArticle(){
            var articleData = {
                'text' : this.newArticle,
                'created' : moment().format('Y-MM-DD'),
                'tags' : [] 
            }
            this.articles.unshift(articleData);
            this.newArticle = "";
        },
        /**
        * Delete one article from articles
        */
        deleteArticle(index) {
            this.articles.splice(index, 1 );
        },
        articleUpdateModal(article) {
            this.showArticleUpdateModal = true;
            this.article = article;
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
          this.articles.forEach(function(article, index){
              article.editorId = "vueEditor"+index;
          })
          return this.articles;
      }
    },
  data () {
    return {
      newArticle : '',
      articles : ArticlesStore.articles,
    }
  },
    components: {
        "article-list-item" : ArticleListItem,
  }
}
</script>

<style>
    .article-create-wrap textarea {margin-bottom:10px;min-height:140px;}
</style>
