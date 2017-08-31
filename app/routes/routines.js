import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('routine');
  },
  actions: {
    createRoutine (routine) {
      let newRoutine = this.get('store').createRecord('routine', routine);
        newRoutine.save()
        .then(() => {
          this.get('flashMessages').warning('Routine Created')
        })
    }
  }
});
