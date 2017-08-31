import Ember from 'ember';

export default Ember.Component.extend({
  newExercise: {
    name: null,
    weight: null,
    hidden: false
  },
  actions: {
    createExercise () {
      this.sendAction('createExercise', this.get('newExercise'));
      this.set('newExercise.name', null);
      this.set('newExercise.weight', null);
    }
  }
});
