// ==UserScript==
// @name        Gossamer: Full Year
// @version     1.0
// @description Changes archived date to show full year (iso 8601)
// @author      sharkcat
// @namespace   https://github.com/sharkcatshark/UserScripts
// @match       http://fluky.gossamer.org/html/*
// @match       http://fluky.gossamer.org/author/*
// @icon        http://fluky.gossamer.org/favicon.ico
// @require     https://code.jquery.com/jquery-3.7.0.min.js
// @license     GNU GPLv3
// ==/UserScript==

var regex = /(?<=Archived )[0-9]{2}/g

$( "blockquote" ).each( function( index, element ){ // for each blockquote (fic)
    var yearPosted = parseInt($( this ).text().match(regex)[0]); // does not preserve leading zeroes
    var yearPostedString = $( this ).text().match(regex)[0];
    var fullYear = 0;

    if (yearPosted >= 95 && yearPosted <= 99) {
        var fullYear = "19" + yearPostedString;
    }
    else if (yearPosted >= 0 && yearPosted <= 12) {
        var fullYear = "20" + yearPostedString;
    }

    var firstLine = $(this).contents().first()[0].textContent; // string
    var editedFirstLine = firstLine.replace(regex, fullYear);

    $(this).contents().first().replaceWith(editedFirstLine);
});