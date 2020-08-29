export default {
    setSnack(state, payload) {
        state.snackbar.isOpen = payload.isOpen;
        state.snackbar.text = payload.text;
        state.snackbar.color = payload.color;
    },
    setProduct(state, payload) {
        state.productSelected = payload;
    },
    addProductToCart(state, payload) {
        let newProduct = true;

        const find = state.shoppingCart.map(item => {
            if (item.product_id === payload.product_id && item.product_size === payload.product_size) {
                newProduct = false;
                return {
                    ...item,
                    product_count: item.product_count + 1
                }
            }
            return item
        })

        if (newProduct) state.shoppingCart = [...state.shoppingCart, { ...payload }];
        else state.shoppingCart = [...find];
    },
    updateProductFromCart(state, payload) {
        state.shoppingCart = state.shoppingCart.map(item => {
            if (item.product_id === payload.product_id && item.product_size === payload.product_size) return { ...payload }
            return item
        })
    },
    removeProductFromCart(state, payload) {
        const index = state.shoppingCart.indexOf(payload);
        state.shoppingCart.splice(index, 1);
    },
    resetShoppingCart(state) {
        state.shoppingCart = []
    }
}