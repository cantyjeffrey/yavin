import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('crawl', 'Crawl', {
  // Specify the other units that are required for this test.
  needs: ['model:stop']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
