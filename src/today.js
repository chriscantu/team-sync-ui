export class Today {
    constructor(){
        this.heading = 'Today\'s Status';
        this.newTask = {};
        this.tasks = [{description:'Testing', isFinished: true}, {description: 'Second Test', isFinished: false}];
        this.savedTasks = true;
    }

    addTask() {
        this.tasks.push(this.newTask);
        this.newTask = {description:''};
        this.savedTasks = false;
    }

    deleteTask(task) {
        if(confirm('Are you sure you want to delete this task?')) {
            this.tasks.pop(task);
        }
    }

    saveTasks() {
        if (this.newTask.description) {
            this.addTask();
        }
        this.savedTasks = true;
        console.log('Saving Tasks', this.tasks);
    }

    canDeactivate() {
        if (!this.savedTasks) {
            return confirm('You have not saved your tasks. Are you sure you want to leave?');
        }
    }
}
