import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.foursquare.com/v2',
  ajax: function(url, type, hash) {
    if (Ember.isEmpty(hash)) {
      hash = {};
    }
    if (Ember.isEmpty(hash.data)) {
      hash.data = {};
    }
    hash.data.oauth_token = 'YWXROQSSTW5Q2DEF2YU3HS5QZHKEACSC2HBIFX1Z3BRG5IFM';
    hash.data.v = '20150113';
    return this._super(url, type, hash);
  },
  pathForType: function() {
    return 'venues/search';
  }
});
