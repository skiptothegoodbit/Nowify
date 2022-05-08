
<template>
  <div id="app">
    <Component
      :is="getCurrentComponent"
      :auth="auth"
      :endpoints="endpoints"
      :player="player"
      @spotifyTrackUpdated="updateCurrentTrack"
      @requestRefreshToken="requestRefreshTokens"
    ></Component>
  </div>
</template>

		<script>
import Authorise from '@/components/Authorise'
import NowPlaying from '@/components/NowPlaying'


import { getStoredAuth, setStoredAuth } from '@/utils/utils.js'

export default {
  name: 'App',

  components: {
    Authorise,
    NowPlaying
  },

  props: {},

  data() {
    return {
      storedAuth: '',
      test: 'hello, world',
      auth: {
        status: false,
        clientId: process.env.VUE_APP_SP_CLIENT_ID,
        clientSecret: process.env.VUE_APP_SP_CLIENT_SECRET,
        authCode: '',
        accessToken: '',
        refreshToken: ''
      },
      endpoints: {
        auth: 'https://accounts.spotify.com/authorize',
        token: 'https://accounts.spotify.com/api/token',
        base: 'https://api.spotify.com/v1',
        nowPlaying: 'me/player/currently-playing'
      },
      player: {
        playing: false,
        trackArtists: [],
        trackTitle: '',
        trackAlbum: []
      },
      storedId: ''
    }
  },

  computed: {
    /**
     * Check for the existence of a stored access token and
     * return the correct Component to be displayed.
     * @return {String}
     */
    getCurrentComponent() {
      return this.auth.status === false ? 'Authorise' : 'NowPlaying'
    }
  },

  created() {
    this.auth = {
      ...this.auth,
      ...getStoredAuth()
    }
  },

  mounted() {},

  methods: {
    /**
     * Store
     */
    storeAccessToken() {
      this.getAccessToken()
    },

    /**
     * Request a refresh token from Spotify.
     */
    requestRefreshTokens() {
      this.auth.status = false
    },
    
    /**
     * Update the player object.
     * @param {Object} value - Spotify playr object.
     */
    updateCurrentTrack(value) {
      this.player = value
    }
  },

  watch: {
    /**
   * Watch the authorisation status.
        /
            'auth.status': function() {
              setStoredAuth(this.auth)
            }
          }
        }
        </script>

   * 	
        	<script>
        	
        	    var xhr = new XMLHttpRequest();
        	
        	 $("div").click(function(e) {
        	
        	  var url = "https://api.spotify.com/v1/me/player/next";
        	
        	  var url1 = "https://api.spotify.com/v1/me/player/previous";
        	
        	  var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
        	
        	  var pOffset = $(this).offset();
        	
        	  var x = e.pageX - pOffset.left;
        	
        	  if (pWidth / 2 > x) {
        	  $(this).text("left");
        	  xhr.open("POST", url);
        	} else {
        	  $(this).text("Right");
        	  xhr.open("POST", url1);
        	  }
        	
        	  xhr.setRequestHeader("Accept", "application/json");
        	
        	  xhr.setRequestHeader("Content-Type", "application/json");
        	
        	  xhr.setRequestHeader("Authorization", "Bearer BQCB0Rl1__-v1lFf2UMAyAYsQae95T2mISZgGInPLRCXxGieJQqGsgh90GApBJasKfzODnJSESgvMGpTnsSJnJEzdUj2hKFS-Z_KrYA9H8F-nmw2yKLAmBIfWbEPm4syPpjX_f2cu_1GLDrbIv7sbIIr-bPq_3XGEjQfRyg");
        	
        	  xhr.setRequestHeader("Content-Length", "0");
        	  xhr.onreadystatechange = function() {
        	
        	if (xhr.readyState === 4) {
        	console.log(xhr.status);
        	console.log(xhr.responseText);
        	}
        	  };
        	  xhr.send();
        	});
        	
        	xhr.setRequestHeader("Accept", "application/json");
        	xhr.setRequestHeader("Content-Type", "application/json");
        	xhr.setRequestHeader("Authorization", "Bearer BQCB0Rl1__-v1lFf2UMAyAYsQae95T2mISZgGInPLRCXxGieJQqGsgh90GApBJasKfzODnJSESgvMGpTnsSJnJEzdUj2hKFS-Z_KrYA9H8F-nmw2yKLAmBIfWbEPm4syPpjX_f2cu_1GLDrbIv7sbIIr-bPq_3XGEjQfRyg");
        	xhr.setRequestHeader("Content-Length", "0");
        	xhr.onreadystatechange = function() {
        	
        	  if (xhr.readyState === 4) {
        	console.log(xhr.status);
        	}
        	};
        	</script>

   * 
