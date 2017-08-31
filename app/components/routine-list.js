import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['stronger'],
  classNameBindings: ['routineDetailHidden'],
  routineDetailHidden: false,
  actions: {
  toggleRoutineDetail () {
    return this.toggleProperty('routineDetailHidden');
  }
}
});
