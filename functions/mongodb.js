const { MongoClient, ServerApiVersion } = require("mongodb");
module.exports = () => {
  const mongoose = require("mongoose");

  main().catch((err) => console.log(err));

  async function main() {
    await mongoose.connect(
      "mongodb+srv://luhanluhan:callmeluhan@encydatabase.vyvvxw3.mongodb.net/?retryWrites=true&w=majority&appName=EncyDatabase"
    );
  }
};
