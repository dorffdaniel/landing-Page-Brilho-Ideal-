import Routes from 'express';
import { pegarProdutos } from '../controllers/itemsControllers.js'


const routes = Routes()
routes.get('/produtos', pegarProdutos);


export default routes;