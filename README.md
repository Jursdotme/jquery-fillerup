# jquery.fillerup.js #

> *Fillerup* makes the height of all selected elements exactly equal to the height of the browser window.<br>
With the ability to define min and max height as well as a subtracted value.

### Demo

See the [Original Pen at Codepen](http://codepen.io/Jurs/pen/YPLLJB?editors=001).

### Features

- Set height on elements to match the exect height of the browser window
- Minimum and maximum height
- Responsive, automatically updates on window resize
- Give room for navigation or similar by defining a pixel value to subtract from the height
- Tested in IE9+, Chrome, Firefox, Chrome Android

### Install

[jQuery](http://jquery.com/download/) is required, so include it first.
<br>Download [jquery.fillerup.js](#) and include the script in your HTML file:

	<script src="jquery.fillerup.js" type="text/javascript"></script>

#### Or install using [Bower](http://bower.io/)

	bower install fillerup

### Usage

	$(elements).fillerup();

See the included [test.html](https://github.com/jursdotme/jquery-fillerup/blob/master/test.html) for a working example.

### Examples

	$(function() {
		$('.hero').fillerup();
	});

Will set all elements with the class `hero` to the height of the browser window.<br>

See the included [test.html](https://github.com/jursdotme/jquery-fillerup/blob/master/test.html) for a working example.

### License

jquery.fillerup.js is licensed under [The MIT License (MIT)](http://opensource.org/licenses/MIT)
<br/>Copyright (c) 2015 Rasmus Jürs

This license is also supplied with the release and source code.
<br/>As stated in the license, absolutely no warranty is provided.
