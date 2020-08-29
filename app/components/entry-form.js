import Component from '@ember/component';

export default Component.extend({
  classNames: ['tile', 'is-child', 'box'],

  onSubmit: () => {},
  entry: null,

  actions: {
    onSubmit() {
      this.onSubmit(this.entry);
    }
  }
});
