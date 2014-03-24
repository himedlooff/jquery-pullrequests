(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('Plugin', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(
      this.elems.pullrequests(),
      this.elems,
      'Running the plugin on a jQuery object should return that object.'
    );
  });

  test('adds class', function() {
    expect(1);
    strictEqual(
      this.elems.pullrequests().attr('class'),
      'jqpr',
      'The class ".jqpr" should be added to the element calling the plugin.'
    );
  });

  asyncTest('sends custom success event', function() {
    expect(1);
    var myElems = this.elems.filter('[data-user="himedlooff"]');
    myElems.pullrequests().on('jqprReceived', function(){
      ok(
        true,
        'should fire a custom event when ajax request is succsesful'
      );
      start();
    });
  });

  asyncTest('sends custom error event', function() {
    expect(1);
    var myElems = this.elems.filter('[data-user="FakeUser"][data-repo="FakeRepo"]');
    myElems.pullrequests().on('jqprError', function(){
      ok(
        true,
        'The custom event "jqprError" should be triggered when ajax request is not succsesful'
      );
      start();
    });
  });

  asyncTest('adds number of pull requests', function() {
    expect(1);
    var myElems = this.elems.filter('[data-user="himedlooff"][data-repo="jquery-pullrequests-test-repo"]');
    myElems.pullrequests().on('jqprReceived', function(){
      equal(
        myElems.text(),
        // The number here might need to change depending on how many pull
        // requests are open on this repo at the time of running this test.
        '1',
        'should contain the number of pull requests open on the specified repository'
      );
      start();
    });
  });

  asyncTest('adds link to pull requests page', function() {
    expect(1);
    var myElems = this.elems.filter('[data-user="himedlooff"][data-repo="jquery-pullrequests-test-repo"]');
    myElems.pullrequests().on('jqprReceived', function(){
      equal(
        myElems.html(),
        // The number here might need to change depending on how many pull
        // requests are open on this repo at the time of running this test.
        '<a href="http://www.github.com/himedlooff/jquery-pullrequests-test-repo/pulls">1</a>',
        'should contain an anchor element linking to the specified repository'
      );
      start();
    });
  });

  // module('jQuery.pullrequests');

  // test('is awesome', function() {
  //   expect(2);
  //   strictEqual($.pullrequests(), 'awesome.', 'should be awesome');
  //   strictEqual($.pullrequests({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  // });

  // module(':pullrequests selector', {
  //   // This will run before each test in this module.
  //   setup: function() {
  //     this.elems = $('#qunit-fixture').children();
  //   }
  // });

  // test('is awesome', function() {
  //   expect(1);
  //   // Use deepEqual & .get() when comparing jQuery objects.
  //   deepEqual(this.elems.filter(':pullrequests').get(), this.elems.last().get(), 'knows awesome when it sees it');
  // });

}(jQuery));
