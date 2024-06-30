// ==UserScript==
// @name         Gossamer Estimate Word Count
// @version      1.0.1
// @description  Adds a vague estimate of a word count to gossamer fics
// @author       sharkcat
// @namespace    https://github.com/sharkcatshark/Userscripts
// @match        http://fluky.gossamer.org/html/*
// @match        http://fluky.gossamer.org/author/*
// @icon         http://fluky.gossamer.org/favicon.ico
// @require      https://code.jquery.com/jquery-3.7.0.min.js
// @license     GNU GPLv3
// ==/UserScript==

// Disclaimers:
// - does not take into account authors notes + fic information. it's all just bundled together with the ficsize
// - not always accurate. only exists to give a vague indication of how many words

var averageLetters = 5.5; // adjust to suit your preferences
var regex = /(?<=\| )[0-9]+(?=K \|)/g // gets '23' from '| 23K |'

$( "blockquote" ).each( function( index, element ){ // for each blockquote (fic)
    var ficSize = parseInt($( this ).text().match(regex)[0] + "000"); // get file size with regex (string), concat 000 to account for the K, parse all that as an integer
    var wordCount = Math.floor(ficSize / averageLetters); // divide ficsize by average letters to get estimate word count. Math.floor removes decimals
    $( this ).append("<br>Estimated Words: " + wordCount); // add to end of fic summary
});
