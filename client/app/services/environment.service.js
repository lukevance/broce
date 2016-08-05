'use strict';

function envService(){
  // provide utility variables and stuff
  var development = true;
  var apiPath = '';
  if (development) {
    apiPath = '//localhost:3000';
  } else {
    // add real path to server when server is live
    apiPath = 'otherLivePathToBeAdded';
  }
  return {
    path: apiPath
  };
}

module.exports = envService;
