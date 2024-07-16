const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow all origins
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get("/",(req,res) => {
    res.send("server is running");
  })


  app.get("/sendEmail",(req, res) => {
    // console.log("I am in server");
    // const { fullName} = req.body;

    res.send("server is /");
})

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

 