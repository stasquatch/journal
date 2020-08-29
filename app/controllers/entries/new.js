import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
  createEntry(entry) {
    try {
      entry.set('createdAt', moment().toISOString()); // prevents non-ISO deprecation warning
      entry.save();
      this.transitionToRoute('entries.index');
    } catch(err) {
      console.log('i done errored:', err);
    }
  },

  actions: {
    onSubmit(entry) {
      this.createEntry(entry);
    },
  }
});
