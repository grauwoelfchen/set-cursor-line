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

  module("jQuery#setCursorLine", {
    setup: function() {
      this.elems = $("#qunit-fixture").children();
    }
  });

  test("is chainable", function() {
    expect(1);
    strictEqual(this.elems.setCursorLine(), this.elems, "should be chainable");
  });

  test("has linear-gradients styles for background-image", function() {
    expect(1);
    $("#editor").setCursorLine().click();
    var textarea = $("#editor");
    var expected = [
      "height: 300px;"
      // setcursorline values
    , "background-image: linear-gradient(transparent 15px, black 16px, transparent 1px);"
    , "background-size: 100% 100%, 100% 100%, 100% 16px;"
    , "background-repeat: no-repeat;"
    ].join(" ");
    strictEqual(textarea.attr("style"), expected, "should have linear gradients for'background-image'");
  });

  test("will be cleared with blur", function() {
    expect(1);
    $("#editor").setCursorLine().click();
    var textarea = $("#editor");
    textarea.trigger("blur");
    strictEqual(textarea.css("background-image"), "none", "should be none for 'background-image'");
  });

}(jQuery));
