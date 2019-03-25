const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const data = [
  // {
  //   title: "board1",
  //   id: 1,
  //   tasks: [
  //     {
  //       id: 1,
  //       text: "text1",
  //       completed: true
  //     },
  //     {
  //       id: 2,
  //       text: "text2",
  //       completed: false
  //     },
  //     {
  //       id: 3,
  //       text: "text3",
  //       completed: true
  //     }
  //   ]
  // }
];

const getId = () => new Date().getTime();

const staticPath = path.resolve(__dirname, "../dist");

const app = express();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(staticPath))
  .get("/boards", (req, res) => {
    res.send(data);
  })
  .post("/board", (req, res) => {
    const id = getId();
    data.push({
      title: req.body.title,
      id,
      tasks: []
    });
    res.send({ id });
  })
  .put("/board/:id", (req, res) => {
    const boardId = Number(req.params.id);
    const updBoard = data.find(({ id }) => id === boardId);
    if (updBoard) {
      updBoard.title = req.body.title;
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  })
  .delete("/board/:id", (req, res) => {
    const boardId = data.findIndex(({ id }) => id === Number(req.params.id));
    if (boardId !== -1) {
      data.splice(boardId, 1);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  })
  .post("task/:boardId", (req, res) => {
    const taskId = getId();
    const boardId = data.findIndex(
      ({ id }) => id === Number(req.params.boardId)
    );
    if (boardId === -1) {
      return res.sendStatus(404);
    }
    data[boardId].tasks.push({
      id: taskId,
      text: req.body.text,
      completed: false
    });
    res.send({ taskId });
  })
  .put("/task/:boardId/:taskId", (req, res) => {
    const board = data.find(({ id }) => id === Number(req.params.boardId));
    if (!board) {
      return res.sendStatus(404);
    }
    const task = board.tasks.find(({ id }) => id === Number(req.params.taskId));
    task.completed = req.body.completed;
    res.sendStatus(200);
  })
  .listen(3000);

console.log("Server is running on http://localhost:3000");
