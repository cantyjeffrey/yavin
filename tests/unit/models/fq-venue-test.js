import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('fq-venue', 'FqVenue', {
  // Specify the other units that are required for this test.
  needs: ['model:fq-category', 'model:fq-photo']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
