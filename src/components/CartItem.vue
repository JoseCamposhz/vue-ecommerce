<template>
  <v-card class="mx-12">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto" class="d-flex align-center justify-center">
          <div
            class="px-4 d-flex flex-column align-center"
            justify="space-between"
          >
            <v-btn icon @click="updateProductQuantity(1)">
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
            <span>{{ product.product_count }}</span>
            <v-btn icon @click="updateProductQuantity(-1)">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </div>
          <v-img height="120" width="120" :src="product.product_image"></v-img>
        </v-col>

        <v-col
          cols="auto"
          class="ma-0 d-flex flex-column align-center justify-center"
        >
          <strong>
            {{ product.product_id }} - {{ product.product_name }} - Talla
            {{ product.product_size }}
          </strong>
          <div>
            Precio: <strong>${{ product.product_price }}</strong>
          </div>
        </v-col>

        <v-col
          cols="auto"
          class="d-flex flex-column align-center justify-center text-center pl-0"
        >
          <v-btn icon color="error" @click="removeProductFromCart(product)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import { Product } from "../models";
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return new Product();
      },
    },
  },
  methods: {
    ...mapMutations(["updateProductFromCart", "removeProductFromCart"]),
    updateProductQuantity(value) {
      if (this.product.product_count + value <= 0)
        this.removeProductFromCart(this.product);
      else {
        this.updateProductFromCart({
          ...this.product,
          product_count: this.product.product_count + value,
        });
      }
    },
  },
};
</script>
