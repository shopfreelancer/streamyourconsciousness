<template>
  <modal name="article-update-modal"
         :width="300"
         :height="300"
         >
    <b>test</b>
  </modal>
</template>


<script>
import { EventBus } from '../event-bus.js';
import VModal from 'vue-js-modal'
    
export default {
  name: 'ArticleUpdateModal',
  extends: VModal
}
</script>