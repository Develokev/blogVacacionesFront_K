const mongoose = require('mongoose');

const connection = async () => {

   try {

       const response = await mongoose.connect(process.env.URI_CONNECT)
       console.log('Front-end connected to Blog Database')
       return response

   } catch (error) {
      
           return {
               ok: false,
               msg: 'Fail trying to connect to Blog Database',
               error
           }

   }
}

module.exports= {
   connection
}