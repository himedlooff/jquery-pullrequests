/*
 * jquery-pullrequests
 * https://github.com/himedlooff/jquery-pullrequests
 *
 * Copyright (c) 2014 Mike Morici
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.pullrequests = function() {
    return this.each(function() {
      var $this = $(this);
      var user = $this.data('user');
      var repo = $this.data('repo');
      var apiCall;
      var pullRequests;

      // Get the data from the GitHub API,
      // but only make the request if the element has been properly set up.
      if (typeof user !== "undefined" &&
          typeof repo !== "undefined") {
        apiCall = 'https://api.github.com/repos/' + user + '/' + repo + '/pulls';
        $.getJSON(apiCall)
        .done(function(data){
          $this.trigger({
            type: 'jqprReceived',
            pullRequests: data
          });
        })
        .fail(function(){
          $this.trigger('jqprError');
        });
      }

      // Add a custom class
      $this.addClass('jqpr');

      // Event handlers
      $this.on('jqprReceived', function(data) {
        pullRequests = data.pullRequests;
        $this.text('Number of pull requests open: ' + pullRequests.length);
      });
      $this.on('jqprError', function() {
        $this.text('Sorry, your repository could not be found.');
      });
    });
  };

  // // Static method.
  // $.pullrequests = function(options) {
  //   // Override default options with passed-in options.
  //   options = $.extend({}, $.pullrequests.options, options);
  //   // Return something awesome.
  //   return 'awesome' + options.punctuation;
  // };

  // // Static method default options.
  // $.pullrequests.options = {
  //   punctuation: '.'
  // };

  // // Custom selector.
  // $.expr[':'].pullrequests = function(elem) {
  //   // Is this element awesome?
  //   return $(elem).text().indexOf('awesome') !== -1;
  // };

}(jQuery));
