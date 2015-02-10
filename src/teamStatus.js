import moment from 'moment';

export class TeamStatus {
    static inject() { return [moment]; }

    constructor(moment) {
        this.heading = 'Team Status';
        this.statusDate = moment.format('dddd');

        this.team = [
            { firstName: 'Andrew', lastName: 'Y.', tasks: [{description:'Tests', isFinished: false } ] },
            { firstName: 'Chris',  lastName: 'C.', tasks: [{description:'Trolling', isFinished: true },
                {description: 'Goofing', isFinished: false }] }
        ];
    }
}
