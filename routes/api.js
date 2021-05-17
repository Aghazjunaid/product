var express = require('express'),
apiRouter = express.Router();

product = require('./product')();


apiRouter.get('', (req, res) => {
    res.status(200).send("Node api demo")
})

//=======================category api=====================
apiRouter.post('/category', product.addCategory);
apiRouter.get('/category', product.addCategory);
apiRouter.delete('/category/:id', product.deleteCcategory);

//========================test score api===================
apiRouter.post('/testScore', score.postTestScore);
apiRouter.get('/testScore', score.getTestScore);
apiRouter.get('/highestTestScore', score.getHighestScore);
apiRouter.get('/averageTestScore', score.getAverageTestScore);




module.exports = apiRouter;
