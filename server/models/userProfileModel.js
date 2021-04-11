const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      
      ref: 'student',
     
    },
  },
  {
    timestamps: true,
  }
 )

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    profile_img: {
      type: String,
    },
    cover_img: {
      type: String,
    },
    tag: [String],
    bio: {
      type: String,
      required: true,
    },
    education: [
      {
        school: {
          type: String,
        },
        degree: {
          type: String,
        },
        field_of_study: {
          type: String,
        },
        startdate: {
          type: Date,
        },
        enddate: {
          type: Date,
        },
        grade: {
          type: String,
        },
        description: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
    experience: [
      {
        title: {
          type: String,
        },
        employment_type: {
          type: String,
        },
        company: {
          type: String,
        },
        location: {
          type: String,
        },
        startdate: {
          type: Date,
        },
        enddate: {
          type: Date,
        },
        description: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
    skills: [String],
    interests: [String],
    createdBy: {
      type: String,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
