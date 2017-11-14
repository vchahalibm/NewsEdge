console.log('Loading Js NAO...');
var jsnao = {
  t : null,
  sname : null,
  coords : { x: 0, y: 0},
  session : null,
  al_sys : null,
  al_tts : null,
  al_video : null,
  al_motion : null,
  al_posture : null,
  al_memory : null,
  al_speech : null,
  al_audio : null,
  al_behaviour : null,
  al_dialog : null, 
  speech_user : 'asrTest',
  video_user : '',
  vocabulary : [],
  log_listener : null,
  log_level : 4,
  detector : null,
  tracker : null,  
  classifier : objectdetect.handopen,
  lastGesture :'',
  GestureCallback : null,
  TrackerCallback : null,  
  GestureToggle : 0, 
  TrackerToggle : 0,
  TrackerClass : 'color',     
  SpeechRecognizedCallback : null,
  SpeechInitializedCallback : null,
  MemoryInitializedCallback : null,
  BehaviourInitializedCallback : null,
  ScreenLogMessagesCallback : null, 
  error : function(data) { console.log(data) },
  connect : function(address) {
    jsnao.screen_log('Create Session to : '+address);
    jsnao.session = new QiSession(address);
    jsnao.session.socket().on('connect', jsnao.connected);
    jsnao.session.socket().on('disconnect', jsnao.disconnected);
  },
  connected : function() {
    jsnao.screen_log('Session Connected.');
    jsnao.detector = new objectdetect.detector(160, 120, 1.1, jsnao.classifier);
    jsnao.session.service("ALSystem").done(jsnao.init_system);
    jsnao.session.service("ALMotion").done(jsnao.init_motion);
    jsnao.session.service("ALVideoDevice").done(jsnao.init_video);
    jsnao.session.service("ALTextToSpeech").done(jsnao.init_tts);
    jsnao.session.service("ALAnimatedSpeech").done(jsnao.init_animated_tts);    
    jsnao.session.service("ALRobotPosture").done(jsnao.init_posture);
    jsnao.session.service("ALSpeechRecognition").done(jsnao.init_speech);
    jsnao.session.service("ALAudioDevice").done(jsnao.init_audioRecording);
    jsnao.session.service("ALBehaviorManager").done(jsnao.init_behaviourMgr);
    jsnao.session.service("ALMemory").done(jsnao.init_memory);
    jsnao.session.service("ALDialog").done(jsnao.init_dialog);

  },
  init_tts : function(data) {
    jsnao.al_tts = data;
    jsnao.al_tts.getLanguage().done(function(data) { $('#imgLang').attr('src', jsnao.getLangImage(data)); });
    $('#DivTts').show(300);
    jsnao.screen_log('TTS Initialized.');
  },
  init_animated_tts : function(data) {
    jsnao.al_animatedtts = data;
    $('#DivTts').show(300);
    jsnao.screen_log('Animated Text To Speech Initialized.');
  },  
  init_system : function(data) {
    jsnao.al_sys = data;
    $('#DivSys').show(300);
    jsnao.al_sys.robotName().done(function(data) { $('#RbtName').text(data); $('#RbtName').show(300); });
    jsnao.al_sys.systemVersion().done(function(data) {
      $('#RbtVersion').text(data);
      $('#RbtVersion').show(300);
      if (data.indexOf('2.') == 0) {
        $('#DivLogs').show(300);
      }
    });
    jsnao.al_sys.robotIcon().done(function(data) { $('#RbtIcon').attr('src', 'data:image/png;base64,'+data); });
    jsnao.screen_log('SYSTEM Initialized.');
  },
  init_motion : function(data) {
    jsnao.al_motion = data;
    $('#DivMotion').show(300);
    jsnao.screen_log('MOTION Initialized.');
  },
  init_posture : function(data) {
    jsnao.al_posture = data;
    $('#DivPosture').show(300);
    jsnao.screen_log('POSTURE Initialized.');
  },
  init_audioRecording : function(data) {
    jsnao.al_audio = data;
    jsnao.screen_log('AUDIO Initialized.');
  },
  init_behaviourMgr : function(data) {
    jsnao.al_behaviour = data;
    jsnao.screen_log('BEHAVIOR MGR Initialized.');
    jsnao.BehaviourInitializedCallback();
  },
  init_memory : function(data) {
    jsnao.al_memory = data;
    jsnao.screen_log('MEMORY Initialized.');
    jsnao.MemoryInitializedCallback();
  },
  init_dialog : function(data) {
    jsnao.al_dialog = data;
    jsnao.screen_log('DIALOG Initialized.');
  },  
  init_video : function(data) {
    jsnao.al_video = data;
    $('#DivVideo').show(300);
    jsnao.screen_log('VIDEO Initialized.');
  },
  init_speech : function(data) {
    jsnao.al_speech = data;
    jsnao.screen_log('SPEECH Initialized.');
    jsnao.SpeechInitializedCallback();
  },
  behaviour_start : function(behaviorName,callback) {
    jsnao.screen_log('Starting Behavior:'+ behaviorName);
    // Check that the behavior exists.
    if (jsnao.al_behaviour.isBehaviorInstalled(behaviorName)){
	//if (jsnao.al_behaviour.isBehaviorRunning(behaviorName) == 0){
	   jsnao.al_behaviour.startBehavior(behaviorName);
    	   // Make sure the callback is a function
    	   if (typeof callback === "function") {
	     // Call it, since we have confirmed it is callable
	     callback();
	   }
	//}else{
      	   //console.log('Behavior is already running');
	//}
    }else{
      console.log('Behavior NOT FOUND');
      return;
    }

  },
  behaviour_stop : function(behaviorName,callback) {
    jsnao.screen_log('Stopping Behavior:'+ behaviorName);
    if (jsnao.al_behaviour.isBehaviorRunning(behaviorName)){
	     jsnao.al_behaviour.stopBehavior(behaviorName);
    	 // Make sure the callback is a function​
    	 if (typeof callback === "function") {
	        // Call it, since we have confirmed it is callable​
	        callback();
    	 }
    }else{
      console.log('Behavior is already stopped');
    }
  },
  serviceStart_complete : function(callback) {
    jsnao.screen_log('ALL SERVICES Initialized.');
    // Make sure the callback is a function​
    if (typeof callback === "function") {
	     // Call it, since we have confirmed it is callable​
	     callback();
    }

  },
  robot_RaiseEvent : function(robotevent,roboteventVal,callback) {
    jsnao.screen_log('Raising ROBOT event');
    jsnao.al_memory.raiseEvent(robotevent,roboteventVal);//.done(
       // Make sure the callback is a function
       if (typeof callback === "function") {
	        // Call it, since we have confirmed it is callable
	        callback();
       }      
    //);*/    
  }, 
  speech_start : function() { 
    jsnao.screen_log('VOCABULARY:'+jsnao.vocabulary);    
    jsnao.al_speech.setVocabulary(jsnao.vocabulary, 1);
    jsnao.al_speech.subscribe(jsnao.speech_user);
    jsnao.screen_log('Speech recognition engine started');    
  },
  speech_stop : function() {
    jsnao.al_speech.unsubscribe(jsnao.speech_user);
    jsnao.screen_log('Speech recognition engine stopped');    
  },
  speech_recognize : function(callback) {
    jsnao.al_memory.subscriber("WordRecognized").done(function (subscriber) {
      // subscriber.signal is a signal associated to "WordRecognized"
      subscriber.signal.connect(function (worddata) {
        jsnao.screen_log(worddata);
        // Make sure the callback is a function​
        if (typeof callback === "function") {
          // Call it, since we have confirmed it is callable​
           callback(worddata);
        }
      });
    });
  },
  speech_detected : function(callback) {
    jsnao.al_memory.subscriber("SpeechDetected").done(function (subscriber) {
      // subscriber.signal is a signal associated to "SpeechDetected"
      subscriber.signal.connect(function (speechdata) {
        jsnao.screen_log('SPEECH_DETECTED:'+speechdata);
        if(speechdata == 1){
	  //jsnao.robot_RaiseEvent('SILABNAOREMOTE/Event','STT');
          //jsnao.al_audio.startMicrophonesRecording('/home/nao/recordings/microphones/silab.ogg' ).done(jsnao.move_head).fail(jsnao.move_head);
        }else if(speechdata == 0){
          //jsnao.al_audio.stopMicrophonesRecording().done(jsnao.move_head).fail(jsnao.move_head);
        }
        // Make sure the callback is a function​
        if (typeof callback === "function") {
           // Call it, since we have confirmed it is callable​
           callback(speechdata);
        }
      });
    });
  },
  sound_detected : function(callback) {
    jsnao.al_memory.subscriber("SoundDetected").done(function (subscriber) {
      // subscriber.signal is a signal associated to "SoundDetected"
      subscriber.signal.connect(function (sounddata) {
        jsnao.screen_log('SOUND_DETECTED:'+sounddata);
         // Make sure the callback is a function​
         if (typeof callback === "function") {
          // Call it, since we have confirmed it is callable​
          callback(sounddata);
        }
      });
    });
  },
  STT_detected : function(callback) {
    jsnao.al_memory.subscriber("SILABNAOREMOTE/STT").done(function (subscriber) {
      // subscriber.signal is a signal associated to "SILABNAOREMOTE/STT"
      subscriber.signal.connect(function (STTdata) {
        jsnao.screen_log('STT_DETECTED:'+STTdata);
         // Make sure the callback is a function​
         if (typeof callback === "function") {
          // Call it, since we have confirmed it is callable​
          callback(STTdata);
        }
      });
    });
  },
  level_logs: function(newLevel) {
    var new_level = 4;
    if (newLevel == undefined) {
      new_level = jsnao.log_level + 1;
      if (new_level > 6) {
        new_level = 1;
      }
    }
    jsnao.log_level = new_level;
    console.log('New Log Level = '+jsnao.log_level)
    if (jsnao.log_listener) {
      jsnao.log_listener.setVerbosity(jsnao.log_level);
      if (jsnao.logLevels.hasOwnProperty(jsnao.log_level)) {
        $('#LogLevel').text('Logger Level : '+jsnao.logLevels[jsnao.log_level].label);
      }
    }
  },
  display_logs: function() {
    $('#DivLogs').hide(300);
    $('#DivLogContainer').show(300);
    jsnao.session.service("LogManager").done(function(logMan) {
      console.log('LogManager Service Loaded');
      logMan.getListener().done(function(newListener) {
        console.log('LogListener Loaded');
        jsnao.log_listener = newListener;
        jsnao.log_listener.onLogMessage.connect(jsnao.add_log);
        jsnao.level_logs(4);
      });
    });
  },
  add_log: function(logData) {
    // If the Log Level is in the List
    if (jsnao.logLevels.hasOwnProperty(logData.level)) {
      var log_level = jsnao.logLevels[logData.level];
      var spanLvl = $('<span style="color:'+log_level.color+';margin-left:5px;">['+log_level.label+']</span>');
      var spanCat = $('<span style="color:#0094FF;margin-left:5px;">'+logData.category+' : </span>');
      var spanMsg = $('<span style="color:#000000;margin-left:5px;">'+logData.message+'</span>');
      var logLine=$('<div style="border-bottom: solid 1px #DCDCDC;"></div>');
      logLine.append(spanLvl);
      logLine.append(spanCat);
      logLine.append(spanMsg);
      $('#DivLogger').prepend(logLine);
    }
  },
  move_head : function() {
    var dx = jsnao.coords.x - ($("#myCanvas0").width() / 2);
    var dx = -dx / $("#myCanvas0").width() * 2.09;
    var dy = jsnao.coords.y - ($("#myCanvas0").height() / 2);
    var dy = dy / $("#myCanvas0").height() * 0.90;
    var v = 0.5;
    dx = 0;dy=-0.9;
    if(jsnao.GestureToggle == 1){
       jsnao.screen_log('Move Head:DX'+dx+' DY:'+dy);     
       jsnao.al_motion.angleInterpolation(['HeadYaw', 'HeadPitch'], [[dx], [dy]], [[v],[v]], true).done(jsnao.move_head).fail(jsnao.move_head);      
    }    
  },
  display_video : function() {
    jsnao.al_motion.setStiffnesses('Head', 1.0).fail(jsnao.error);
    $('#BtnVid').hide(300);
    $('#DivVid1').show(300);
    $('#DivVid2').show(300);
    $("#myCanvas0").mousemove(function(e){
      jsnao.coords.x = e.pageX - $(this).offset().left;
      jsnao.coords.y = e.pageY - $(this).offset().top;
    });
    jsnao.move_head();
    jsnao.t = [];
    for (var i = 0; i < 1024; ++i) {
      jsnao.t[String.fromCharCode(i)] = i;
    }
    var z = Math.floor((Math.random()*10000)+1);
    jsnao.screen_log('VIDEO DISPLAY');
    jsnao.video_user = "test_z" + z;
    jsnao.al_video.subscribeCameras("test_z" + z, [0,1], [0,0], [11,11], 30).done(jsnao.subscribed_video).fail(jsnao.error);
  },
  subscribed_video : function(sname) {
    jsnao.sname = sname;
    jsnao.al_video.getImagesRemote(jsnao.sname).done(jsnao.image_remote).fail(jsnao.error);
  },
  image_remote : function(data) {
    if (data.length > 0) {
      var imgData = data[0];
      if (imgData.length > 6) {
        var idCanvas = 'myCanvas0';
        var imgWidth = imgData[0];
        var imgHeight = imgData[1];
        var imgBase64 = imgData[6];
        jsnao.display_image(idCanvas, imgWidth, imgHeight, imgBase64);
      }
    }
    if (data.length > 1) {
      var imgData = data[1];
      if (imgData.length > 6) {
        var idCanvas = 'myCanvas1';
        var imgWidth = imgData[0];
        var imgHeight = imgData[1];
        var imgBase64 = imgData[6];
        jsnao.display_image(idCanvas, imgWidth, imgHeight, imgBase64);
      }
    }
    jsnao.al_video.getImagesRemote(jsnao.sname).done(jsnao.image_remote).fail(jsnao.error);
  },
  display_image : function(idCanvas, imgWidth, imgHeight, imgBase64) {
    var imgBin = atob(imgBase64);
    var x = 0;
    var w = imgWidth * imgHeight * 4;
    var canvas = document.getElementById(idCanvas);
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, imgWidth, imgHeight);
    
    for (var p = 0; p < w; ) {
      imageData.data[p++] = jsnao.t[imgBin[x++]];
      imageData.data[p++] = jsnao.t[imgBin[x++]];
      imageData.data[p++] = jsnao.t[imgBin[x++]];
      imageData.data[p++] = 255;
    }
    context.putImageData(imageData, 0, 0);
    if(jsnao.GestureToggle == 1){
       var gesture = jsnao.find_gesture(document.getElementById('myCanvas0'), jsnao.GestureCallback);
    }
    if(jsnao.TrackerToggle == 1){
       var tracking = jsnao.track_objects(document.getElementById('myCanvas0'), jsnao.TrackerCallback);
    }
    
  },
  find_gesture: function(canvas,callback) {
      // Perform the actual detection:
      var coords = jsnao.detector.detect(canvas, 1);
      var gestureMovement = '';
      var context = canvas.getContext('2d');

      if (coords[0]) {
          var coord = coords[0];
          if (coord[4] > 2) {
              context.beginPath();
              context.lineWidth = 1;
              context.strokeStyle = 'rgba(0, 255, 255, 0.75)';
              context.rect(coord[0], coord[1], coord[2], coord[3]);
              context.stroke();

              console.log('1st:' + coord[0] + ' 2nd:' + coord[1] + ' 3rd:' + coord[2] + ' 4th:' + coord[3]);
              var obj_pos = [coord[0] + coord[2] / 2, coord[1] + coord[3] / 2];
              console.log(obj_pos);

              var w = canvas.clientWidth,
                  h = canvas.clientHeight;
              var centralAreaRatio = 1 / 3;
              var centralAreaWidth = w * centralAreaRatio;
              var centralAreaHeight = h * centralAreaRatio;

              // LEFT - RIGHT
              if (obj_pos[0] < (w - centralAreaWidth) / 2) {
                  gestureMovement = gestureMovement + ' LEFT';
                  console.log(gestureMovement);
              } else if (obj_pos[0] > (w + centralAreaWidth) / 2) {
                  gestureMovement = gestureMovement + ' RIGHT';
                  console.log(gestureMovement);
              }
              // TOP - DOWN
              if (obj_pos[1] < (h - centralAreaHeight) / 2) {
                  gestureMovement = gestureMovement + ' TOP';
                  console.log(gestureMovement);
              } else if (obj_pos[1] > (h + centralAreaHeight) / 2) {
                  gestureMovement = gestureMovement + ' DOWN';
                  console.log(gestureMovement);
              }

              if (jsnao.lastGesture != gestureMovement) {

                  jsnao.lastGesture = gestureMovement;

                  // Make sure the callback is a function​
                  if (typeof callback === "function") {
                       // Call it, since we have confirmed it is callable​
                       callback(jsnao.lastGesture);
                  }
              }

          }
      }
      return jsnao.lastGesture;
  },
  track_objects : function(canvas,callback) {
     if(jsnao.TrackerClass == 'color' ) {
       var tracker = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);      
     }
     if(jsnao.TrackerClass == 'face' ) {
      var tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);
     }    
    
      var context = canvas.getContext('2d');
      tracking.track(canvas, tracker, { camera: true });

      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function(rect) {
          // Make sure the callback is a function​
          if (typeof callback === "function") {
             // Call it, since we have confirmed it is callable​
	     if(jsnao.TrackerClass == 'color' ) {
               callback(rect.color);
	     }
	     if(jsnao.TrackerClass == 'face' ) {
               callback('face');
	     }

          } 
	  if(jsnao.TrackerClass == 'color' ) {
           if (rect.color === 'custom') {
             rect.color = tracker.customColor;
           }
           context.strokeStyle = rect.color;
           context.strokeRect(rect.x, rect.y, rect.width, rect.height);
           context.font = '11px Helvetica';
           context.fillStyle = "#fff";
           context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
           context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
	  }

	 if(jsnao.TrackerClass == 'face' ) {

            context.strokeStyle = '#a64ceb';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
	 }

         
      	}); 
       });   


  },
  handleClassifierSelect : function(e) {
			jsnao.classifier = objectdetect[e.target.value];
      console.log('CLASSIFIER CHANGED - '+e.target.value);
			jsnao.detector = new objectdetect.detector(160, 120, 1.1, jsnao.classifier);
  },
  screen_log : function(msg) {
        console.log(msg);
         // Make sure the callback is a function​
         if (typeof jsnao.ScreenLogMessagesCallback === "function") {
            // Call it, since we have confirmed it is callable​
            jsnao.ScreenLogMessagesCallback(msg);
         }
  },  
  stop_video : function() {
    jsnao.al_video.unsubscribe(jsnao.video_user).done(jsnao.screen_log('VIDEO UNSUBSCRIBED')).fail(jsnao.screen_log('UNABLE TO UNSUBSCRIBE VIDEO'));    
  },
  disconnected : function() {
    console.log('Session Disconnected.');
  },
  getLangImage : function(code_lang) {
    if (jsnao.languages.hasOwnProperty(code_lang)) {
      return jsnao.languages[code_lang].image;
    }
    return 'img/check.png';
  },
  logLevels : {
    1: {'label': 'FATAL',   'color': '#B200FF'},
    2: {'label': 'ERROR',   'color': '#FF0000'},
    3: {'label': 'WARN' ,   'color': '#FF6A00'},
    4: {'label': 'INFO',    'color': '#267F00'},
    5: {'label': 'VERBOSE', 'color': '#0026FF'},
    6: {'label': 'DEBUG',   'color': '#404040'}
  },
  languages : {
    'English':    { 'image' : 'img/flag_english.png' },
    'French':     { 'image' : 'img/flag_french.png' },
    'Italian':    { 'image' : 'img/flag_italian.png' },
    'Portuguese': { 'image' : 'img/flag_portuguese.png' },
    'German':     { 'image' : 'img/flag_german.png' },
    'Spanish':    { 'image' : 'img/flag_spanish.png' },
    'Japanese':   { 'image' : 'img/flag_japanese.png' },
    'Korean':     { 'image' : 'img/flag_korean.png' },
    'Chinese':    { 'image' : 'img/flag_chinese.png' },
    'Brazilian':  { 'image' : 'img/flag_brazilian.png' },
    'Turkish':    { 'image' : 'img/flag_turkish.png' },
    'Arabic':     { 'image' : 'img/flag_arabic.png' },
    'Polish':     { 'image' : 'img/flag_polish.png' },
    'Czech':      { 'image' : 'img/flag_czech.png' },
    'Dutch':      { 'image' : 'img/flag_dutch.png' },
    'Danish':     { 'image' : 'img/flag_danish.png' },
    'Finnish':    { 'image' : 'img/flag_finnish.png' },
    'Swedish':    { 'image' : 'img/flag_swedish.png' },
    'Russian':    { 'image' : 'img/flag_russian.png' },
    'Norwegian':  { 'image' : 'img/flag_norwegian.png' }
  }
}
jsnao.screen_log('Js NAO is loaded.');