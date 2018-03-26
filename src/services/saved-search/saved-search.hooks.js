import { hooks } from 'mostly-feathers-mongoose';

import SavedSearchEntity from '~/entities/saved-search.entity';

export default function (options = {}) {
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
}