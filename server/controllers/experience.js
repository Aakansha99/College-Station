const ProfileModel = require("../models/userProfileModel");

exports.addExp = async (req, res) => {
  try {
    const {
      title,
      employment_type,
      company,
      location,
      startdate,
      enddate,
      description,
      link,
    } = req.body;
    const userprofile = await ProfileModel.findOne({createdBy:req.params.id});
    if (!userprofile) {
      return res.status(409).json({ msg: "userprofile not found" });
    }
    userprofile.experience.push({
      title,
      employment_type,
      company,
      location,
      startdate,
      enddate,
      description,
      link,
    });
    console.log(userprofile);
    const data = await ProfileModel.findOneAndUpdate(
      {createdBy:req.params.id},
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
        "experience.$": updateData,
      },
    },
    {
      new: true,
    }
  );
  console.log(result);
}
exports.editExp = async (req, res) => {
  try {
    const {
      title,
      employment_type,
      company,
      location,
      startdate,
      enddate,
      description,
      link,
    } = req.body;
    const promiseArray = [];
    const empfieds = {
      title: "",
      employment_type: "",
      company: "",
      location: "",
      startdate: "",
      enddate: "",
      description: "",
      link: "",
    };

    const userprofile = await ProfileModel.findOne({
      createdBy: req.user.id
    });

    const item1 = userprofile.experience.find((c) => c._id == req.params.id);
    if (!item1) {
      return res.status(409).json({ msg: "experience not found" });
    }
    if (item1._id == req.params.id) {
      console.log("done");

      condition = { "createdBy": req.user.id, "experience._id": req.params.id };

      empfieds.title = title;
      empfieds.employment_type = employment_type;
      empfieds.company = company;
      empfieds.location = location;
      empfieds.startdate = startdate;
      empfieds.enddate = enddate;
      empfieds.description = description;
      empfieds.link = link;
      update = empfieds;

      promiseArray.push(runUpdate(condition, update));
      res.json({msg:"update sucessful"})
    }
  } catch (error) {}
};
exports.deleteExp = async (req, res) => {};
