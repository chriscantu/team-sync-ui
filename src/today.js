import lodash from 'lodash-node';
import {HttpClient} from 'aurelia-http-client';
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

    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
        this.heading = 'My Status';
        this.newTask = {};
        this.tasks = [];
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

    activate(params) {
        if (_.isEmpty()) {
            //hardcoding default params until session & date is implemented
            params = {username: 'chriscantu', statusDate: '2015-04-01'};
        }

        return this.http.get(`/api/status/${params.username}/${params.statusDate}`).then( result => {
            var response = JSON.parse(result.response);
            this.tasks = response.statuses;
        });
    }

    canDeactivate() {
        if (!this.savedTasks) {
            return confirm('You have not saved your tasks. Are you sure you want to leave?');
        }
    }
}
