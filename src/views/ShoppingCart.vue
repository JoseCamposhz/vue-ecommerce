<template>
  <v-container>
    <h2 class="text-center">MI CARRO DE COMPRAS</h2>
    <div v-if="shoppingCart.length == 0">
      <h3 class="text-center" id="aviso">EL CARRO DE COMPRAS ESTÁ VACIO</h3>
    </div>
    <div v-else>
      <div
        v-for="(product, index) in shoppingCart"
        :key="index"
        class="products col-md-12"
      >
        <CartItem :product="product" />
      </div>
      <h3 class="text-center">Total compra: ${{ total }}</h3>
    </div>
    <v-layout
      v-if="shoppingCart.length > 0"
      wrap
      md12
      style="margin-bottom: 20px"
    >
      <v-flex md4>
        <router-link to="/products">
          <v-btn dark class="btn_carro">AGREGAR + PRODUCTOS</v-btn>
        </router-link>
      </v-flex>
      <v-flex md4>
        <v-btn dark class="btn_carro" @click="resetShoppingCart()"
          >VACIAR CARRO</v-btn
        >
      </v-flex>
      <v-flex md4>
        <v-btn dark class="btn_carro" @click="buy()">COMPRAR</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-else md12 style="margin-bottom: 20px">
      <v-flex lg4 offset-lg4 md6 offset-md3 sm8 offset-sm2 xs12>
        <router-link to="/products">
          <v-btn dark class="btn_carro">AGREGAR PRODUCTOS</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
    <!-- Modal Producto Comprado -->
    <v-layout>
      <v-dialog v-model="dialogSuccess" max-width="350px">
        <v-card>
          <v-card-text class="pa-4 d-flex flex-column justify-center align-center">
            <v-icon x-large color="success">mdi-check-circle</v-icon>
            <h2 class="mt-2">¡Compra realizada con exito!</h2>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <router-link to="/">
              <v-btn color="primary" text @click="dialogSuccess = false">
                Salir
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    dialogSuccess: false,
  }),
  computed: {
    ...mapGetters(["total"]),
    ...mapState(["shoppingCart"]),
  },
  mounted() {},
  methods: {
    ...mapMutations(["resetShoppingCart"]),
    buy() {
      this.dialogSuccess = true;
      this.resetShoppingCart();
    },
  },
};
</script>
<style scoped>
#aviso {
  padding: 60px;
}
.btn_carro {
  color: #fff !important;
  position: relative;
  background-color: #333333;
  box-shadow: 0px 0px 1px 0px rgba(255, 255, 255, 0.3), 0px 4px 0px 0px #29292a;
  font-weight: bolder;
  height: 34px !important;
  padding: 0;
  width: calc(100% - 35px);
  margin-top: 10px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-left: 35px;
}
</style>
