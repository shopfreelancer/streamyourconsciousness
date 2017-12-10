<!-- template for the modal component -->
<template id="article-update">
<transition name="modal">
    <div class="modal-mask" @click="close">
        <div class="modal-container">
            <div id="update-article-modal" class="modal fade show" v-bind:class="{ 'activeModal' : showArticleUpdateModal}">
              <div class="modal-dialog" @click.stop>
                  
                <div class="modal-content" >
                
                  <div class="modal-header">
                    <slot name="header">
                      Edit Article
                    </slot>
                  </div>

                  <div class="modal-body">
                    <slot name="body">
                      <textarea v-model.lazy="article.text" placeholder="add article text..."></textarea>
                    </slot>
                  </div>

                  <div class="modal-footer">
                    <slot name="footer">

                          <button type="button" class="modal-default-button btn btn-primary" @click="submitForm">Submit</button>


                    </slot>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</transition>
</template>


<script>
import { EventBus } from '../event-bus.js';
import {ArticlesStore} from '../main.js'    
    
export default {
  name : "ArticleUpdate",
  template : '#article-update',
    mounted: function () {
        document.addEventListener("keydown", (e) => {
          if (this.showArticleUpdateModal && e.keyCode == 27) {
            this.close();
          }
        });
      }, 
  methods: {
    submitForm(){
        this.$parent.$emit('updatedArticle', this.article);
       
        // @todo: close modal, reset form

    },
    close() {
        // @todo: reset form
        this.$emit('close');
    }
  },


  // @todo: probably not needed when parent to child communication is done via Events
  props : ['article','showArticleUpdateModal'],
    
  data () {
    return {
      errorMessage : "" 
    }
  }
}
</script>

<style>
 
    #update-article-modal textarea {
        width:100%;
        background-color: #303030;
        color:#fff;
    }
    
    .modal {
        display:block;
    }
 
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    transition: opacity .1s ease;
}

.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
   
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  
}



/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>