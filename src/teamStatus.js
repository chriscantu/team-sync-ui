export class TeamStatus {
    constructor() {
        this.heading = 'Team Status';
        this.team = [
            { firstName: 'Andrew', lastName: 'Y.', tasks: [{description:'Tests', isFinished: false } ] },
            { firstName: 'Chris',  lastName: 'C.', tasks: [{description:'Trolling', isFinished: true },
                {description: 'Goofing', isFinished: false }] }
        ];
    }
}
