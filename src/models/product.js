export default class Product {
    constructor(product = {}) {
        this.product_id = product.product_id || 0;
        this.product_name = product.product_name || `Zapatillas ${Math.floor((200) * Math.random())}`;
        this.product_description = product.product_description || 'Descripción';
        this.product_price = product.product_price || 100000 + 1000 * Math.floor((60) * Math.random());
        this.product_image = product.product_image || 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_65/vqud1jnhco94ha4ueopa/calzado-de-b%C3%A1squetbol-kobe-ad-66nwvx.jpg';
        this.product_size = product.product_size || null;
        this.product_count = product.product_count || 1;
    }
}