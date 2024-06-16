// ==UserScript==
// @name        AO3: Archived Bookmarks
// @version     1.0
// @description Tag bookmarks with 'Archived' or another chosen tag to have them automatically hidden from searches
// @author      sharkcat
// @namespace   https://github.com/sharkcatshark/Userscripts
// @match       *://archiveofourown.org/users/*/bookmarks
// @icon        https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// ==/UserScript==

var archiveTag = "Archived"; // tag to use for fics you want to archive

// this could be modified to be simpler
var getSegment = function (url, index) { // get username // stolen from here: https://stackoverflow.com/a/11703704/17150317
    return url.replace(/^https?:\/\//, '').split('/')[index];
}

var userName = getSegment(window.location.href, 2);

// change url to filtering archived
window.location.href = "https://archiveofourown.org/bookmarks?&user_id=" + userName + "&bookmark_search[excluded_bookmark_tag_names]=" + archiveTag;


// consider also doing if work has tag do hidden all