import Entity from 'mostly-entity';

const SavedSearchEntity = new Entity('SavedSearch');

SavedSearchEntity.excepts('_id');

export default SavedSearchEntity.asImmutable();
