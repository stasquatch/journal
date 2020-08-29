import Route from '@ember/routing/route';
import moment from 'moment';

export default Route.extend({
  model() {
    return this.store.createRecord('entry', {
      createdAt: moment().toISOString(),
    });
  },

  actions: {
    willTransition() {
      this.controller.model.rollbackAttributes();
    },
  },
});
