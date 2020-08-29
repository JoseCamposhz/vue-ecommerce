<template>
  <v-container justify-center>
    <v-layout wrap>
      <v-flex lg6>
        <v-text-field
          v-model="search"
          label="Busqueda rapida"
          type="search"
        ></v-text-field>
        <div
          :key="product.id"
          v-for="product in productsFilter"
          @click="openProduct(product)"
        >
          <span class="link">{{ product.product_name }}</span>
        </div>
      </v-flex>
    </v-layout>
    <v-layout sm12 md10 offset-md1 wrap class="text-center">
      <v-flex
        xs6
        sm4
        md3
        lg2
        pa-2
        :key="product.product_id"
        v-for="product in products"
        @click="openProduct(product)"
      >
        <img :src="product.product_image" width="100%" />
        <h3 class="link">{{ product.product_name }}</h3>
        <h3 class="link">{{ " $" + product.product_price }}</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({
    search: "",
    productsFilter: [],
  }),
  computed: {
    ...mapState(["products"]),
  },
  watch: {
    search: function() {
      //muestra los datos que coincidan con la search
      if (this.search.length > 0)
        this.productsFilter = this.products.filter(
          (product) =>
            product.product_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) === 0
        );
      else this.productsFilter = [];
    },
  },
  methods: {
    ...mapMutations(["setProduct"]),
    openProduct(product) {
      this.setProduct(product);
      this.$router.push(`/products/${product.product_id}`);
    },
  },
};
</script>

<style>
.link {
  color: #1976d2;
  cursor: pointer;
  text-decoration: underline;
}
</style>
