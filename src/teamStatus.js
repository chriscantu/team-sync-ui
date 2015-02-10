import m from 'moment';

m.locale('en', {
    calendar: {
        lastDay: '[Yesterday]',
        sameDay: '[Today]'
    }
});

var moment = m();

export class TeamStatus {

    constructor() {
        this.heading = 'Team Status';
        this.statusDate = moment.calendar();

        this.team = [
            { firstName: 'Andrew', lastName: 'Y.', tasks: [{description:'Tests', isFinished: false } ] },
            { firstName: 'Chris',  lastName: 'C.', tasks: [{description:'Trolling', isFinished: true },
                {description: 'Goofing', isFinished: false }] }
        ];
    }
}
