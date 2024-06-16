// ==UserScript==
// @name        Explain XKCD Button
// @version     1.0
// @description Adds a button to XKCD pages to redirect to the explanation wiki
// @author      sharkcat
// @namespace   https://github.com/sharkcatshark/Userscripts
// @match       https://xkcd.com/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=xkcd.com
// @require     https://code.jquery.com/jquery-3.7.0.min.js
// ==/UserScript==

const comic_url = window.location.href;
const base_explain_url = "https://www.explainxkcd.com/wiki/index.php/";
const comic_num = comic_url.match(/\d+/)[0];
const new_li_element = '<li><a href="' + base_explain_url + comic_num + '">Explain XKCD</a><li>';

$('ul.comicNav li:nth-child(3)').after(new_li_element);