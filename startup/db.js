const mongooose = require("mongoose");

module.exports = function() {
  mongooose
    // .connect("mongodb://localhost/MediPharma")
    .connect(
      "mongodb+srv://ravi:ravi@medi-culster-gulu2.mongodb.net/Medi?retryWrites=true&w=majority"
    )
    .then(() => console.log("connect to mongodb..."))
    .catch(e => console.log(`eorror: ${e}`));
};
