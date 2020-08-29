<template>
  <div class="container">
    <v-layout row wrap>
      <v-flex xs12 sm8 d-flex offset-sm2>
        <v-card style="box-shadow: none;">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/56f34a74723409.5c38116544309.jpg"
            width="100%"
          />
        </v-card>
      </v-flex>
    </v-layout>
    <v-container class="m-auto">
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          xs="10"
          md="3"
          d-flex
        >
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" :alt="item.alt"> </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_65/vqud1jnhco94ha4ueopa/calzado-de-b%C3%A1squetbol-kobe-ad-66nwvx.jpg",
          alt: "Kobe AD",
        },
        {
          src:
            "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_65/s9ngifyoz6zsjoxgb66r/calzado-de-b%C3%A1squetbol-kyrie-5-x3Jm1P.jpg",
          alt: "Kyrie 5",
        },
        {
          src:
            "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_65/jbge7502njoof8huyxvw/calzado-de-b%C3%A1squetbol-hyperdunk-10-HlV5cq.jpg",
          alt: "Nike Hyperdunk X",
        },
      ],
    };
  },
};
</script>
