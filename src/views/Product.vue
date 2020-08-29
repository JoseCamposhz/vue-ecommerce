<template>
  <v-container>
    <v-layout sm12 md10 offset-md1 wrap>
      <v-flex lg6 md6 sm6 xs12 justify-center>
        <img :src="productSelected.product_image" width="80%" height="80%" />
      </v-flex>
      <v-flex lg6 md6 sm6 xs12>
        <v-layout wrap>
          <v-flex v-for="(size, index) in sizes" :key="index" md5 xs5>
            <v-layout v-model="sizeSelected">
              <v-flex
                class="tallas text-center"
                :class="{ active: sizeSelected == size }"
                @click="sizeSelected = size"
              >
                <h4>{{ size }}</h4>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <div class="col-md-10 col-xs-10 text-center">
          <h3>{{ productSelected.product_name }}</h3>
          <h4>Precio: {{ " $" + productSelected.product_price }}</h4>
        </div>
        <div class="col-md-10 col-xs-10">
          <v-btn @click="agregarProductoAlCarro()" dark block
            >Agregar al carro</v-btn
          >
        </div>
      </v-flex>
    </v-layout>
    <!-- Modal Producto Agregado al Carro -->
    <v-dialog v-model="dialogSuccess" max-width="350px">
      <v-card>
        <v-card-text
          class="pa-4 d-flex flex-column justify-center align-center"
        >
          <v-icon x-large color="success">mdi-check-circle</v-icon>
          <h3>Producto agregado a la bolsa</h3>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" text @click="dialogSuccess = false">
            Seguir Comprando
          </v-btn>
          <v-spacer />
          <v-btn to="/cart" color="primary" text @click="dialogSuccess = false">
            Ir al Carro
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Modal Talla No Seleccionada -->
    <v-dialog v-model="dialogError" max-width="350px" class="text-center">
      <v-card>
        <v-card-text
          class="pa-4 d-flex flex-column justify-center align-center"
        >
          <v-icon x-large color="warning">mdi-alert</v-icon>
          <h3>Seleccione una Talla</h3>
        </v-card-text>
        <v-card-actions class="justify-center align-center">
          <v-btn color="blue darken-1" text @click="dialogError = false">
            Seguir Comprando
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    dialogSuccess: false,
    dialogError: false,
    sizeSelected: null,
  }),
  computed: {
    ...mapState(["productSelected", "sizes"]),
  },
  mounted() {
    if (this.productSelected.product_id === 0) this.$router.push("/products");
  },
  methods: {
    ...mapMutations(["addProductToCart"]),
    agregarProductoAlCarro() {
      if (this.sizes.find((size) => size === this.sizeSelected) === undefined) {
        this.dialogError = true;
      } else {
        this.productSelected.product_size = this.sizeSelected;
        this.addProductToCart(this.productSelected);
        this.dialogSuccess = true;
      }
    },
  },
};
</script>

<style>
.tallas {
  display: inline-block;
  border-style: solid;
  border-radius: 4px;
  border-color: gray;
  border-width: 0.5px;
  margin: 1px;
  cursor: pointer;
}
.active {
  background-color: black;
  color: white;
}
</style>
