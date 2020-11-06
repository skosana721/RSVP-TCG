const User = require("../models/User");
const appRoute = (app) => {
  const events = [
    {
      id: 0,
      name: "Year end party",
      date: "2020-12-20",
      venue: "Riversands Incubation hub",
    },
    {
      id: 1,
      name: "Christmas Eve",
      date: "2020-12-24",
      venue: "Riversands Incubation hub",
    },
    {
      id: 2,
      name: "New years Eve",
      date: "2020-12-31",
      venue: "Riversands Incubation hub",
    },
    {
      id: 3,
      name: "New Year Party",
      date: "2021-01-01",
      venue: "Riversands Incubation hub",
    },
  ];

  app.get("/events", async (req, res) => {
    try {
      res.send(events);
    } catch (e) {
      console.error(e.message);
    }
  });
  app.post("/User", async (req, res) => {
    try {
      const newUser = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        eventName: req.body.eventName,
        dietRequirements: req.body.dietRequirements,
      });
      newUser.save();
      res.json(newUser);
    } catch (err) {
      console.error(e);
      res.status(500).send("Server Error");
    }
  });
};

module.exports = { appRoute };
