import DS from 'ember-data';

export default DS.Model.extend({
  stops: DS.hasMany('stop'),
  name: DS.attr('string')
});
