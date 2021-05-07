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
                <button v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">
                    Copy results link for
                    <span>sharing with your friends
                        <img src="/static/img/share.svg" class="ml-1" alt="">
                    </span>
                </button>
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
  data: function () {
    return {
      message: 'http://result.dipe.us' + this.$route.fullPath
    }
  },
  components: {
    Subscribtions,
    Interests
  },
  mounted () {

  },
  methods: {
    onCopy: function (e) {
      this.$toast.open('Copied to clipboard.')
    },
    onError: function (e) {
      console.error('Failed to copy the text to the clipboard')
    }
  }
}

</script>
