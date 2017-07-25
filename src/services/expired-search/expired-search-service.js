import makeDebug from 'debug';
import { join } from 'path';
import { plural } from 'pluralize';
import defaultHooks from './expired-search-hooks';

const debug = makeDebug('playing:search-services:expired-search');

const defaultOptions = {
  name: 'expired-search'
};

// Expired search service to documents
class ExpiredSearchService {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.name = options.name;
    this.options = options;
  }

  setup(app) {
    this.app = app;
    this.hooks(defaultHooks(this.options));
  }

  find(params) {
    params = params || { query: {} };

    const documents = this.app.service('documents');
    return documents.find(params);
  }
}

export default function init (app, options, hooks) {
  return new ExpiredSearchService(options);
}

init.Service = ExpiredSearchService;
