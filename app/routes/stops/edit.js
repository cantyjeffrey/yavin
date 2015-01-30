import StopsBaseRoute from './base';

export default StopsBaseRoute.extend({
  redirect: function(model, transition){
    if (transition.targetName === 'venues.edit.index' || transition.targetName === 'stops.edit.index') {
      this.transitionTo('venues.edit.show', model.get('foursquareId'));
    }
  }
});
