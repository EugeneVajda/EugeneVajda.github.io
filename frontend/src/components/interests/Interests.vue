<template>
  <div >
        <div class="row justify-content-center">
            <div class="col-auto" v-if="user">                
                <h2>{{ user.name }}’s interests</h2>
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
        <div class="row justify-content-around">
            <div class="col-3">
                <div class="row">
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">Art & movies</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">36%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress red">
                                    <div class="progress-bar" style="width: 36%;" role="progressbar" aria-valuenow="36" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">History</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">22%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress yellow">
                                    <div class="progress-bar" style="width: 22%;" role="progressbar" aria-valuenow="22" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">Business & finances</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">18%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress green">
                                    <div class="progress-bar" style="width: 18%;" role="progressbar" aria-valuenow="18" aria-valuemin="0"
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
                                <span class="progress-title">Languages</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">12%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress mint">
                                    <div class="progress-bar" style="width: 12%;" role="progressbar" aria-valuenow="12" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">Music</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">8%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress blue">
                                    <div class="progress-bar" style="width: 8%;" role="progressbar" aria-valuenow="8" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="col-12 mt-1">
                        <div class="row skill-level">
                            <div class="col">
                                <span class="progress-title">Other interests</span>
                            </div>
                            <div class="col-auto mr-0">
                                <span class="percent">4%</span>
                            </div>
                            <div class="col-12">
                                <div class="progress purple">
                                    <div class="progress-bar" style="width: 4%;" role="progressbar" aria-valuenow="4" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>  
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Interests',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: null,
      userHash: null
    }
  },
  methods:{
        isUserMatch: function (element, index, array) {
            if(element.id == this.userHash){                
                return true;
            }            
        },
        getUserImage: function(){
            return `/static/img/${this.user.image}`;
        }
    },
  mounted () {

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
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
        data: [30, 20, 10, 5, 50, 30],
        backgroundColor: ["#6DCA33","#23D9A0","#2BA4D4", "#B389D3", "#FF495A", "#F9BB22"]
    }],
    },

    // Configuration options go here
    options: {}
    });

    this.userHash = this.$route.params.id; 

    let vm = this;
    axios
      .get('http://localhost:3002/users')
      .then(
          function(response){
              let users = response.data;
              vm.user = users.find(vm.isUserMatch);
          }
      )
  }
}
</script>

