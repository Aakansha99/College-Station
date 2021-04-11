const express = require("express");
const router = express.Router();
const Query = require("../models/querryModel");
const Solution = require("../models/SolutionModel");
const auth = require("../middlewares/auth");

const noSol = {
  query: "No",
  solution: "No one answered this query",
  answeredBy: "No one",
  liked: false,
  disliked: false,
};

router.get("/askedByMe", auth, async (req, res) => {
  const name = req.user.name;
  const foundQueries = await Query.find({ askedBy: name });
  let qur = [];
  const sol = await Promise.all(
    foundQueries.map(async (q) => {
      qur.push(q);
      try {
        const foundSolutions = await Solution.find({
          query: q.query,
          disliked: false,
        });

        if (foundSolutions.length) {
          return foundSolutions;
        } else {
          return [{ ...noSol, query: q.query }];
        }
      } catch (err) {
        res.status(400).json({ status: "fail", error: err.message });
      }
    })
  );
  res.json({ queries: qur, s: sol, Peer: name });
});

router.post("/askQuery", auth, async (req, res) => {
  const name = req.user.name;
  const newQuery = new Query({
    query: req.body.query,
    askedBy: name,
    answered: false,
  });
  const data = await newQuery.save();
  res.json(data);
});

router.get("/askedByPeers", auth, async (req, res) => {
  const name = req.user.name;
  const data = await Query.find({ askedBy: { $ne: name } });
  res.json({
    Peer: name,
    queries: data,
  });
});

var ab = [];
var fsol = [];
router.get("/answeredByMe", auth, async (req, res) => {
  const name = req.user.name;
  const foundSolutions = await Solution.find({ answeredBy: name });

  ab = [];
  fsol = [];
  // console.log("Lenght of foundsolutions: "+foundSolutions.length);
  foundSolutions.forEach(async (s) => {
    fsol.push(s);
    // console.log("Fsol pushed:"+s);
    // console.log("Length of Fsol: "+fsol.length);
    let answeredQuery = s.query;
    const foundQuery = await Query.find({ query: answeredQuery });
    console.log(foundQuery);
    if (foundQuery[0] != null) {
      ab.push(foundQuery[0]);
    }
    // console.log("Ab Pushed:"+foundQuery[0]);

    res.json({
      Peer: name,
      sol: fsol,
      qs: ab,
    });
  });
});

router.post("/answered/:user", auth, async (req, res) => {
  console.log("sdvsdvsdvsdv");
  const name = req.user.name;
  console.log(req.body.ans);
  const foundQuery = await Query.findOne({ _id: req.params.user });
  foundQuery.answered = true;
  const sol = new Solution({
    query: foundQuery.query,
    solution: req.body.solution,
    answeredBy: name,
    liked: req.body.liked,
    disliked: req.body.disliked,
  });
  console.log(sol);
  await foundQuery.save();
  const data = await sol.save();
  res.json(data);
});

router.get("/like/:user", function (req, res) {
  Solution.findOne({ _id: req.params.user }, function (err, foundSolution) {
    if (!err) {
      foundSolution.liked = true;
      foundSolution.save(function (er) {
        if (er) {
          res.send(er);
        }
      });
      Peer.findOne(
        { name: foundSolution.answeredBy },
        function (err, foundPeer) {
          foundPeer.coins += 5;
          foundPeer.save(function (er) {
            if (er) {
              res.send(er);
            }
          });
        }
      );
    } else {
      console.log(err);
    }
  });
  //  res.redirect("/askedByMe");
});

router.get("/dislike/:user", function (req, res) {
  Solution.findOne({ _id: req.params.user }, function (err, foundSolution) {
    if (!err) {
      foundSolution.disliked = true;
      Query.findOne({ query: foundSolution.query }, function (er, foundQuery) {
        if (!er) {
          foundQuery.answered = false;
          foundQuery.save();
        } else {
          console.log(er);
        }
      });
      foundSolution.save(function (er) {
        if (er) {
          res.send(er);
        }
      });
    } else {
      console.log(err);
    }
  });
  //  res.redirect("/askedByMe");
});

module.exports = router;