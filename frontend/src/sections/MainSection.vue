<template>
  <div>
    <div class="container interests">
        <Interests/>
    </div>
    <div class="container subscribtions" v-if="false"> <!--turn off subsciptions for now -->
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
  mounted () {

  }
}

</script>
