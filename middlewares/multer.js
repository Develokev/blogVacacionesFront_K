const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/multerPhotos'); // ruta donde queremos guardar las imágenes
    },

    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`); // de esta forma prevenimos que se reemplacen los archivos que tengan el mismo nombre
    }

  });
  
const upload = multer({ storage }).single('file'); // almacenamos la configuración de la función 'storage' / el atributo name del input 'file' se tiene que llamar igual (image)

module.exports = upload;