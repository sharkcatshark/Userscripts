// ==UserScript==
// @name        AO3: Remove from List
// @version     1.0
// @description On 'Marked For Later' pages, adds a button to remove from list
// @author      sharkcat
// @namespace   https://github.com/sharkcatshark/Userscripts
// @match       *://archiveofourown.org/users/*/readings?*show=to-read
// @icon        https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @require     https://code.jquery.com/jquery-3.7.0.min.js
// ==/UserScript==

// Why: Somtimes you just want to remove fics from your marked for later list without deleting and/or having to click onto the fic itself

var workID = 0;
var removeURL = "/works/" + workID + "/mark_as_read";

$( ".reading .work" ).each( function( index, element ){ // for each work
    workID = $( this ).attr('id').replace(/work_/g, ""); // get work id
    removeURL = "/works/" + workID + "/mark_as_read"; // put into replace url
    $(this).find('ul.actions').append("<li><a href='" + removeURL + "'>Remove From List</a></li>"); // add button
});