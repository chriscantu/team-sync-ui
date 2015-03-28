
Team Sync UI
============

## Overview
Simple UI for communicating what a team is working on.  This project is meant to work in conjuction with http://github.com:chriscantu/team-sync-api-js.git.  

## Environment Setup
* `npm install -g gulp jspm`

## Project Setup
* `git clone git@github.com:chriscantu/team-sync-ui.git`
* `cd team-sync-ui`
* `npm install`
* `jspm install -y`

## Running the project
By default, this UI is setup to run against a local copy of the api project via a proxy.  If you would like to run in some other configuration, you can find the proxy settings in the gulpfile.js in the 'serve' task.  IE:

```
gulp.task('serve', ['build'], function(done) {
  var options = url.parse('http://localhost:3000/');
  .....
}
```

Otherwise, perform the following:
* `gulp watch`
