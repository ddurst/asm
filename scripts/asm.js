"use strict";

const swap = function(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);
    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
};

/*
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);
}
*/

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

ready(() => { 
  /* Now the DOM is loaded */
  /*
  On the memberssubpage, the content flow (structurally, so meaning print and other accessibility-wise) should be: bio_text, bio_photo, bio_turntable, bio_link.
  This swaps photo/turntable (or haiku/turntable) for the screen layout. However, some older versions had a photo AND haiku (and no turntable), so in that case we swap photo and haiku. Eesh.
  */
  let memberssubpage = document.getElementById("memberssubpage");
  if (memberssubpage) {
    let photo = document.getElementById("bio_photo");
    let turntable = document.getElementById("bio_turntable");
    let haiku = document.getElementById("bio_haiku");
    let link = document.getElementById("bio_link");
    if (photo && turntable) {
      swap(link, photo);
      swap(photo, turntable);
    }
    if (haiku && turntable) {
      swap(link, haiku);
      swap(haiku, turntable);
    }
    if (photo && haiku) {
      swap(link, photo);
      swap(photo, haiku);
    }
  }

});