import Entity from 'mostly-entity';

const SavedSearchEntity = new Entity('SavedSearch');

SavedSearchEntity.excepts('createdAt', 'updatedAt', 'destroyedAt');

export default SavedSearchEntity.asImmutable();
