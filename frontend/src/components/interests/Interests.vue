<template>
  <div v-if="user">
        <div class="row justify-content-center">
            <div class="col-auto" >
                <h2>{{ user.user_realname }}’s interests</h2>
            </div>
        </div>
        <div class="row justify-content-center" style="position: relative;">
            <div class="col-5" style="max-width: 400px; min-width: 400px;">
                <div class="chart">
                    <canvas id="myChart" width="100" height="100" style="margin-top: 100px"></canvas>
                    <div class="avatar" v-if="user">
                        <img :src="getUserImage()" alt="">
                    </div>
                </div>
            </div>
            <div class="netflix interest">
                <span class="icon-rnd red" style="display: inline-block; position: relative; vertical-align: bottom;">
                    <div><img src="/static/icons/icon_movie.svg" alt=""></div>
                </span>
                <span class="icon-rnd yellow" style="display: inline-block; position: relative; vertical-align: bottom;">
                    <div><img src="/static/icons/icon_education.svg" alt=""></div>
                </span>
                <span class="title">netflix</span>
            </div>
            <div class="skyeng interest">
                <span class="icon-rnd green" style="display: inline-block; position: relative; vertical-align: bottom;">
                    <div><img src="/static/icons/icon_business.svg" alt=""></div>
                </span>
                <span class="icon-rnd mint" style="display: inline-block; position: relative; vertical-align: bottom;">
                    <div><img src="/static/icons/icon_language.svg" alt=""></div>
                </span>
                <span class="title">skyeng</span>
            </div>
            <div class="spotify interest">
                <span class="icon-rnd blue" style="display: inline-block; position: relative; vertical-align: bottom;">
                    <div><img src="/static/icons/icon_music.svg" alt=""></div>
                </span>
                <span class="title">spotify</span>
            </div>
        </div>
        <div class="row justify-content-around" v-if="showScores">
            <div class="col-3">
                <div class="row">
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">{{this.userScore[0].category_name}}</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">{{ this.percentages[0] }}%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress red">
                                    <div class="progress-bar" v-bind:style="{ width: this.percentages[0] + '%' }" role="progressbar" aria-valuenow="36" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">{{this.userScore[1].category_name}}</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">{{ this.percentages[1] }}%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress yellow">
                                    <div class="progress-bar" v-bind:style="{ width: this.percentages[1] + '%' }" role="progressbar" aria-valuenow="22" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">{{this.userScore[2].category_name}}</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">{{ this.percentages[2] }}%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress green">
                                    <div class="progress-bar" v-bind:style="{ width: this.percentages[2] + '%' }" role="progressbar" aria-valuenow="18" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="row">
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">{{this.userScore[3].category_name}}</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">{{ this.percentages[3] }}%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress mint">
                                    <div class="progress-bar" v-bind:style="{ width: this.percentages[3] + '%' }" role="progressbar" aria-valuenow="12" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">{{this.userScore[4].category_name}}</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">{{ this.percentages[4] }}%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress blue">
                                    <div class="progress-bar" v-bind:style="{ width: this.percentages[4] + '%' }" role="progressbar" aria-valuenow="8" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">{{this.userScore[5].category_name}}</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">{{ this.percentages[5] }}%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress purple">
                                    <div class="progress-bar" v-bind:style="{ width: this.percentages[5] + '%' }" role="progressbar" aria-valuenow="4" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  <div v-else>
      <h2 class="text-center">
          There is no such user
      </h2>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'Interests',
  data () {
    return {      
      user: null,
      chart: null,
      userScore: null,
      categories: null,
      userHash: null,
      showScores: false,
      apiRoute: 'https://dipeus-bot-api.herokuapp.com',
      colors: ['#FF495A', '#F9BB22', ' #6DCA33', ' #23D9A0', '#2BA4D4', ' #B389D3'],
      percentages: []
    }
  },
  methods: {
    isUserMatch: function (element, index, array) {
      if (element.user_id == this.userHash) {
        return true
      }
    },
    getUserImage: function () {
      return `${this.user.user_image_url}`
    },
    defineChart: function () {
        let ctx = document.getElementById('myChart').getContext('2d')    
        let vm = this;
        this.chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',
            legend: {
                display: false
            },
            title: {
                display: false
            },
            layout: {
                margin: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
                }
            },
            // The data for our dataset
            data: {
                datasets: [{
                data: vm.percentages,
                backgroundColor: vm.colors,
                }]
            },

            // Configuration options go here
            options: {}
        })
    }
  },
  mounted () {

    this.userHash = this.$route.params.id
    let vm = this
    axios
      .get(`${this.apiRoute}/users`)
      .then(
        function (response) {
            console.log(response);
          let users = response.data
          vm.user = users.find(vm.isUserMatch)         
        }
      )

      axios
      .get(`${this.apiRoute}/user-scores/${this.userHash}`)
      .then(
        function (response) {
            let scores = response.data
            vm.userScore = scores
            let oneScoreCost = 0;

            let sum = 0;
            vm.userScore.forEach((item) => {
                sum += item.score;
            });

            
            oneScoreCost = 100 / sum;  

            axios
            .get(`${vm.apiRoute}/categories`)
            .then(
                function (response) {
                response.data.forEach((element, index) => {
                    vm.userScore[index].category_name = element.category_name;
                    vm.userScore[index].color = vm.colors[index];
                    vm.percentages[index] = vm.userScore[index].score * oneScoreCost;
                    if(vm.chart){
                        vm.chart.update();
                    }    else{
                        vm.defineChart()
                    }                
                });
                    vm.showScores = true;
                }
            )

            
        }
      ) 

    

          
  }
}
</script>
