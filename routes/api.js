var express = require('express'),
apiRouter = express.Router();

product = require('./product/product')();


apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})

//=======================category api=====================
apiRouter.post('/category', product.addCategory);
apiRouter.get('/category', product.getCategory);
apiRouter.delete('/category/:id', product.deleteCcategory);

//========================product api===================
apiRouter.post('/product', product.addProduct);




module.exports = apiRouter;
