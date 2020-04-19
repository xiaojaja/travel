<template>
  <div class="city">
    <CityHeader> </CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList
    :cities="cities"
    :hot="hotCities"
    :letter="letter"
    >
    </CityList>
    <CityAlphabet
    :cities="cities"
    @change="handleLetterChange"
    >
    </CityAlphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityList from '@/components/city/List.vue'
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'
export default {
  name:'City',
  components:{
    CityHeader,
    CityList,
    CitySearch,
    CityAlphabet
  },
  data(){
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    geiCityInfo(){
      axios.get('/mock/city.json')
      .then(this.handleCityInfoSuccess)
    },
    handleCityInfoSuccess:function(res){
      res=res.data
      if(res.ret && res.data){
        const data = res.data
        this.cities=data.cities
        this.hotCities=data.hotCities
      }
    },
    handleLetterChange(letter){
      this.letter=letter.trim()
    }
  },
  mounted(){
    this.geiCityInfo()
  }
}
</script>


