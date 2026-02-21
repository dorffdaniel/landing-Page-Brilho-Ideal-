import express from 'express';
import items from './routes/itemsRoutes'
const app = express();


// vou so refrenciar a rota com o use 
app.use(items);
app.use(express.json());



app.listen(8000, () => {
    console.log("api rodando na porta 8000");
})