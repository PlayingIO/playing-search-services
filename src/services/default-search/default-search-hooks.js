import { hooks } from 'mostly-feathers-mongoose';
import { aggregateEnrichers } from '../search-hooks';

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
};