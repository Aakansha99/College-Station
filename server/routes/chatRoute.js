const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Chat = require("../models/Chat");

router.post("/sendMessage/:idChat", auth, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.idChat);
    if (!chat) {
      res.status(404).json({ msg: "No such chat found" });
    }
    const io = req.app.get("io");
    chat.messages.push(req.body);
    const newChat = await Chat.findByIdAndUpdate(chat._id, {
      $set: { messages: chat.messages },
    });
    io.emit("newMessageSended", newChat);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/getPrivateMessage/:idUser1/:idUser2", auth, async (req, res) => {
  try {
    const chat1 = await Chat.findOne({
      user1: req.params.idUser1,
      user2: req.params.idUser2,
    });
    const chat2 = await Chat.findOne({
      user1: req.params.idUser2,
      user2: req.params.idUser1,
    });

    if (!chat1 && !chat2) {
      const chat = new Chat({
        user1: req.params.idUser1,
        user2: req.params.idUser2,
        messages: [],
      });
      const chat3 = await chat.save();
      res.send(chat3);
    } else if (chat1) {
      res.send(chat1);
    } else if (chat2) {
      res.send(chat2);
    } else {
      res.status(500).json({ msg: "Server Error" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
