import { hooks } from 'mostly-feathers-mongoose';
import SavedSearchEntity from '~/entities/saved-search-entity';

module.exports = function(options = {}) {
  return {
    before: {
      all: [
        hooks.authenticate('jwt', options)
      ]
    },
    after: {
      all: [
        // hooks.populate('params.collections', { service: 'collections', recursive: false }),
        hooks.presentEntity(SavedSearchEntity, options),
        hooks.responder()
      ]
    }
  };
};