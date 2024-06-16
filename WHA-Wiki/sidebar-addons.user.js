// ==UserScript==
// @name        WHA Wiki Sidebar Addons
// @version     1.0
// @description Adds personalised links to the WHA wiki sidebar for the Vector Legacy (2010) skin
// @author      sharkcat
// @namespace   https://github.com/sharkcatshark/Userscripts
// @match       https://witchhatatelier.telepedia.net/*
// @icon        https://static.telepedia.net/witchhatatelierwiki/4/4a/Site-favicon.ico
// ==/UserScript==

// Add links in the format of <li class="mw-list-item"><a href="LINK HERE">VISIBLE TEXT HERE</a></li>
// this could be one line but this always for ease of editing and readability
var newNavMenu = `
<nav class="vector-menu mw-portlet vector-menu-portal portal" role="navigation">
    <h3 class="vector-menu-heading ">
        <span class="vector-menu-heading-label">Quick Navigation</span>
    </h3>
    <div class="vector-menu-content">
        <ul class="vector-menu-content-list">
            <li class="mw-list-item"><a href="/wiki/Category:Article_stubs">Stubs</a></li>
            <li class="mw-list-item"><a href="/wiki/Category:Chapters">Chapters</a></li>
            <li class="mw-list-item"><a href="/wiki/Special:AllPages">All Pages</a></li>
            <li class="mw-list-item"><a href="/wiki/Special:Categories">All Categories</a></li>
            <li class="mw-list-item"><a href="/wiki/Special:AllPages?from=&to=&namespace=10">All Templates</a></li>
            <li class="mw-list-item"><a href="/wiki/Special:WantedPages">Wanted Pages</a></li>
            <li class="mw-list-item"><a href="/wiki/Special:WhatLinksHere/Template:Cite">Citation Needed</a></li>
            <li class="mw-list-item"><a href="/wiki/Special:ListFiles">File List</a></li>
            <li class="mw-list-item"><a href="/index.php?title=Special:Search&profile=images&search=&fulltext=1">Search By Media</a></li>
        </ul>
    </div>
</nav>
`;

var this_div = document.getElementById('mw-panel');
this_div.insertAdjacentHTML('beforeend', newNavMenu);

// TODO:
// - make modular
//   - user adds links to data structure and itll loop through and concat into a string