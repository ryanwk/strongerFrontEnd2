import Ember from 'ember';

export default Ember.Component.extend({
  newRoutine: {
    name: null,
    hidden: false
  },
  actions: {
    createRoutine () {
      this.sendAction('createRoutine', this.get('newRoutine'));
      this.set('newRoutine.name', null);
    }
  }
});
