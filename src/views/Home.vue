<template>
  <v-container fluid>
    <v-layout align-center justify-center fill-height row >
      <h1>Mesures centrale Arduino</h1>
    </v-layout>
  
   <v-layout row align-center justify-space-around wrap>
     <v-flex sm12 md5>
       <afficheur-lcd titre='Temperature en Deg C' :valeur=mesures.temperature></afficheur-lcd>
     </v-flex>

     <v-flex sm12 md5>
       <afficheur-lcd titre='Humidité en %' :valeur=mesures.humidite></afficheur-lcd>
     </v-flex>

     <v-flex sm12 md5>
       <afficheur-lcd titre='Pression en hPa' :valeur=mesures.pression></afficheur-lcd>
     </v-flex>

     <v-flex sm12 md5>
       <afficheur-lcd titre='Eclairement en %' :valeur=mesures.eclairement></afficheur-lcd>
     </v-flex>

   </v-layout>
  </v-container>
</template>

<script>
const API_URL = 'http://localhost:5000/api/arduino'
import AfficheurLcd from '@/components/afficheur/AfficheurLcd'

export default {
	name: 'home',

	components: {
		AfficheurLcd
	},

	data() {
		return {
			mesures: {}
		}
	},
	mounted() {
		this.getMesures()
	},
	methods: {
		getMesures() {
			fetch(API_URL)
				.then(response => response.json())
				.then(datas => {
					this.mesures = datas
				})
		}
	}
}
</script>
