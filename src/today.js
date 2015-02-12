import lodash from 'lodash-node';
var _ = lodash;
import m from 'moment';

m.locale('en', {
    calendar: {
        lastDay: '[Yesterday]',
        sameDay: '[Today]'
    }
});

var moment = m();


export class Today {

    constructor() {
        this.heading = 'My Status';
        this.newTask = {};
        this.tasks = [{description:'Testing', isFinished: true}, {description: 'Second Test', isFinished: false}];
        this.savedTasks = true;
        this.statusDate = moment.calendar();
    }

    addTask() {
        this.tasks.push(this.newTask);
        this.newTask = {description:''};
        this.savedTasks = false;
    }

    deleteTask(task) {
        if(confirm('Are you sure you want to delete this task?')) {
            this.savedTasks = false;

            _.remove(this.tasks, function (tsk) {
                return tsk == task;
            });
        }
    }

    setSavedTasks(state) {
        this.savedTasks = state;
    }

    saveTasks() {
        if (this.newTask.description) {
            this.addTask();
        }

        this.savedTasks = true;
    }

    canDeactivate() {
        if (!this.savedTasks) {
            return confirm('You have not saved your tasks. Are you sure you want to leave?');
        }
    }
}
