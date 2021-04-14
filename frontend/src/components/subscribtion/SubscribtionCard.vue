<template>
    <div class="col-sm-12 py-5 col-md-6 col-lg-4 ">
        <div :class="resolve_class_name()">
            <img :src="resolve_img_url(image)" alt="" class="logo-bottom">
            <span class="title">{{ describtion }}</span>
            <button>
                <span>
                    <b class="subscription">SUBSCRIPTION FROM</b> <br>
                    <b class="price-number">${{ price }}</b>/month
                </span>
            </button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'SubscribtionCard',
  props: {
    describtion: String,
    type: String,
    name: String,
    price: Number,
    image: String
  },
  methods: {
    resolve_img_url: function (path) {
      return `/static/img/${path}`
    },
    resolve_class_name: function () {
      let vm = this
      return `card ${vm.type}`
    }
  }
}
</script>
