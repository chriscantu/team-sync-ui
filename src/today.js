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
        this.statusDate = moment.calendar();
        this.params = {};
    }

    addTask() {
        var task = _.merge(this.params, this.newTask);
        this.http.request
            .withHeader('Content-Type', 'application/json')
            .post(`/api/status`, task).then( result => {
                this.newTask = {description:''};
                this.tasks.push(JSON.parse(result.response));
        });

        this.savedTasks = false;
    }

    deleteTask(task) {
        if(confirm('Are you sure you want to delete this task?')) {
            this.savedTasks = false;

            this.http.delete(`/api/status/${task.id}`).then( result => {
                _.remove(this.tasks, function (tsk) {
                    return tsk == task;
                });
            });
        }
    }

    toggleFinished(task) {
        this.http.request
            .withHeader('Content-Type', 'application/json')
            .put(`/api/status/${task.id}`, task).then( result => {
                task = JSON.parse(result.response);
        });
    }

    activate(params) {
        if (_.isEmpty()) {
            //hardcoding default params until session & date is implemented
            params = {username: 'chriscantu', statusDate: '2015-04-01'};
        }

        this.params = params;

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
