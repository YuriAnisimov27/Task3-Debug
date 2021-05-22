const router = require("express").Router();
const Game = require("../models/game");

router.get("/all", async (req, res) => {
  try {
    const games = await Game.findAll({ where: { owner_id: req.user.id } });
    res.json({
      games,
      message: "Data fetched.",
    });
  } catch (e) {
    res.status(500).json({
      message: "Data not found",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findOne({
      where: { id: req.params.id, owner_id: req.user.id },
    });
    res.json({ game });
  } catch (e) {
    res.status(500).json({
      message: "Data not found",
    });
  }
});

router.post("/create", async (req, res) => {
  try {
    const game = await Game.create({
      title: req.body.game.title,
      owner_id: req.body.user.id,
      studio: req.body.game.studio,
      esrb_rating: req.body.game.esrb_rating,
      user_rating: req.body.game.user_rating,
      have_played: req.body.game.have_played,
    });
    res.json({ game, message: "Game created." });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const game = await Game.update(
      {
        title: req.body.game.title,
        studio: req.body.game.studio,
        esrb_rating: req.body.game.esrb_rating,
        user_rating: req.body.game.user_rating,
        have_played: req.body.game.have_played,
      },
      {
        where: {
          id: req.params.id,
          owner_id: req.user,
        },
      }
    );
    res.json({ game, message: "Successfully updated." });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    const game = await Game.destroy({
      where: {
        id: req.params.id,
        owner_id: req.user.id,
      },
    });
    res.json({ game, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
