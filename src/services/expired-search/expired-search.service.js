const makeDebug = require('debug');
const fp = require('mostly-func');

const defaultHooks = require('./expired-search.hooks');

const debug = makeDebug('playing:search-services:expired-searches');

const defaultOptions = {
  name: 'expired-searches'
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

  async find (params) {
    params = { query: {}, ...params };

    params.query.expiredAt = { $lte: new Date() };
    const svcDocuments = this.app.service('documents');
    return svcDocuments.find(params);
  }
}

module.exports = function init (app, options, hooks) {
  return new ExpiredSearchService(options);
};
module.exports.Service = ExpiredSearchService;
