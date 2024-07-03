const mongoose = require("mongoose");

module.exports = (client) => {
  const config = require("../data/config.json");
  const dataAnalysis = require("../analysis/data/languages");
  client.env = (envName) => {
    const secret = config[envName];
    return secret;
  };
  client.langAna = async (data, m) => {
    let rep = dataAnalysis(data);
    if (rep == "false") return;
    else return m.channel.send(rep);
  };

  /** MONGODB FUNCTIONS */
  const userSchema = require("./schemas/userSchema");

  client.signUp = async (memberId) => {
    const memberAlreadySigned = await userSchema.findOne({ _id: memberId });
    if (memberAlreadySigned) return false;
    else {
      const userSignup = new userSchema({
        _id: memberId,
        money: 10,
        limited: 10,
      });
      await userSignup.save();
      return userSignup;
    }
  };
};
