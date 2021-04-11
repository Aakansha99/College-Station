const express = require("express");
require("dotenv").config();
const app = express();
const colors = require("colors");
const cors = require("cors");
const path = require('path');
require("./models/DBconn");

 const http = require("http");
 const server = http.createServer(app);
const socket = require("socket.io");
 const io = socket(server);

app.set("io", io);

//Middlewares
const buildPath = path.join(__dirname, "..", "build");

app.use(express.static(buildPath));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Soketio


const Comments = require("./models/commentModel")


let users = [];
io.on("connection", (socket) => {
  console.log(socket.id + ' connected.')

  socket.on("joinRoom", (id) => {
    const user = { userId: socket.id, room: id };

    const check = users.every((user) => user.userId !== socket.id);

    if (check) {
      users.push(user);
      socket.join(user.room);
    } else {
      users.map((user) => {
        if (user.userId === socket.id) {
          if (user.room !== id) {
            socket.leave(user.room);
            socket.join(id);
            user.room = id;
          }
        }
      });
    }

    console.log(users)
     console.log(socket.adapter.rooms)
  });

  socket.on("createComment", async (msg) => {
    const { username, content, post_id, createdAt, send } = msg;

    const newComment = new Comments({
      username,
      content,
      post_id,
      createdAt,
      
    });

    if (send === "replyComment") {
      const {
        _id,
        username,
        content,
        post_id,
        createdAt,
        
            } = newComment;

      const comment = await Comments.findById(post_id);

      if (comment) {
        comment.reply.push({ _id, username, content, createdAt });

        await comment.save();
        io.to(comment.post_id).emit("sendReplyCommentToClient", comment);
      }
    } else {
      await newComment.save();
      io.to(newComment.post_id).emit("sendCommentToClient", newComment);
    }
  });

  socket.on("disconnect", () => {
    // console.log(socket.id + ' disconnected.')
    users = users.filter((user) => user.userId !== socket.id);
  });
});



//Routes
const github = require("./routes/github");
const StudentRoute = require("./routes/studentRoute");
const profileRoute = require("./routes/profileRoute");
const innovatorRoute = require("./routes/innovatorRoute");
const investorRoute = require("./routes/investorRoute");
const experienceRoute = require("./routes/experience");
const educationRoute = require("./routes/education");
const postRoute = require("./routes/postRoute");
const querryRoute = require("./routes/QuerryRoute");
const NotesRoute = require("./routes/NotesRoutes");
const chatRoute = require("./routes/chatRoute");
const ContactUsRoute = require("./routes/contactForm");
const CommentRoute = require("./routes/commentRotes");

app.use("/uploads", express.static("uploads"));
app.use("/", github);
app.use("/api/student", StudentRoute);
app.use("/api/profile", profileRoute);
app.use("/api/innovator", innovatorRoute);
app.use("/api/investor", investorRoute);
app.use("/api/experience", experienceRoute);
app.use("/api/education", educationRoute);
app.use("/api/posts", postRoute);
app.use("/api/querry", querryRoute);
app.use("/api/notes", NotesRoute);
app.use("/api/chat", chatRoute);
app.use("/api/contact", ContactUsRoute);
app.use("/api/comments", CommentRoute);

if (process.env.NODE_ENV === "production") {
  
  
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

//app.use("/api/plag", require('./palg/plag'));
PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server running at port no:${PORT}`.yellow);
});
