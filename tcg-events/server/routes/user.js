

const User = require('../models/User')
const appRoute = (app) => {
  app.post("/User", async (req, res) => {
    try {
      const newUser = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email
      });
      newUser.save()
      res.json(newUser)
    }catch (err) {
      console.log('err', err)
    }
  });
}

module.exports ={appRoute};
