const express = require('express');
const sequelize = require("./config/database");
const notesRoutes = require("./routes/index.routes")
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/notes", notesRoutes);


sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server started on port 3001');
    });
});