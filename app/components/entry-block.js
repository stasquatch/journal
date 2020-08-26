import Component from '@ember/component';
import moment from 'moment';
import { computed } from '@ember/object';

export default Component.extend({
  entry: null,

  displayCreatedAt: computed('entry', function() {
    if (moment(this.entry.createdAt).isValid()) {
      return moment(this.entry.createdAt).fromNow();
    }
  }),
});