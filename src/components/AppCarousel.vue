<template>
  <v-carousel cycle>
    <v-carousel-item v-for="(item, i) in carousel" :key="i" :src="item.src">
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-h2 font-weight-medium grey--text text--darken-4">
          {{ item.title }}
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      carousel: [
        {
          src: require("../assets/information.jpg"),
          title: "我们提供指导",
        },
        {
          src: require("../assets/guide.jpg"),
          title: "我们提供资讯",
        },
        {
          src: require("../assets/confuse.jpg"),
          title: "我们协助你解决困惑",
        },
      ],
    };
  },
};
</script>
