import makeDebug from 'debug';
import jsonic from 'jsonic';
import fp from 'mostly-func';
import { plural } from 'pluralize';

import defaultHooks from './default-search-hooks';

const debug = makeDebug('playing:search-services:default-search');

const defaultOptions = {
  name: 'default-search'
};

// Default search service to documents
class DefaultSearchService {
  constructor (options) {
    options = Object.assign({}, defaultOptions, options);
    this.name = options.name;
    this.options = options;
  }

  setup (app) {
    this.app = app;
    this.hooks(defaultHooks(this.options));
  }

  find (params) {
    params = fp.assign({ query: {} }, params);

    const convert = function (field, op, value, options) {
      if (value && !fp.isEmpty(value)) {
        return { [field]: op? Object.assign({ [op]: value }, options) : value };
      }
      return null;
    };

    const copy = function (field, value) {
      return { [field]: value };
    };

    const parse = function (field, op, param) {
      let value = param? jsonic(param) : null;
      return convert(field, op, value);
    };

    // TODO highlight
    delete params.query.highlight;

    params.query = fp.mergeAll([
      convert('title', '$regex', params.query.searchTerm, { $options: 'i' }),
      parse('contributors', '$in', params.query.authors),
      parse('tags', '$in', params.query.tags),
      parse('nature', '$in', params.query.nature),
      parse('subjects', '$in', params.query.subjects),
      copy('$select', params.query.$select)
    ]);

    const svcDocuments = this.app.service('documents');
    return svcDocuments.find(params);
  }
}

export default function init (app, options, hooks) {
  return new DefaultSearchService(options);
}

init.Service = DefaultSearchService;
