<template>
  <div>    
    <div class="container interests">        
        <Interests/>              
    </div>
    <div class="container subscribtions">
        <Subscribtions/>
    </div>
    <div class="container" style="padding-top: 116px;">
        <div class="row">
            <div class="col share-link text-center">
                <span>Share the result or 
                    <a href="">send the link 
                        <img src="/static/img/share.svg" class="ml-1" alt="">
                    </a>
                </span>
            </div>            
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center" style="padding-top: 35px; height: 60px;">
            <div class="col-auto icon-rnd yellow"><div><img src="/static/icons/social/facebook.svg" alt=""></div></div>
            <div class="col-auto icon-rnd yellow"><div><img src="/static/icons/social/instagram.svg" alt=""></div></div>
            <div class="col-auto icon-rnd yellow"><div><img src="/static/icons/social/twitter.svg" alt=""></div></div>
            <div class="col-auto icon-rnd yellow"><div><img src="/static/icons/social/linkedin.svg" alt=""></div></div>
        </div>
    </div>     
  </div>
</template>

<script>
import Subscribtions from '../components/subscribtion/Subscribtions'
import Interests from '../components/interests/Interests'



export default {
  name: 'MainSection',
  components: {
    Subscribtions,
    Interests
  },
  mounted(){
      
  }
}


</script>
