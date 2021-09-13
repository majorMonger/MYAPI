const mongoose = require("mongoose"); 
const connectToDB=()=>{
mongoose.connect ("mongodb+srv://major:nitiN123@realmcluster.u8jye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    // useCreateIndex: true,
     useNewUrlParser: true,
      useUnifiedTopology: true, 
    //   useFindAndModify: false

}).then(() => {
    console.log("Coneection is successful");
}).catch((e) => {
    console.log("Connection failed",e.message);
})}

module.exports = connectToDB