const Photo = require('../models/Photo');
const req = require('express/lib/request');
const fs = require('fs');

exports.getAllPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort('-date');

  res.render('index', {
    photos,
  });
};

exports.getPhotoById = async (req, res) => {
  const photo = await Photo.findById(req.params.id); // id ile fotoyu bul
  res.render('photo', { photo }); // gönder
};

exports.editPhotoById = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id }); // id ile fotoyu bul
  res.render('edit', { photo }); // gönder
};

exports.createPhoto = async (req, res) => {
  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir))
    // eğer bu klasör yoksa
    fs.mkdirSync(uploadDir);

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name;

  // Use the mv() method to place the file somewhere on your server
  uploadedImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/');
  });
};

exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id }); // id ile fotoyu bul

  photo.title = req.body.title;
  photo.detail = req.body.detail;
  photo.save();

  res.redirect(`/photo/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id }); // id ile fotoyu bul

  let deletedPhoto = __dirname + '/../public' + photo.image;
  if(!deletedPhoto)
    fs.unlinkSync(deletedPhoto);

  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
