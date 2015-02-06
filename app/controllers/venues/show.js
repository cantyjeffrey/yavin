import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {
  validations: {
    "stop.photoId": {
      presence: { message: 'photo must be selected' }
    }
  }
});
