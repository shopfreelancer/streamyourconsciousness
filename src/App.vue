<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                
            </div>
        </div>
    </div>
    <router-view/>
    <div class="container">
        <button type="button" @click="resetApp()" class="btn btn-outline-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Reset App</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js';

export default {
  name: 'app',
  data () {
    return {
        locale : ""
    }
  },
  methods : {
      resetApp(){
          EventBus.$emit('resetData');
      },
      detectLocale : function(){
        var language;
        if (window.navigator.languages) {
            language = window.navigator.languages[0];
        } else {
            language = window.navigator.userLanguage || window.navigator.language;
        }
        
        EventBus.locale = language;
        EventBus.$emit("configChanged")
      }
  },
    created : function(){
        this.detectLocale();
  }
}
</script>
