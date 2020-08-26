import Route from '@ember/routing/route';
import moment from 'moment';

export default Route.extend({
  model() {
    return this.store.createRecord('entry');
  },

  createEntry(entry) {
    try {
      entry.set('createdAt', moment().toISOString()); // prevents non-ISO deprecation warning
      entry.save();
      this.transitionTo('entries.index');
    } catch(err) {
      console.log('i done errored:', err);
    }
  },

  actions: {
    onSubmit(form) {
      this.createEntry(form);
    },

    willTransition() {
      this.controller.model.rollbackAttributes();
    },
  },
});
