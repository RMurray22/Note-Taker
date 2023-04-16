const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  let results = notes;
  console.log(results);
  res.json(results);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  console.log(notes);

  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;
