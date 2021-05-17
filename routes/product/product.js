module.exports = () => {
    const { Product, Category } = require("../../models/product");

    return require("./product.factory")({
        Product, 
        Category
    });
}