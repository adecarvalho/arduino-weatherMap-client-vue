<template>
  <v-app>
    <v-toolbar dark class='red accent-2'>
      <v-toolbar-title >
        Centrale Météo  
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn 
        flat
        :to="{name:'home'}">
          <v-icon left dark>usb</v-icon>
          Arduino
        </v-btn>

        <v-btn flat 
         :to="{name:'weather-map'}">
          <v-icon left dark>cloud_download</v-icon>
          Web
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'
export default {
	name: 'App',
	components: {
		Footer
	},

	data() {
		return {
			//
		}
	}
}
</script>
