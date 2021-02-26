//---OPTIONS---

//Choose between 'light' or 'dark' theme;
var theme            = 'dark';

//Change YOUR_ID to your social id or leave empty '' to disable
var facebook         = '@johnbanxmagic';
var instagram        = '@johnbanx';
var youtube          = '';

//Choose between true or false to start or stop social animation
var social_animation = true;

jQuery('#videobtn').click(function() {
	if (jQuery('#othervideocontainer1').length === 0) {
		jQuery('#videowrapper > *:not("#selfvideo")').wrapAll("<div id='othervideocontainer1'><div id='othervideocontainer2'></div></div>")
		jQuery('#selfvideo').wrap("<div id='selfvideocontainer1'><div id='selfvideocontainer2'></div></div>")
		jQuery('#selfvideocontainer2').append('<div class="user-data"></div>'
		);
		if(facebook !== '' && facebook !== undefined){
			jQuery('.user-data').append(
				'<div>'+
					'<span class="icon facebook">F</span>'+
					'<span class="text"><span>'+facebook+'</span></span>'+
				'</div>'
			);
		}
		if(instagram !== '' && instagram !== undefined){
			jQuery('.user-data').append(
				'<div>'+
					'<span class="icon instagram">I</span>'+
					'<span class="text"><span>'+instagram+'</span></span>'+
				'</div>'
			);
		}
		if(youtube !== '' && youtube !== undefined){
			jQuery('.user-data').append(
				'<div>'+
					'<span class="icon youtube">Y</span>'+
					'<span class="text"><span>'+youtube+'</span></span>'+
				'</div>'
			);
		}
		if(social_animation){
			$('.user-data > div> .text').css('width', '0').css('animation', 'social 60s infinite');
		}
		jQuery('#videowrapper').append('<button id="fs">[</button>');
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
		}
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
				openFullscreen(this.parentElement);
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
		    } else {
		    	fsStatus = 1;
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