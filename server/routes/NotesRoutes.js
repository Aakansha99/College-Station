const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const multer = require("multer");
const Notes = require("../models/NotesModel");
const mongoose = require("mongoose");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/", (err) => {
      cb(null, "./uploads/");
    });
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${req.user.name}-${new Date().toISOString().replace(/:/g, "-")}.${
        file.originalname.split(".")[1]
      }`
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf" ||
    file.mimetype === "text/plain" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 15,
  },
  fileFilter: fileFilter,
});

router.post("/find", auth, async (req, res) => {
  const findParams = {
    university: { $regex: `${req.body.university}`, $options: "gi" },
    subject: { $regex: `${req.body.subject}`, $options: "gi" },
    subTopic: { $regex: `${req.body.subTopic}`, $options: "gi" },
  };

  try {
    const notes = await Notes.find(findParams);
    if (notes.length < 1) {
      return res.status(200).json({
        status: "success",
        message: "No Notes Found",
      });
    } else {
      res.status(200).json(notes);
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/create", auth, upload.single("NotesFile"), async (req, res) => {
  const notes = new Notes({
    _id: new mongoose.Types.ObjectId(),
    user: req.user.id,
    owner: req.user.name,
    subject: req.body.subject,
    subTopic: req.body.subTopic,
    university: req.body.university,
    size: req.file.size,
    path: req.file.path.replace(/\\/g, "/"),
  });
  try {
    const newNotes = await notes.save();
    res.status(201).json({
      status: "success",
      newNotes,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/", auth, async (req, res) => {
  try {
    const notes = await Notes.remove({});
    res.status(200).json({ message: "All notes deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
