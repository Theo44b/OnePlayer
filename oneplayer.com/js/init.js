	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: 'css/style.css', lockViewport: true, viewport: 'minimal-ui' },
		}
	});

		var compt = 0;

		window.onload = function() {
			document.body.className = '';
		}


		window.ontouchmove = function() {
			return false;
		}

	
		window.onorientationchange = function() {
			document.body.scrollTop = 0;
		}

		function changebg(){
			if (compt == 0){
				compt=1
				var player = document.getElementById('player');
      			var mp4Vid = document.getElementById('bgvid1');
      			player.pause();
	      		mp4Vid.src = "background2.mp4";
	      		player.load();
		    	player.play();
			}else{
				compt=0
				var player = document.getElementById('player');
      			var mp4Vid = document.getElementById('bgvid1');
      			player.pause();
	      		mp4Vid.src = "background.mp4";
	      		player.load();
		    	player.play();
			}
			
      		
			
		}