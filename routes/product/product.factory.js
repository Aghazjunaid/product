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









return {
    addCategory
}

}