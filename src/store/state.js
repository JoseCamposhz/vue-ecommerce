import { Product } from '../models';

export default {
    shoppingCart: [],
    products: [
        new Product({ product_id: 1 }),
        new Product({ product_id: 2 }),
        new Product({ product_id: 3 }),
        new Product({ product_id: 4 }),
        new Product({ product_id: 5 }),
    ],
    productSelected: new Product(),
    sizes: [40, 41, 43, 45, 47, 48],
    snackbar: {
        isOpen: false,
        text: "",
        color: "success"
    }
}