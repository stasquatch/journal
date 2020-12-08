import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  frequency: DS.attr('number'),
  title: DS.attr('string'),
  active: DS.attr('boolean'),
});
