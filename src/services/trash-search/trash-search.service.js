const assert = require('assert');
const makeDebug = require('debug');
const fp = require('mostly-func');

const defaultHooks = require('./trash-search.hooks');

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

  async find (params) {
    params = { query: {}, ...params };
    params.query.path = params.query.path || '/';

    params.query.destroyedAt = { $ne: null };
    params.query.path = { $regex: new RegExp('^' + params.query.path, 'i') };
    const svcDocuments = this.app.service('documents');
    return svcDocuments.find(params);
  }
}

module.exports = function init (app, options, hooks) {
  return new TrashSearchService(options);
};
module.exports.Service = TrashSearchService;
