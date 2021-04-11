const mongoose=require('mongoose');

const investorSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role: {
        type: String,
        enum: ['students', 'innovators','investors','mentors'],
        required: true,
        default:'investors'
      },
    date:{
        type: Date,
        default: Date.now
    }
});
 module.exports=mongoose.model('investor',investorSchema);