import makeDebug from 'debug';
import fp from 'mostly-func';

import defaultHooks from './trash-search.hooks';

const debug = makeDebug('playing:search-services:trash-searches');

const defaultOptions = {
  name: 'trash-searches'
};

/**
 * search documents in trash
 */
class TrashSearchService {
  constructor (options) {
    this.options = fp.assignAll(defaultOptions, options);
    this.name = this.options.name;
  }

  setup (app) {
    this.app = app;
    this.hooks(defaultHooks(this.options));
  }

  find (params) {
    params = { query: {}, ...params };

    params.query.destroyedAt = { $ne: null };
    const svcDocuments = this.app.service('documents');
    return svcDocuments.find(params);
  }
}

export default function init (app, options, hooks) {
  return new TrashSearchService(options);
}

init.Service = TrashSearchService;
