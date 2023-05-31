const express = require('express');
const sequelize = require("./config/database");
const notesRoutes = require("./routes/index.routes")
const app = express();

app.use(express.json());
app.use("/notes", notesRoutes);


sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server started on port 3001');
    });
});