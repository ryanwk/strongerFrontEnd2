import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('exercise');
  },
  actions: {
    createExercise (exercise) {
      let newExercise = this.get('store').createRecord('exercise', exercise);
        newExercise.save()
        .then(() => {
          this.get('flashMessages').warning('Exercise Created')
        })
    }
    // update () { ... },
    // destroy () { ... },
  }
});
