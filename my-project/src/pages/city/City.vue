<template>
  <div>
    <city-header></city-header>
    <city-search :list="cities"></city-search>
    <city-list 
    :cities="cities" 
    :hotCities="hotCities" 
    :letter="letter"
    ></city-list>
    <city-aside 
    :list="cities"
     @change="receiveMsg"></city-aside>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAside from "./components/Aside";
import axios from "axios";
export default {
  name: "City",
  components: { CityHeader, CitySearch, CityList, CityAside },
  data() {
    return {
      city: "",
      hotCities: [],
      cities: {},
      letter:''
    };
  },
  methods: {
    getCityInfo: function () {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc: function (res) {
      const { data } = res.data;
      localStorage.city=data.city;
      // this.city = data.city;
      this.hotCities = data.hotCities;
      this.cities = data.cities;
    },
    receiveMsg:function(msg){
        this.letter=msg
    }
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>
