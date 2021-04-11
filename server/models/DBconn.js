const mongoose=require('mongoose');
require('dotenv').config()
//console.log(process.env.URI);
mongoose.connect(process.env.URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(() => console.log("connection is sucessful"))
.catch((err) => console.log("NO connection",err))   