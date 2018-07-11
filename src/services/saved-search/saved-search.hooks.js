const { hooks } = require('mostly-feathers-mongoose');

const SavedSearchEntity = require('../../entities/saved-search.entity');

module.exports = function (options = {}) {
  return {
    before: {
      all: [
        hooks.authenticate('jwt', options.auth)
      ]
    },
    after: {
      all: [
        // hooks.populate('params.collections', { service: 'collections', recursive: false }),
        hooks.presentEntity(SavedSearchEntity, options.entities),
        hooks.responder()
      ]
    }
  };
};