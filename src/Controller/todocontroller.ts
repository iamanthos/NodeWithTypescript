import { Express, Request, Response } from 'express';
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { Database } from '../Repository/database';

const database = new Database();
@JsonController()
export class ToDoController {
    constructor() {
    }

    @Get('/')
    @OnUndefined(404)
    public getToDoList(req: Request, res: Response) {
        return "First Node Server";
    }
   
    @Get('/database')
    @OnUndefined(404)
    public getDatabase() {
        database.connectDatabase();  
        return database.displayResult();
    };
}