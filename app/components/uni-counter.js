import Ember from 'ember';

export default Ember.Component.extend({
  counter: 0,
  incrementValue: 1,

  actions: {
    increment() {
      this.incrementProperty('counter', this.get('incrementValue'));
    },

    decrement() {
      this.decrementProperty('counter', this.get('incrementValue'));
    }
  }
});
