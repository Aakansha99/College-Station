const ProfileModel = require("../models/userProfileModel");

exports.addEdu = async (req, res) => {
  try {
    const {
      school,
      degree,
      field_of_study,
      grade,
      startdate,
      enddate,
      description,
      link,
    } = req.body;
    const userprofile = await ProfileModel.findOne({
      createdBy: req.params.id,
    });
    if (!userprofile) {
      return res.status(409).json({ msg: "userprofile not found" });
    }
    userprofile.education.push({
        school,
        degree,
        field_of_study,
        grade,
        startdate,
        enddate,
        description,
        link,
    });
    console.log(userprofile);
    const data = await ProfileModel.findOneAndUpdate(
      { createdBy: req.params.id },
      userprofile,
      { new: true }
    );
    res.json(data);
  } catch (error) {}
};
async function runUpdate(condition, updateData) {
  console.log(condition, updateData);
  const result = await ProfileModel.findOneAndUpdate(
    condition,
    {
      $set: {
        "education.$": updateData,
      },
    },
    {
      new: true,
    }
  );
  console.log(result);
}
exports.editEdu = async (req, res) => {
  try {
    const {
        school,
        degree,
        field_of_study,
        grade,
        startdate,
        enddate,
        description,
        link,
    } = req.body;
    const promiseArray = [];
    const empfieds = {
        school:"",
        degree:"",
        field_of_study:"",
        grade:"",
      startdate: "",
      enddate: "",
      description: "",
      link: "",
    };

    const userprofile = await ProfileModel.findOne({
      createdBy: req.user.id,
    });

    const item1 = userprofile.education.find((c) => c._id == req.params.id);
    if (!item1) {
      return res.status(409).json({ msg: "education not found" });
    }
    if (item1._id == req.params.id) {
      console.log("done");

      condition = { createdBy: req.user.id, "education._id": req.params.id };

      empfieds.school = school;
      empfieds.field_of_study = field_of_study;
      empfieds.grade = grade;
      empfieds.degree = degree;
      empfieds.startdate = startdate;
      empfieds.enddate = enddate;
      empfieds.description = description;
      empfieds.link = link;
      update = empfieds;

      promiseArray.push(runUpdate(condition, update));
      res.json({ msg: "update sucessful" });
    }
  } catch (error) {}
};
exports.deleteEdu = async (req, res) => {};
