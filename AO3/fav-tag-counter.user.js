// ==UserScript==
// @name        AO3: Fav Tag Counter
// @version     1.0
// @description Show a counter of how many tags you have favourited on the homepage
// @author      sharkcat
// @namespace   https://github.com/sharkcatshark/Userscripts
// @match       *://archiveofourown.org/
// @icon        https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @license     GNU GPLv3
// ==/UserScript==

// bonus thing that adds a counter so you know how many fav tags you have out of the max allowed
var favTagsCount = document.getElementsByClassName("favorite module odd")[0].getElementsByTagName("li").length;
var title = document.getElementsByClassName("favorite module odd")[0].children[0];
title.innerHTML = "Find your favorites (" + favTagsCount + "/20)";
