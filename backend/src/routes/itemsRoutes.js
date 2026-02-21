import Routes from 'express';
import { pegarProdutos } from '../controllers/itemsControllers'


const routes = Routes()
routes.get('/', pegarProdutos); 