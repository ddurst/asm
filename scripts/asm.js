jQuery.fn.swap = function(x){
	x = jQuery(x)[0];
	var a = this[0];
	var t = a.parentNode.insertBefore(document.createTextNode(''), a);
	x.parentNode.insertBefore(a, x);
	t.parentNode.insertBefore(x, t);
	t.parentNode.removeChild(t);
	return this;
};

/*
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);
}
*/

$(document).ready(function() {
/*
On the memberssubpage, the content flow (structurally, so meaning print and other accessibility-wise) should be: bio_text, bio_photo, bio_turntable, bio_link.
This swaps photo/turntable (or haiku/turntable) for the screen layout. However, some older versions had a photo AND haiku (and no turntable), so in that case we swap photo and haiku. Eesh.
*/
	if ($('#memberssubpage').length) {
		if ($('#bio_photo').length && $('#bio_turntable').length) {
			$('#bio_link').swap('#bio_photo');
			$('#bio_photo').swap('#bio_turntable');
		}
		if ($('#bio_haiku').length && $('#bio_turntable').length) {
			$('#bio_link').swap('#bio_haiku');
			$('#bio_haiku').swap('#bio_turntable');
		}
		if ($('#bio_photo').length && $('#bio_haiku').length) {
			$('#bio_link').swap('#bio_photo');
			$('#bio_photo').swap('#bio_haiku');
		}
	}
/*
On GetInvolved and the homepage, tweak the form.
*/
/*
	if ($('.fanbridge').length) {
		$('input#email').click(function(){
			if (this.value.toLowerCase().trim() == 'enter your email') this.value='';
		});
		$('input#email').blur(function(){
			if (this.value.toLowerCase().trim() == '') {
				this.value='enter your email';
			}
		});
		$('form').submit(function(){
			var email = $("input#email").val().toLowerCase().trim();
			if(isValidEmailAddress(email)) {
				if ($('input#submit + span').length) $('input#submit + span').html('').removeClass('error');
				return true;
      } else {
				if (!$('input#submit + span').length) $('input#submit').after(' <span></span>');
				if ($('input#submit + span').length) $('input#submit + span').html("email is not valid").addClass('error');
				$('input#email').select();
	      return false;
      }
		});
	}
*/

});
