import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  // hidden: false,
  updatedAt: DS.attr('date'),
  exercises: DS.belongsTo('exercise')
});
