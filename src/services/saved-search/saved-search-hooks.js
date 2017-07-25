import { hooks as auth } from 'feathers-authentication';
import { hooks } from 'mostly-feathers-mongoose';
import SavedSearchEntity from '~/entities/saved-search-entity';

module.exports = function(options = {}) {
  return {
    before: {
      all: [
        auth.authenticate('jwt')
      ]
    },
    after: {
      all: [
        hooks.presentEntity(SavedSearchEntity, options),
        hooks.responder()
      ]
    }
  };
};