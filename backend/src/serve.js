import express from 'express';
import cors from 'cors';
import items from './routes/itemsRoutes.js'
const app = express();

const porta = 8000;

app.use(cors());
app.use(express.json());
// vou so refrenciar a rota com o use 
app.use("/items", items);




app.listen(porta, () => {
    console.log(`servidor rodando: http://localhost:${porta}/`)
})