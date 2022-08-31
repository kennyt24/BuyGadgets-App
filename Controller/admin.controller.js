const Admin = require('../model/laptop');

exports.postlaptop = async (req, res) => {
  try {
    const { LaptopName, model, amount, picture } = req.body;
    const newupload = await Admin.create({
      LaptopName,
      model,
      amount,
      picture,
    });

    return res
      .status(201)
      .json({ message: 'Laptop uploaded successfully', newupload });
  } catch (error) {
    console.error(error);
  }
};

exports.getlaptops = async (req, res) => {
  try {
    const data = await Admin.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
