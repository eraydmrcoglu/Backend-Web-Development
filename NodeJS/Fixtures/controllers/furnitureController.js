const Furniture = require("../models/Furniture");

exports.createFurniture = async (req, res) => {
  const furniture = await Furniture.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      furniture,
    });
  } catch {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
