const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use("/",(req,res) => {
    res.send("server is running");
  })

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });