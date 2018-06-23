import Entity from 'mostly-entity';

const SavedSearchEntity = new Entity('SavedSearch');

SavedSearchEntity.discard('_id');

export default SavedSearchEntity.freeze();
