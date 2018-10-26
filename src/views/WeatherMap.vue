<template>
  <v-container fluid>
    <v-layout align-center justify-center fill-height row >
      <h1>OpenWeatherMap</h1>
    </v-layout>

    <v-layout row align-center justify-center wrap>
      <v-flex xm12 sm6>
         <v-form @submit.prevent    
         v-model="valid"
         ref='form'
         lazy-validation>
          <v-text-field
            v-model="ville"
            :rules="videRules"
            label="Name"
            required
          ></v-text-field>

          <v-btn
          :disabled='!valid'
          round
          color='success'
          @click="checherMeteo()"
          >
          Valider
          </v-btn>
    
        </v-form>
      </v-flex>
   </v-layout>

   <v-layout row align-center justify-center wrap>
    <v-flex xs12 sm6 >
      <v-card class='ma-4'>
        <v-img
          class="white--text"
          height="200px"
          :src="this.getImage"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="display-2">{{meteoDatas.name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class='display-2'>{{this.getTemperature}} °C</span><br>
            <span class='display-1'>{{meteoDatas.description}}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  <!-- <pre>
     {{meteoDatas}}
  </pre> -->
 
</v-container>
</template>

<script>
import api from '@/library/API'

export default {
	name: 'weather-map',
	data() {
		return {
			valid: false,
			ville: 'paris',
			meteoDatas: {},
			meteoImages: {
				clouds: require('@/assets/image_clounds.jpg'),

				clear: require('@/assets/image_clear.jpg'),

				mist: require('@/assets/image_mist.jpg'),

				thunderstorm: require('@/assets/image_thunderstrom.jpg'),

				drizzle: require('@/assets/image_drizzle.jpg'),

				rain: require('@/assets/image_drizzle.jpg'),

				snow: require('@/assets/image_snow.jpg'),

				haze: require('@/assets/image_haze.jpg'),

				fog: require('@/assets/image_fog.png'),

				default: require('@/assets/image_default.jpg')
			},

			videRules: [
				val => {
					if (val.length == 0) {
						return 'Saisie non valide !'
					} else {
						return true
					}
				}
			]
		}
	},
	mounted() {
		this.getOpenWetherMapDatas()
	},

	computed: {
		getTemperature() {
			if (this.meteoDatas.temperature === '?') {
				return 0
			} else {
				return Math.round(this.meteoDatas.temperature)
			}
		},
		getImage() {
			const im = this.meteoImages[this.meteoDatas.condition]
			if (im) {
				return im
			} else {
				return this.meteoImages['default']
			}
		}
	},

	methods: {
		checherMeteo() {
			if (this.$refs.form.validate()) {
				this.getOpenWetherMapDatas()
			}
		},

		async getOpenWetherMapDatas() {
			this.meteoDatas = await api.getDonneesMeteo(this.ville)

			// const url = API_WEATHER_URL + this.ville

			// fetch(url)
			// 	.then(response => response.json())

			// 	.then(datas => {
			// 		if (datas.message) {
			// 			this.meteoDatas.name = 'Erreur'
			// 			this.meteoDatas.temperature = '?'
			// 			this.meteoDatas.description = 'Données non disponibles'
			// 			this.meteoDatas.condition = 'default'
			// 		} else {
			// 			this.meteoDatas = datas
			// 		}
			// 	})
		}
	}
}
</script>
