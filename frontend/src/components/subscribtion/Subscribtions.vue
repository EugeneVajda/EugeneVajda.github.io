<template>
  <div v-if="gifts">
    <div class="row" style="padding-top: 150px;">
      <SubscribtionCard
        v-bind:describtion="gift.describtion"
        v-bind:type="gift.type"
        v-bind:name="gift.name"
        v-bind:price="gift.price"
        v-bind:image="gift.image"
        v-for="gift in gifts" :key="gift.id">
      </SubscribtionCard>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import SubscribtionCard from './SubscribtionCard'

export default {
  components: { SubscribtionCard },
  name: 'Subscribtions',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gifts: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3002/gifts')
      .then(response => (this.gifts = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* styles */
</style>
