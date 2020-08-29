import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('entry');
  },

  actions: {
    willTransition() {
      this.controller.model.rollbackAttributes();
    },
  },
});
