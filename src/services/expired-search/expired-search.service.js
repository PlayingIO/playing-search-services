import makeDebug from 'debug';
import fp from 'mostly-func';

import defaultHooks from './expired-search.hooks';

const debug = makeDebug('playing:search-services:expired-search');

const defaultOptions = {
  name: 'expired-search'
};

// Expired search service to documents
class ExpiredSearchService {
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

    params.query.expiredAt = { $lte: new Date() };
    const svcDocuments = this.app.service('documents');
    return svcDocuments.find(params);
  }
}

export default function init (app, options, hooks) {
  return new ExpiredSearchService(options);
}

init.Service = ExpiredSearchService;
