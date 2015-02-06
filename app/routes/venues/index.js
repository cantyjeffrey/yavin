import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },
  actions: {
    loading: function() {
      // loading state would sometimes make the search bar flash
      // so the action is interrupted here to prevent the transition.
      return false;
    }
  },
  model: function(params) {
    var venues;
    if (params.query) {
      var city = this.modelFor('crawls.show').get('city');
      params.near = city;
      venues = this.store.find('fq-venue', params);
    }
    return venues;
  }
});
