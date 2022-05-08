import Vue from 'vue'
import App from './App.vue'

import '@/styles/global/reset.scss'
import '@/styles/global/app.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

var xhr = new XMLHttpRequest();

 $("div").click(function(*e*) {

  var url = "https://api.spotify.com/v1/me/player/next";

  var url1 = "https://api.spotify.com/v1/me/player/previous";

  var pWidth = $(this).innerWidth(); *//use .outerWidth() if you want borders*

  var pOffset = $(this).offset();

  var x = e.pageX - pOffset.left;

  if (pWidth / 2 > x) {

​    $(this).text('left');

​    xhr.open("POST", url);

  } else {

​    $(this).text('Right');

​    xhr.open("POST", url1);

  }



  xhr.setRequestHeader("Accept", "application/json");

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.setRequestHeader("Authorization", "Bearer BQCB0Rl1__-v1lFf2UMAyAYsQae95T2mISZgGInPLRCXxGieJQqGsgh90GApBJasKfzODnJSESgvMGpTnsSJnJEzdUj2hKFS-Z_KrYA9H8F-nmw2yKLAmBIfWbEPm4syPpjX_f2cu_1GLDrbIv7sbIIr-bPq_3XGEjQfRyg");

  xhr.setRequestHeader("Content-Length", "0");



  xhr.onreadystatechange = function() {

​    if (xhr.readyState === 4) {

​      console.log(xhr.status);

​      console.log(xhr.responseText);

​    }

  };





  xhr.send();

});







xhr.setRequestHeader("Accept", "application/json");

xhr.setRequestHeader("Content-Type", "application/json");

xhr.setRequestHeader("Authorization", "Bearer BQCB0Rl1__-v1lFf2UMAyAYsQae95T2mISZgGInPLRCXxGieJQqGsgh90GApBJasKfzODnJSESgvMGpTnsSJnJEzdUj2hKFS-Z_KrYA9H8F-nmw2yKLAmBIfWbEPm4syPpjX_f2cu_1GLDrbIv7sbIIr-bPq_3XGEjQfRyg");

xhr.setRequestHeader("Content-Length", "0");



xhr.onreadystatechange = function() {

  if (xhr.readyState === 4) {

​    console.log(xhr.status);

  }

};