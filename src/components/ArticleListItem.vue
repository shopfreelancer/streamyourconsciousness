<template id="article-list-item-template">
<div class="article-list-item-wrap">
    <div v-show="article.dateHeadline" class="col-lg-8">
        <h2>{{ article.created | formatDateHumanReadable }}</h2>
    </div>
    <div class="card article-list-item">
        <div class="card-body">
            <div class="article-text-wrap">
                <blockquote @click="editArticleForm" v-show="!showEditArticleTextarea" class="card-blockquote">
                    <div v-show="!showEditArticleTextarea" v-html="article.text"></div>
                </blockquote>

                <vue-editor v-bind:id="editorId" 
                            v-show="showEditArticleTextarea" 
                            v-model="article.text"
                            :editorToolbar="customEditorToolbar"
                            >
                </vue-editor>

                <button @click="editArticleForm" v-show="showEditArticleTextarea" type="button" class="btn-save-article-text btn btn-primary">Save Article</button> 
            </div>
            <span class="fa pull-right touchable-elem" v-on:click="showCardFooter = !showCardFooter" v-bind:class="[showCardFooter ? 'fa-arrow-circle-up' : 'fa-arrow-circle-down']"></span>
        </div>
        <transition name="card-footer-slide"    
                    enter-active-class="animated zoomInDown"
                    leave-active-class="animated zoomOutUp">
            <div v-show="showCardFooter" class="card-footer">
                <div class="article-tag row">
                    <div class="col-md-6">
                        <article-tag v-for="(tag,index) in article.tags" 
                                      v-bind:showDeleteTagButtons="showDeleteTagButtons" 
                                      v-bind:key="index"
                                      v-bind:tag="tag">
                        </article-tag>
                        <span v-on:click="toggleTagInputField()" class="touchable-elem fa fa-plus-circle"></span>
                        <span v-on:click="toggleDeleteTagButtons()" class="touchable-elem fa fa-minus-circle"></span>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control form-control-sm" v-bind:class="[tagInputFieldHasErrors ? 
'is-invalid' : '']" v-show="showTagInputField" @keypress.enter="addTag()" v-model="newTag" type="text" placeholder="Add new tag">
                        <div v-if="tagInputFieldHasErrors" class="invalid-feedback">{{tagInputFieldErrorMessage}}</div>
                    </div>    
                </div>
                <div class="article-date row">
                    <div class="col-md-6">    
                        <span class="btn btn-outline-secondary  btn-sm" @click="showDatepicker = !showDatepicker">Edit date</span>
                    </div>
                    <div class="col-md-6">
                        <span v-show="!showDatepicker" class="article-item-date">{{article.created | formatDateHumanReadable}}</span>
                        <date-picker v-on:selected="showDatepicker = false"
                             v-show="showDatepicker"
                             wrapper-class="sf-articlelist-datepicker"
                             input-class="form-control form-control-sm"
                             v-model="article.created">
                        </date-picker> 
                    </div>
                </div>
                <div class="article-delete row">
                    <div class="col-sm-12">
                        <button type="button" @click="deleteArticle(articleIndex)" class="btn btn-outline-secondary btn-sm" aria-label="Delete Article">
                            <span>Delete Article</span>
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>    
                </div>
            </div>

        </transition>
    </div>
</div>
</template> 

<script>
import DatePicker from 'vuejs-datepicker';
import moment from 'moment';    
import ArticleTag from '@/components/ArticleTag'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'ArticleListItem',   
  methods: {
      /**
      * There are several instances of the vue-editor on the list page, so dynamic ids are necessary
      */
      getEditorId(){
          return "vue-editor-"+this.articleIndex;
      },
      editArticleForm(){
        this.showEditArticleTextarea = !this.showEditArticleTextarea
      },
      toggleTagInputField(){
          if(this.showTagInputField === true) {
              this.showTagInputField = false;
              this.clearTagInputField();
          } else {
              this.showTagInputField = true;
          }
      },
      toggleDeleteTagButtons(){
          this.showDeleteTagButtons = !this.showDeleteTagButtons;
      },
      deleteArticle(articleIndex){
          this.$parent.$emit('deleteArticle',articleIndex)
      },
      addTag(event){
          var self = this;
          if(this.article.tags.includes(this.newTag)){
              this.tagInputFieldHasErrors = true;
              this.tagInputFieldErrorMessage = "Your tag already exists.";
          } else {
            this.article.tags.push(this.newTag);
            this.clearTagInputField();
          }
      },
      deleteTag(tag){
          let tagIndex = this.article.tags.indexOf(tag);
          this.article.tags.splice(tagIndex,1);
      },
      clearTagInputField(){
            this.newTag = "";
            this.tagInputFieldHasErrors = false;  
            this.tagInputFieldErrorMessage = "";
      },
      toggleDeleteTagButtons(){
            if(this.showDeleteTagButtons === true) {
              this.showDeleteTagButtons = false;
          } else {
              this.showDeleteTagButtons = true;
          }
      },
  },
  created() {
      var self = this;
        this.$on("deleteTag", function (tag) {
            self.deleteTag(tag);
      });
      this.editorId = this.getEditorId();
  },
  filters: {
      formatDateHumanReadable : function(value){
          return moment(value).format('LL'); 
    },
  },
 props : ['article','articleIndex'],   
    components: {
         ArticleTag,
         DatePicker,
         VueEditor
  },
  data () {
    return {
      newTag : "",
      showCardFooter : false,
      showTagInputField : false,
      tagInputFieldHasErrors : false,
      tagInputFieldErrorMessage : '',
      showDeleteTagButtons : false,
      showDatepicker : false,
      showEditArticleTextarea : false,
      editorId : "",
      customEditorToolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'font': [] }],
            [{ 'align': [] }],
          ]    
    }
  }
}
</script>

<style>
    .article-list-item.card {
        margin-bottom: 1rem;
    }
    
    .article-text-wrap textarea {
        width:100%;
    }

    .card-footer {
        background:transparent;
        border-top:0;
    }
    
    .card-footer .row {
        margin-bottom:10px;
        padding-top:10px;
        padding-bottom:10px;
        border-bottom:1px solid #000;
    }
    
    .card-footer .article-tag {
        border-top:1px solid #000;
    }
    
    .card-blockquote {
        white-space: pre-line;
    }
    
    .btn-save-article-text {margin-top:10px;}
    
    .article-text-wrap .quillWrapper .ql-snow.ql-toolbar {
        background-color:#ccc;
    }
    
    .sf-articlelist-datepicker
    .vdp-datepicker__calendar .cell.selected,.sf-articlelist-datepicker
    .vdp-datepicker__calendar .cell.selected.highlighted,
    .sf-articlelist-datepicker .vdp-datepicker__calendar .cell.selected:hover {
        background-color:#32383e;
    }
    
    .sf-articlelist-datepicker .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
    .sf-articlelist-datepicker .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, 
    .sf-articlelist-datepicker .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
        border-color:#32383e;
    }
    
    @media (max-width: 576px) {
        .touchable-elem {
            font-size:40px;
        }
    }
    
    @media (min-width: 577px) and (max-width: 768px) { 
        .touchable-elem {
            font-size:32px
        }
    }
</style>
