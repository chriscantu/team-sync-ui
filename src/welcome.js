export class Welcome {
    constructor(){
        this.heading = 'Welcome to Team Sync!';
        this.newTask = {};
        this.tasks = [{description:'Testing'}, {description: 'Second Test'}];
    }

    addTask() {
        this.tasks.push(this.newTask);
        this.newTask = {description:''};
    }

    deleteTask() {
        console.log("Deleting");
    }
}
