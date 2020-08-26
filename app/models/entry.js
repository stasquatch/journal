import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  body: DS.attr('string'),
  createdAt: DS.attr('string'),
});
