<template>
  <div>
    <v-container fluid>
      <AppCarousel />
    </v-container>

    <v-container>
      <v-row class="mt-16">
        <v-col>
          <p class="headline text-center">新生交流 & 咨询群</p>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" lg="4" md="4" xl="4">
          <v-card shaped>
            <v-card-title>UTM Foundation 2022/2023 Telegram 群组</v-card-title>
            <v-card-actions>
              <v-btn
                href=""
                target="_blank"
                color="blue white--text"
                disabled
              >
                <v-icon left>mdi-send-circle-outline</v-icon>
                已关闭
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" lg="4" md="4" xl="4">
          <v-card shaped>
            <v-card-title>UTM Diploma 2022/2023 WhatsApp 群组</v-card-title>
            <v-card-actions>
              <v-btn
                href=""
                target="_blank"
                color="green accent-4 white--text"
                disabled
              >
                <v-icon left>mdi-whatsapp</v-icon>
                已关闭
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-16" justify="center">
        <v-col cols="12">
          <p class="text-center headline">合作伙伴 & 特别赞助</p>
        </v-col>

        <v-col lg="2" class="d-flex justify-center mx-8">
          <a href="https://www.facebook.com/utmcv2point0/" target="_blank">
            <v-img src="../assets/confession.jpg" max-width="150"></v-img>
          </a>
        </v-col>

        <v-col lg="2" class="d-flex justify-center mx-8">
          <a href="https://github.com/Luetify" target="_blank">
            <v-img src="../assets/luetify.png" max-width="256"></v-img>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppCarousel from "../components/AppCarousel.vue";

export default {
  components: {
    AppCarousel,
  },
};
</script>
