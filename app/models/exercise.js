import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  weight: DS.attr('number'),
  updated_at: DS.attr('string'),

});
