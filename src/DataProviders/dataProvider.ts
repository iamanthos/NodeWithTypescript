    export class DataProvider {

    constructor() {
        }

        private data: any = [
            {
                "Task": "CompleteAssignment",
                "Time": "5:00 pm"
            },
            {
                "Task": "Play PUBG",
                "Time": "7:00 pm"
            }
        ]
           
        public getToDoList(): any {
            return this.data;
        }

        public addToDo(item) {
            if (item != null) {
                let dummyData = this.data;
                dummyData.push(item);
                return console.log('Data Successfully added ' + JSON.stringify(this.data));
            }
            else return console.log('Error');
        }
}