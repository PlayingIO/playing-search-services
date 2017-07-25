import makeDebug from 'debug';
import { join } from 'path';
import { plural } from 'pluralize';
import defaultHooks from './default-search-hooks';

const debug = makeDebug('playing:search-services:default-search');

const defaultOptions = {
  name: 'default-search'
};

// Default search service to documents
class DefaultSearchService {
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

    let query = {};
    if (params.query.searchTerm) query.title = { $regex: params.query.searchTerm };
    if (params.query.authors) query.contributors = { $in: params.query.authors };
    if (params.query.tags) query.nature = { $in: params.query.tags };
    if (params.query.nature) query.nature = { $in: params.query.nature };
    if (params.query.subject) query.subject = { $in: params.query.subject };
    params.query = query;

    const documents = this.app.service('documents');
    return documents.find(params);
  }
}

export default function init (app, options, hooks) {
  return new DefaultSearchService(options);
}

init.Service = DefaultSearchService;
