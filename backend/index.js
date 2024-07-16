const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/",(req,res) => {
    res.send("server is running");
  })


  app.use("/sendEmail", (req, res) => {
    res.sen(" in Send -email")
  })

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

 