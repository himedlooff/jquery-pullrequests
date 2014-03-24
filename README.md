# jQuery Pull Requests

A jQuery plugin that checks for pull requests.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/himedlooff/jquery-pullrequests/master/dist/jquery-pullrequests.min.js
[max]: https://raw.github.com/himedlooff/jquery-pullrequests/master/dist/jquery-pullrequests.js

In your web page:

```html
<ul>
  <li>
  	Open pull requests for himedlooff/jquery-pullrequests-test-repo: 
  	<span data-user="himedlooff" data-repo="jquery-pullrequests-test-repo"></span>
  </li>
</ul>

<script src="jquery.js"></script>
<script src="dist/jquery-pullrequests.min.js"></script>
<script>
jQuery(function($) {
  $('[data-user][data-repo]').pullrequests();
});
</script>
```

The above will be converted to:

```html
<ul>
  <li>
  	Open pull requests for himedlooff/jquery-pullrequests-test-repo: 
  	<span class="jqpr" data-user="himedlooff" data-repo="jquery-pullrequests-test-repo">
  		<a href="http://www.github.com/himedlooff/jquery-pullrequests-test-repo/pulls">1</a>
  	</span>
  </li>
</ul>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
