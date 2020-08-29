import Controller from '@ember/controller';

export default Controller.extend({
  createEntry(entry) {
    try {
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
