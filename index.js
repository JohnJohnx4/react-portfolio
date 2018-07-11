const express = require("express");
const path = require("path");
const CORS = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/portfolio/', express.static(path.join(__dirname, '/build')));


app.get("*/", (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio/build', 'index.html'));
});


app.listen(port, () => console.log(`app running on port ${port}`));
