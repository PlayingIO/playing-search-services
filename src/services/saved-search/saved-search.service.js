const { Service, createService } = require('mostly-feathers-mongoose');
const fp = require('mostly-func');

const SavedSearchModel = require('../../models/saved-search.model');
const defaultHooks = require('./saved-search.hooks');

const defaultOptions = {
  name: 'saved-searches'
};

class SavedSearchService extends Service {
  constructor (options) {
    options = fp.assignAll(defaultOptions, options);
    super(options);
  }

  setup (app) {
    super.setup(app);
    this.hooks(defaultHooks(this.options));
  }
}

module.exports = function init (app, options, hooks) {
  options = { ModelName: 'saved-search', ...options };
  return createService(app, SavedSearchService, SavedSearchModel, options);
};
module.exports.Service = SavedSearchService;
