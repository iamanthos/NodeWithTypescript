import express from 'express';
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { DataProvider } from './DataProviders/dataProvider';
import { Database } from './Repository/database';
//import { Route } from './router';
import { ToDoController } from './Controller/todocontroller';

const router = express.Router();
const todoCtrl = new ToDoController();

const dataProvider = new DataProvider();
const database = new Database();

const app = express();
const port = 3000;

//#######################################  Declarations #########################################
//app.use('/api', router);
app.use(express.urlencoded());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('First Node Server');
// });

//######################################## Controller Registeration ###############################

useExpressServer(app, {
    controllers: [ToDoController]
});

// router.get('/', todoCtrl.getToDoList(req, res));

app.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${port}`);
});

// app.get('/listToDo', (req, res) => {
//     res.send(dataProvider.getToDoList());
// });

const sql = require('mssql');
var request = new sql.Request();
