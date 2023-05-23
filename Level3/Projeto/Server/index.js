const express = require('express');
const sequelize = require("./config/database");
const notesRoutes = require("./routes/index.routes")
const app = express();

sequelize.sync().then(() => console.log('database connected successfully'));

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});