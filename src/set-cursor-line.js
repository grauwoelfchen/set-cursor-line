
/*
 * SetCursorLine jQuery Plugin
 * Copyright (c) 2014 Yasuhiro Asaka (http://grauwoelfchen.net)
 *
 * License:: MIT License
 * Version:: 0.0.1
 * Author::  Yasuhiro Asaka (grauwoelfchen@gmail.com)
 */
(function($) {
  $.fn.setCursorLine = function(userOptions) {
    var options = $.extend({}, $.fn.setCursorLine.options, userOptions);
    // render line
    var drawLine = function(textarea, atStart, eventName) {
      var dom       = textarea[0]
        , lineCount = (textarea.val().substr(0, dom.selectionStart).split("\n").length);
      // TODO vs zoom ;(
      var lineHeight = parseInt(textarea.css("line-height"), 10);
      if (isNaN(lineHeight)) {
        // TODO "normal" line-height ;(
        lineHeight = options.defaultLineHeight;
      }
      var height   = (lineCount + atStart) * lineHeight
        , prefixes = [
            "-webkit", "-webkit-linear", "-moz-linear", "-o-linear", "-ms-linear", "linear",
          ]
        , gradient = "transparent " + (height - 1) + "px, " +
                     options.cursorLineColor + " " + height + "px, " +
                     "transparent 1px";
      var styles = $.map(prefixes, function(prefix) {
        return "background-image: " + prefix + "-gradient(" + gradient + ");"
      });
      textarea.attr("style", textarea.attr("style") + "; " + styles.join(" "));
      textarea.css("background-size",   "100% 100%, 100% 100%, 100% " + height + "px");
      textarea.css("background-repeat", "no-repeat");
      return;
    };
    var keys = { // enough ?
      enter:     13
    , delete:     8
    , backspace: 46
    , up:        38
    , down:      40
    , left:      37
    , right:     39
    };
    return this.each(function() {
      var textarea = $(this);
      // util
      var linesToCursor = function(endExtraPosition) {
        var dom = textarea[0];
        endExtraPosition = parseInt(endExtraPosition) || 0;
        return textarea.val().substr(0, dom.selectionStart + endExtraPosition).split("\n");
      };
      // events
      textarea.keydown(function(e) {
        switch (e.which) {
          case keys.enter:
            drawLine(textarea, 1);
            break;
          case keys.down:
            var lines    = linesToCursor()
              , allLines = textarea.val().split("\n");
            if (lines.length != allLines.length) {
              drawLine(textarea, 1);
            }
            break;
          case keys.right:
            var endExtraPosition = 1;
            var lines = linesToCursor(endExtraPosition);
            if (lines[(lines.length - 1)] == "") {
              drawLine(textarea, 1);
            }
            break;
          case keys.delete:
          case keys.backspace:
          case keys.left:
            var lines = linesToCursor();
            if (lines[(lines.length - 1)] == "" && lines.length != 1) {
              drawLine(textarea, -1);
            }
            break;
          case keys.up:
            var lines = linesToCursor();
            if (lines.length != 1) {
              drawLine(textarea, -1);
            }
            break;
          default:
            // pass
        }
      });
      textarea.click(function(e) {
        drawLine(textarea, 0);
      });
      textarea.blur(function(e) {
        var textarea = $(this);
        textarea.css("background-image", "none");
      });
    });
  };
  // default options
  $.fn.setCursorLine.options = {
    defaultLineHeight: 16
  , cursorLineColor:   "black"
  };
}(jQuery));
