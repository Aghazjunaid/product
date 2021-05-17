module.exports = ({
    Product, 
    Category
}) => {

//================post catrgory============================
//This api will add category into the database
async function addCategory(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        let opt = req.body;
        const category = new Category(opt);
        const doc = await category.save();
        return_response.status = 200;
        return_response.message = "Category added successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//=============get all catgory=================================
//This api will get all the test score of candidate
async function getCategory(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    try {
        const doc = await Category.find({})
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//============delete category========================================
async function deleteCcategory(req,res){
var return_response = { "status": null, "message": null, "data": {} } 
try {
    const doc = await Category.findByIdAndDelete({_id:req.params.id})
    return_response.status = 200;
    return_response.message = "Category deleted successfully";
    return_response.data = doc;
} catch (error) {
    return_response.status = 400;
    return_response.message = String(error);
}
res.json(return_response);
}

//=============add product===========================================
async function addProduct(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try {
        let opt = req.body;
        const product = new Product(opt);
        const doc = await product.save();
        return_response.status = 200;
        return_response.message = "Product added successfully";
        return_response.data = doc;
    } catch (error) {
        return_response.status = 400;
        return_response.message = String(error);
    }
    res.json(return_response);
}

//==========get all products and their associated category===========
async function getProductByTheirCategory(req,res){
    var return_response = {
        "status": null,
        "message": null,
        "data": []
    }
    try{
        var details = {
            "category": [],
            "catgory_detalis": []
        }
        var opt = await Category.find({})
        for( var i = 0, length = opt.length; i < length; i++ ) {
            var category = opt[i]._doc;
            var obj = await Product.find({category_id:category._id}).sort({'updatedAt': -1}).limit(3);
            details = {
                "category": category,
                "catgory_detalis": obj
            }
            return_response["data"].push(details);
        }
                return_response["status"] = 200;
                return_response["message"] = "success";
                return res.send(return_response);

    } catch (error) {
        return_response["message"] = String(error);
        return res.status(400).send(return_response);
    }
}



return {
    addCategory,
    getCategory,
    deleteCcategory,
    addProduct,
    getProductByTheirCategory
}

}