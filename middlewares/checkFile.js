import { v4 as uuidv4 } from 'uuid';

const supportedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp'];

export const fileCheck = (req, res, next) => {
  const file = req.files?.image;
  //console.log(file);

  if (file) {
    if (supportedTypes.includes(file.mimetype)) {
      const imageFile = `/${uuidv4()}=${file.name}`
      file.mv(`./uploads${imageFile}`, (err) => {
        if (err) return res.status(400).json({ message: `${err}` });
        req.image = imageFile;
        next();
      });

    } else {
      return res.status(400).json({ message: 'please provide valid image file' });
    }
  } else {
    return res.status(400).json({ message: 'please provide image file' });
  }
}

export const updateFileCheck = (req, res, next) => {
  const file = req.files?.image;
  console.log(file);

  if (file) {
    if (supportedTypes.includes(file.mimetype)) {
      const imageFile = `/${uuidv4()}=${file.name}`
      file.mv(`./uploads${imageFile}`, (err) => {
        if (err) return res.status(400).json({ message: `${err}` });
        req.image = imageFile;
        next();
      });
    } else {
      return res.status(400).json({ message: 'please provide valid image file' });
    }
  } else {
    next();
  }
}