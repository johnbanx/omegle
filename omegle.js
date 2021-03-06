$('head').append('<link type="text/css" rel="stylesheet" href="/static/style.css?104">');

//---SETTINGS---

//1. Theme
//Choose between 'light' or 'dark' theme (default is light);
var theme = 'dark';

//2. Social Media
//Change @username to your social media username.
//Change the number at the end for the font size, 24 is the default.
//Tip: You can group social medias that has the same username by typing them after each others and seperate them with a SPACE.
//Example: 'facebook instagram: @username'.
var socials = [
	'facebook: @johnbanxmagic, 18',
	'instagram: @johnbanx',
	//'soundcloud: @username',         /*REMOVE (//) TO ENABLE*/
	//'tiktok: @username',             /*REMOVE (//) TO ENABLE*/
	//'youtube: @username',            /*REMOVE (//) TO ENABLE*/
];

//3. Social Media Animation
//Choose between true or false to start or stop social animation
var social_animation = true;

//Text Presets
//WARNING: Do NOT use double quotes (") within the text
//Tip: use (\n) for new line
var presets = [
	"youtube.com/user/johnbanx\nInstagram @johnbanx",
	"Love 😍 from Egypt",
	"That's my website scratcheg.com",
	"Thank you for watching 😍",
	"My name is John",
	"I'm from Egypt",
	"Have a good day 😍",
	"Enjoy the rest of your day 😍",
];

//---END OF SETTINGS---

jQuery('#videobtn').click(function() {
	if (jQuery('#othervideocontainer1').length === 0) {
		//jQuery('.chatmsgcell').insertBefore('.disconnectbtncell');
		jQuery('#videowrapper > *:not("#selfvideo")').wrapAll(
			'<div id="othervideocontainer1">'+
				'<div id="othervideocontainer2"></div>'+
			'</div>'
		)
		jQuery('#selfvideo').wrap(
			'<div id="selfvideocontainer1">'+
				'<div id="selfvideocontainer2"></div>'+
			'</div>'
		)
		jQuery('#videowrapper').append('<button id="fs">[</button>');
		jQuery('#videowrapper > *').wrapAll('<div id="fs-container"></div>')
		jQuery('#selfvideocontainer2').append('<div class="user-data"></div>'
		);
		socials.forEach(mySocials);
		function mySocials(social) {
			var iconSpans = '';
			var socialFont = social.split(':')[1].split(',')[1];
			var socialValue = social.split(':')[1].split(',')[0];
			var socialName = social.split(':')[0].split(' ');
			for (i = 1; i <= socialName.length; i++){
				iconSpans += '<span class="icon '+socialName[i-1]+'"></span>'
			}
			jQuery('.user-data').append(
				'<div>'+
					iconSpans+
					'<span class="text" style="font-size: '+socialFont+'px"><span>'+socialValue+'</span></span>'+
				'</div>'
			);
		}
		if(social_animation){
			$('.user-data > div> .text').css('width', '0').css('animation', 'social 60s infinite');
		}
		jQuery('#othervideocontainer2').append('<div id="stranger-ip"></div>');
		jQuery('#othervideocontainer1').append('<div id="log-container"><div id="copy-logbox"></div><div id="chat-status"></div></div>');
		var divheight = 6;
		var newdivheight;
		var waitTime = 0;
		var copyloginterval = setInterval(timerIncrement2, 500);
		function timerIncrement2() {
			$('.logbox .statuslog').each(function(){
				if($(this).text() == "Stranger has disconnected." || $(this).text() == "You have disconnected."){
					$(this).attr('id', 'disconnected');
				}
				if($(this).text() == "Stranger is typing..."){
					$(this).attr('id', 'typing');
					$(this).parent().attr('id', 'typing-container');
				}
			})
			$('#chat-status').html($("#disconnected").text());
		    $('#copy-logbox').html($('.logbox').html());
		    $('#copy-logbox > div > .logitem > *:not(.strangermsg, #typing)').parent().remove();
		    $('#copy-logbox').scrollTop(document.getElementById('copy-logbox').scrollHeight);
		    newdivheight = document.getElementById('copy-logbox').scrollHeight;
		    if(newdivheight == divheight){
			    waitTime++;
			    if (waitTime > 12) {
			        $("#copy-logbox span").hide();
			    }
		    } else {
		    	$("#copy-logbox span").show();
		    	divheight = newdivheight;
		    	waitTime = 0;
		    }
		    var emojiIcons = 'Smileys,😀,😃,😄,😁,😆,😅,😂,🤣,😊,😇,🙂,🙃,😉,😌,😍,🥰,😘,😗,😙,😚,😋,😛,😝,😜,🤪,🤨,🧐,🤓,😎,🤩,🥳,😏,😒,😞,😔,😟,😕,🙁,☹️,😣,😖,😫,😩,🥺,😢,😭,😤,😠,😡,🤬,🤯,😳,🥵,🥶,😱,😨,😰,😥,😓,🤗,🤔,🤭,🤫,🤥,😶,😐,😑,😬,🙄,😯,😦,😧,😮,😲,🥱,😴,🤤,😪,😵,🤐,🥴,🤢,🤮,🤧,😷,🤒,🤕,🤑,🤠,😈,👿,👹,👺,🤡,💩,👻,💀,☠️,👽,🤖,🎃,😺,😸,😹,😻,😼,😽,🙀,😿,😾|Gestures & Body Parts,👋,🤚,🖐,✋,🖖,👌,🤏,✌️,🤞,🤟,🤘,🤙,👈,👉,👆,🖕,👇,☝️,👍,👎,✊,👊,🤛,🤜,👏,🙌,👐,🤲,🤝,🙏,✍️,💅,🤳,💪,🦾,🦵,🦿,🦶,👣,👂,🦻,👃,🧠,🦷,🦴,👀,👅,👄,💋,🩸|Animals & Nature,🐶,🐱,🐭,🐹,🐰,🦊,🐻,🐼,🐻‍,❄️,🐨,🐯,🦁,🐮,🐷,🐽,🐸,🐵,🙈,🙉,🙊,🐒,🐔,🐧,🐦,🐤,🐣,🐥,🦆,🦅,🦉,🦇,🐺,🐗,🐴,🦄,🐝,🐛,🦋,🐌,🐞,🐜,🦟,🦗,🕷,🦂,🐢,🐍,🦎,🦖,🦕,🐙,🦑,🦐,🦞,🦀,🐡,🐠,🐟,🐬,🐳,🐋,🦈,🐊,🐅,🐆,🦓,🦍,🦧,🐘,🦛,🦏,🐪,🐫,🦒,🦘,🐃,🐂,🐄,🐎,🐖,🐏,🐑,🦙,🐐,🦌,🐕,🐩,🦮,🐕‍🦺,🐈,🐈,🐓,🦃,🦚,🦜,🦢,🦩,🐇,🦝,🦨,🦡,🦦,🦥,🐁,🐀,🐿,🦔,🐾,🐉,🐲,🌵,🎄,🌲,🌳,🌴,🌱,🌿,☘️,🍀,🎍,🎋,🍃,🍂,🍁,🍄,🐚,🌾,💐,🌷,🌹,🥀,🌺,🌸,🌼,🌻,🌞,🌝,🌛,🌜,🌚,🌕,🌖,🌗,🌘,🌑,🌒,🌓,🌔,🌙,🌎,🌍,🌏,🪐,💫,⭐️,🌟,✨,⚡️,☄️,💥,🔥,🌪,🌈,☀️,🌤,⛅️,🌥,☁️,🌦,🌧,⛈,🌩,🌨,❄️,☃️,⛄️,🌬,💨,💧,💦,☔️,☂️,🌊,🌫|Food & Drink,🍏,🍎,🍐,🍊,🍋,🍌,🍉,🍇,🍓,🍈,🍒,🍑,🥭,🍍,🥥,🥝,🍅,🍆,🥑,🥦,🥬,🥒,🌶,🌽,🥕,🧄,🧅,🥔,🍠,🥐,🥯,🍞,🥖,🥨,🧀,🥚,🍳,🧈,🥞,🧇,🥓,🥩,🍗,🍖,🦴,🌭,🍔,🍟,🍕,🥪,🥙,🧆,🌮,🌯,🥗,🥘,🥫,🍝,🍜,🍲,🍛,🍣,🍱,🥟,🦪,🍤,🍙,🍚,🍘,🍥,🥠,🥮,🍢,🍡,🍧,🍨,🍦,🥧,🧁,🍰,🎂,🍮,🍭,🍬,🍫,🍿,🍩,🍪,🌰,🥜,🍯,🥛,🍼,☕️,🍵,🧃,🥤,🍶,🍺,🍻,🥂,🍷,🥃,🍸,🍹,🧉,🍾,🧊,🥄,🍴,🍽,🥣,🥡,🥢,🧂|Symbols,❤️,🧡,💛,💚,💙,💜,🖤,🤍,🤎,💔,❣️,💕,💞,💓,💗,💖,💘,💝,💟,☮️,✝️,☪️,🕉,☸️,✡️,🔯,🕎,☯️,☦️,🛐,⛎,♈️,♉️,♊️,♋️,♌️,♍️,♎️,♏️,♐️,♑️,♒️,♓️,🆔,⚛️,♠️,♥️,♣️,♦️,🃏,🎴,🕐,🕑,🕒,🕓,🕔,🕕,🕖,🕗,🕘,🕙,🕚,🕛,🕜,🕝,🕞,🕟,🕠,🕡,🕢,🕣,🕤,🕥,🕦,🕧';
		    
		    var emojiSpans = '';
		    var emojiMenu = '';
		    var emojiIconsCats = emojiIcons.split('|');
		    var emojiIconsSingles;
		    var EmojiCatId;
		    for (i = 1; i <= emojiIconsCats.length; i++){
		    	emojiIconsSingles = emojiIconsCats[i-1].split(',');
		    	EmojiCatId = emojiIconsSingles[0].replace(/ |&/g, "-").toLowerCase();
		    	emojiSpans += '<div id="'+EmojiCatId+'"><p class="emojis-cat">'+emojiIconsSingles[0]+'</p><div class="emojis-category">';
		    	emojiMenu += '<button id-ref="'+EmojiCatId+'">'+emojiIconsSingles[1]+'</button>';
		    	for (j = 2; j <= emojiIconsSingles.length; j++){
					emojiSpans += '<button class="emoji">'+emojiIconsSingles[j-1]+'</button>'
		    	}
		    	emojiSpans += '</div></div>';
			}
			var presetsItems=''
			for (i = 1; i <= presets.length; i++){
				presetsItems+='<p title="'+presets[i-1]+'">'+presets[i-1]+'</p>'
			}
			function removeEmojis(string) {
			  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
			  return string.replace(regex, "");
			}
			
			function isOnlyEmoji(string) {
			  return !removeEmojis(string).length;
			}
			$('.youmsg > span, .strangermsg > span').each(function(){
				if(isOnlyEmoji($(this).text())){
					$(this).addClass("emojis-only");
					$(this).parent().show();
				} else {
					$(this).parent().show();
				}
			})
		    if($('#emojis').length == 0 && $('.chatmsg[disabled]').length == 0){
		    	$('.chatmsgwrapper').append(
		    		'<button id="emojis">}</button>'+
		    		'<button id="presets">T</button>'+
		    		'<div id="emojis-panel">'+
		    		emojiSpans+'<div id="emoji-menu">'+emojiMenu+'</div>'+
		    		'</div>'+
		    		'<div id="presets-panel"><p>Text Presets</p><div id="presets-holder">'+presetsItems+'</div>'+
		    		'</div>'
	    		);
			    $('#emojis').click(function(e){
			    	$(this).toggleClass('active');
			    	$('#emojis-panel').toggleClass('active');
			    	$('#presets, #presets-panel').removeClass('active');
			    })
			    $('#emojis, #emojis-panel').click(function(e){
			    	e.stopPropagation();
			    })
			    $('#presets').click(function(e){
			    	$(this).toggleClass('active');
			    	$('#presets-panel').toggleClass('active');
			    	$('#emojis, #emojis-panel').removeClass('active');
			    })
			    $('#presets, #presets-panel').click(function(e){
			    	e.stopPropagation();
			    })
			    $('body').click(function(){
			    	$('#emojis, #emojis-panel, #presets, #presets-panel').removeClass('active');
			    })
			    $('#emoji-menu > button').click(function(){
			    	$('#emoji-menu > button').css('color', '#ccc');
			    	$(this).css('color', '#1fb9eb');
			    	$('#emojis-panel > div').hide();
			    	$('#'+$(this).attr('id-ref')).show();
			    })
		    	var chatArea = document.getElementsByClassName('chatmsg')[0];
			    
			    $('.emoji, #presets-panel > div > p').click(function(){
					var start = chatArea.selectionStart;
					var end = chatArea.selectionEnd;
					var value = chatArea.value;
					var part1 = value.substring(0,start);
					var part2 = value.substring(end);
					chatArea.value = part1 + $(this).text() + part2;
					chatArea.focus();
					chatArea.selectionStart = start + $(this).text().length;
					chatArea.selectionEnd = start + $(this).text().length;
			    })
			    var x = document.getElementsByClassName("emojis-category");
				for (i = 0; i < x.length; i++) {
					x[i].onmousewheel = moveObject;
				}
				function moveObject(event){
				    var delta = 0;
				
				    if (!event) event = window.event;
				
				    // normalize the delta
				    if (event.wheelDelta) {
				
				        // IE and Opera
				        delta = -event.wheelDelta / 60;
				
				    } else if (event.detail) {
				
				        // W3C
				        delta = event.detail / 2;
				    }
				    //moving the position of the object
				    this.scrollTo(0, this.scrollTop+delta*23);
				}
			    document.getElementsByClassName('chatmsg')[0].onmousewheel = moveChatmsg;
				function moveChatmsg(event){
				    var delta = 0;
				
				    if (!event) event = window.event;
				
				    // normalize the delta
				    if (event.wheelDelta) {
				
				        // IE and Opera
				        delta = -event.wheelDelta / 60;
				
				    } else if (event.detail) {
				
				        // W3C
				        delta = event.detail / 2;
				    }
				    //moving the position of the object
				    this.scrollTo(0, this.scrollTop+delta*10.5);
				}
			    document.getElementById('presets-holder').onmousewheel = moveChatmsg;
				function moveChatmsg(event){
				    var delta = 0;
				
				    if (!event) event = window.event;
				
				    // normalize the delta
				    if (event.wheelDelta) {
				
				        // IE and Opera
				        delta = -event.wheelDelta / 60;
				
				    } else if (event.detail) {
				
				        // W3C
				        delta = event.detail / 2;
				    }
				    //moving the position of the object
				    this.scrollTo(0, this.scrollTop+delta*21);
				}
		    }
		    else if($('.chatmsg[disabled]').length == 1) {
		    	$('#presets, #emojis, #emojis-panel').remove();
		    }
		}
		
	    $('#emojis, #presets').off();
		var fsStatus = 0;
		function openFullscreen(elem) {
		  if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		  } else if (elem.webkitRequestFullscreen) { /* Safari */
		    elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE11 */
		    elem.msRequestFullscreen();
		  }
		}
		function closeFullscreen() {
		  if (document.exitFullscreen) {
		    document.exitFullscreen();
		  } else if (document.webkitExitFullscreen) { /* Safari */
		    document.webkitExitFullscreen();
		  } else if (document.msExitFullscreen) { /* IE11 */
		    document.msExitFullscreen();
		  }
		}
		jQuery('#fs').click(function(){
			if(fsStatus === 0) {
				openFullscreen(this.parentElement.parentElement);
			} else {
				closeFullscreen();
			}
		})
		
		  
		document.addEventListener('fullscreenchange', exitHandler);
		document.addEventListener('webkitfullscreenchange', exitHandler);
		document.addEventListener('mozfullscreenchange', exitHandler);
		document.addEventListener('MSFullscreenChange', exitHandler);
		
		function exitHandler() {
		    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		        fsStatus = 0;
		    	$('#copy-logbox, #chat-status').css('visibility', 'hidden');
		        $('#fs').text('[').blur().removeClass('fs-exit');
		        document.removeEventListener("keydown", KeysPress);
		        $(document).unbind();
		        $("#fs").fadeIn();
		        $('body').css("cursor", "unset");
				clearInterval(idleInterval);
				$('.chatmsg').focus();
				$(window).off();
				$('#fs-container').css('height', 'calc(100% - 20px)').css('width', 'calc(100% - 20px)').css('left', '10px').css('top', '10px');
		    } else {
		    	fsStatus = 1;
		    	$(window).resize(function(){
		    		aspectRatio();
	    		});
		    	function aspectRatio(){
			    	if((screen.height/screen.width) <= 0.5625){
			    		$('#fs-container').css('height', 'calc(100% - 20px)').css('width', ((1.777777777777778*screen.height)-20)+'px').css('left', '10px').css('left', (screen.width-20-$('#fs-container').width())/2+10+'px');
			    	} else {
			    		$('#fs-container').css('width', 'calc(100% - 20px)').css('height', ((0.5625*screen.width)-20)+'px').css('top', '10px').css('top', (screen.height-20-$('#fs-container').height())/2+10+'px');
			    	}
		    	}
		    	$('#copy-logbox, #chat-status').css('visibility', 'visible');
		        $('#fs').text(']').blur().addClass('fs-exit');
		        
				var idleTime = 0;
				var mouseoverfs = false;
			    //Increment the idle time counter every second.
			    idleInterval = setInterval(timerIncrement, 1200);
			
			    //Zero the idle timer on mouse movement.
			    $(document).mousemove(function (e) {
					$("#fs").fadeIn();
			        $('body').css("cursor", "unset");
			        idleTime = 0;
			    });
			    $("#fs").mouseover(function () {
			    	mouseoverfs = true;
			    });
			    $("#fs").mouseout(function () {
			    	mouseoverfs = false;
			    });
				
				function timerIncrement() {
				    idleTime++;
				    if (idleTime > 2 && mouseoverfs===false) {
				        $("#fs").fadeOut();
				        $('body').css("cursor", "none");
				    }
				}
				
				$(document).keypress(KeysPress);
		    }
			function KeysPress(e){
				function eventFire(el, etype){
				  if (el.fireEvent) {
				    el.fireEvent('on' + etype);
				  } else {
				    var evObj = document.createEvent('Events');
				    evObj.initEvent(etype, true, false);
				    el.dispatchEvent(evObj);
				  }
				}
				var evtobj = window.event? event : e;
				
				if(evtobj.keyCode == 13){
					eventFire(document.getElementsByClassName('disconnectbtn')[0], 'click');
				}
			}
		}
	}
})
jQuery(document).ready(function(){
	if (jQuery('#tos').length==0 && jQuery('#footer').length) {
		jQuery('#intro').append('<p id="tos"><a>Terms of Service</a></p>');
		jQuery('#footer').prepend('<div id="close-tos"><button>✕</button></div>');
	}
	jQuery('#tos > a').click(function(){
		jQuery('#footer').fadeIn();
	})
	jQuery('body, #close-tos > button').click(function(){
		jQuery('#footer').fadeOut();
		
	})
	jQuery('#footer, #tos > a').click(function(e){
		e.stopPropagation();
		
	})
	if($('#newonlinecount').length == 0){
		jQuery('#header').append('<div id="newonlinecount"><strong></strong><span>|</span></div>');
	}
	var waitTime = 0;
	var onlinecountinterval = setInterval(timerIncrement3, 500);
	function timerIncrement3() {
	    $('#newonlinecount > strong').html($('#onlinecount > strong').html());
	}
})
jQuery('#logo').click(function(){
	jQuery(document).ready(function(){
		if (jQuery('#footer').length==0) {
			jQuery('#tos').remove();
		}
	})
})
