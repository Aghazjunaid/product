



async function getHighestScore(req,res){
    var return_response = { "status": null, "message": null, "data": {} } 
    try{ 
        var opt = extend({}, req.body);
        var category = new Category(opt); 
        category.save(function(error,doc){
            if(error){
                return_response["status"] = 400;
                return_response["message"] = String(error);
                return res.send(return_response);
            }else{
                return_response["status"] = 200;
                return_response["message"] = "success";
                return_response["data"] = doc;
                return res.send(return_response);
            }
        })
    }catch (error) {
        return_response["message"] = String(error);
        return res.status(400).send(return_response);
    }
}
  