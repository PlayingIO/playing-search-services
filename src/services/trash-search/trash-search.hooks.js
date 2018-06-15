import { hooks } from 'mostly-feathers-mongoose';

import { aggregateEnrichers } from '../../hooks';

export default function (options = {}) {
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
}