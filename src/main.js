import Vue from 'vue'
import App from './App.vue'

import '@/styles/global/reset.scss'
import '@/styles/global/app.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

   var xhr = new XMLHttpRequest();
$("div").click(function(e){
   var url = "https://api.spotify.com/v1/me/player/next";

   var url1 = "https://api.spotify.com/v1/me/player/previous";
   var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
   var pOffset = $(this).offset(); 
   var x = e.pageX - pOffset.left;
    if(pWidth/2 > x){
      $(this).text('left')
      xhr.open("POST", url);
      }
    else{
      $(this).text('Right')
      xhr.open("POST", url1);
      }
          
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer BQC8Z3I7T1dxTFY7l7jpbKI2bIcxzJmzY2Fr1B5XdzEYSmLwJFEqgwe8DQQo-YdCk_mytDneKfo4vR1RT9tjmctQ4_LvT6tOZOefMr7EVPwbe8jjyhnBm9TtGo_0csW6jBydbI_7hji9bsOE3gpuO4iyOQL1dTQhTnN6AEY");
xhr.setRequestHeader("Content-Length", "0");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

   

xhr.send()
;
});




xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer BQC8Z3I7T1dxTFY7l7jpbKI2bIcxzJmzY2Fr1B5XdzEYSmLwJFEqgwe8DQQo-YdCk_mytDneKfo4vR1RT9tjmctQ4_LvT6tOZOefMr7EVPwbe8jjyhnBm9TtGo_0csW6jBydbI_7hji9bsOE3gpuO4iyOQL1dTQhTnN6AEY");
xhr.setRequestHeader("Content-Length", "0");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      }
}
