const Portfolio = require('../models/Portfolio');
const fs = require('fs');

exports.addPortfolio = async (req, res) => {
  const uploadDir = 'public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  let uploadImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadImage.name;

  uploadImage.mv(uploadPath, async () => {
    await Portfolio.create({
      ...req.body,
      image: '/uploads/' + uploadImage.name,
    });
  });

  res.redirect('/');
};
