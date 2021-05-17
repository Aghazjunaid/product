var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var CategorySchema= new Schema({
    category_name: {type: String, required: true},
    status: {type: String}
},{ timestamps:true });

var ProductSchema= new Schema({
    product_name: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    category_id: {type: Schema.Types.ObjectId, ref:'category'},
},{ timestamps:true });

Category = mongoose.model("category", CategorySchema);
Product = mongoose.model("product", ProductSchema);


module.exports={ 
    Category, 
    Product
}