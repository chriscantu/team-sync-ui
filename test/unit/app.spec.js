import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  beforeEach(() => { sut = new App(new RouterStub()); });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Team Sync');
  });

  it('should have my status route', () => {
    expect(sut.router.routes).toContain({ route: [ '', 'status/:username/:statusDate' ], moduleId: 'today', nav: true, title: 'My Status' });
  });

  it('should have a team status route', () => {
     expect(sut.router.routes).toContain({ route: 'team/:teamName/:statusDate', moduleId: 'teamStatus', nav: true, title: 'Team Status' });
  });
});
