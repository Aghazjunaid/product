module.exports = () => {
    const { Product, Category } = require("../../models/score");

    return require("./product.factory")({
        Product, 
        Category
    });
}