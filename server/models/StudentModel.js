const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
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
        default: 'students'
      },
    date:{
        type: Date,
        default: Date.now
    }
});
 module.exports=mongoose.model('student',studentSchema);