import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Team Sync';
      config.map([
        { route: ['','today'], moduleId: 'today', nav: true, title:'Today\'s Status' },
        { route: 'flickr',       moduleId: 'flickr',  nav: true }

      ]);
    });
  }
}
