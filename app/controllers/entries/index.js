import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  sortKey: Object.freeze(['createdAt:desc']),
  sortedEntries: sort('model', 'sortKey'),
});
