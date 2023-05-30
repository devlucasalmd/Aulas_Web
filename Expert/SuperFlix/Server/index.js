import express from 'express';
import cors from 'cors';
import rotas from '../routes/Rotas';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);







app.listen(4000, function() {
    console.log('listening on port 4000');
})

