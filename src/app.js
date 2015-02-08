import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Team Sync';
      config.map([
        { route: ['','today'], moduleId: 'today', nav: true, title:'My Status' },
        { route: 'team',       moduleId: 'teamStatus', nav: true, title: 'Team Status' },
      ]);
    });
  }
}
