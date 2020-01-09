const path = require("path");
const config = require(path.resolve("/DevSpace/NodeSampleAppWithTypescript/src/config"));

const sql = require('mssql');

export class Database{
    constructor() {
    }

    private dataResult: any;

    public connectDatabase() {
        sql.connect(config.db).then(() => {
            return sql.query('SELECT * FROM TASK')
        }).then(result => {
            console.dir(JSON.stringify(result))
            console.log(result.recordset);
            this.dataResult = result.recordset;
        }).catch(err => {
            console.log(JSON.stringify(err));
            // ... error checks
        })

        sql.on('error', err => {
            console.log(JSON.stringify(err));
            // ... error handler
        })
    }

    public displayResult(){
        return this.dataResult;
    }
}
