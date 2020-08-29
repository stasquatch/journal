import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  body: DS.attr('string'),
  rating: DS.attr('number'),
  createdAt: DS.attr('string'),
});
