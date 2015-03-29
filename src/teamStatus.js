import m from 'moment';
import {HttpClient} from 'aurelia-http-client';

m.locale('en', {
    calendar: {
        lastDay: '[Yesterday]',
        sameDay: '[Today]'
    }
});

var moment = m();

export class TeamStatus {
    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
        this.heading = 'Team Status';
        this.statusDate = moment.calendar();

        this.team = [];
    }

    activate(params) {
        if (!params) {
            //hardcoding default params until session & date is implemented
            params = {teamName: 'encoreui', statusDate: '2015-04-01'};
        }
        return this.http.get(`/api/team-status/${params.teamName}/${params.statusDate}`).then( result => {
            console.log(result);
            var response = JSON.parse(result.response);
            this.team = response.statuses;
        });
    }

}
