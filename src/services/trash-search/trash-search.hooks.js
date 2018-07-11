const { hooks } = require('mostly-feathers-mongoose');

const { aggregateEnrichers } = require('../../hooks');

module.exports = function (options = {}) {
  return {
    before: {
      all: [
        hooks.authenticate('jwt', options.auth)
      ]
    },
    after: {
      all: [
        aggregateEnrichers(options),
        hooks.responder()
      ]
    }
  };
};