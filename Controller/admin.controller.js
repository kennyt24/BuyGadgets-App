const Admin = require('../model/adminmodel');

exports.postlaptop = async(req, res) => {
    try {
        const{LaptopName, model, amount, picture
            }=req.body
       
       
            return res.status(201).json({message:"Laptop uploaded successfully"});
    } catch (error) {
        console.error(error);
    }
};


    exports.getlaptops = async(req, res) => {
        try {
            const data = await Admin.find();
            res.json(data)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    }; 
    
        