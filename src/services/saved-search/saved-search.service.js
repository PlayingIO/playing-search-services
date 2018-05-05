import { Service, createService } from 'mostly-feathers-mongoose';
import fp from 'mostly-func';

import SavedSearchModel from '../../models/saved-search.model';
import defaultHooks from './saved-search.hooks';

const defaultOptions = {
  name: 'saved-search'
};

class SavedSearchService extends Service {
  constructor (options) {
    options = fp.assign(defaultOptions, options);
    super(options);
  }

  setup (app) {
    super.setup(app);
    this.hooks(defaultHooks(this.options));
  }
}

export default function init (app, options, hooks) {
  options = fp.assign({ ModelName: 'saved-search' }, options);
  return createService(app, SavedSearchService, SavedSearchModel, options);
}

init.Service = SavedSearchService;
