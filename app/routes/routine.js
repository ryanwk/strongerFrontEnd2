import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
  return this.get('store').findRecord('routine', params.routine_id)
}
});
