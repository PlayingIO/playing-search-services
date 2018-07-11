const Entity = require('mostly-entity');

const SavedSearchEntity = new Entity('SavedSearch');

SavedSearchEntity.discard('_id');

module.exports = SavedSearchEntity.freeze();
