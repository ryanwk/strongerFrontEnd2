import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('exercises');
  // this.route('exercise', { path: '/exercises/:exercise_id'});
  this.route('routines');
  this.route('routine', { path: '/routines/:routine_id'});
});

export default Router;
