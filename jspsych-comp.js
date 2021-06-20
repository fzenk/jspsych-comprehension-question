/**
 * jspsych-comp
 * adapted by Fred Zenker from 'jspsych-html-keyboard-response' by Josh de Leeuw
 **/

jsPsych.plugins["comp"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'comp',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      styling: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Styling',
        default: null,
        description: 'Extra CSS styling for the stimulus text'
      },
      choices: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Choices',
        default: undefined,
        array: true,
        description: 'The labels for the buttons.'
      },
      leftComment: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Left Comment',
        default: null,
        description: 'The helping text the left side of the buttons.'
      },
      rightComment: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Right Comment',
        default: null,
        description: 'The helping text the right side of the buttons.'
      },
      button_html: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button HTML',
        default: '<button class="jspsych-btn">%choice%</button>',
        array: true,
        description: 'The html of the button. Can create own style.'
      },
      keypress: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Keypress',
        default: 48,
        array: true,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed under the button.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      margin_vertical: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin vertical',
        default: '0px',
        description: 'The vertical margin of the button.'
      },
      margin_horizontal: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Margin horizontal',
        default: '8px',
        description: 'The horizontal margin of the button.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, then trial will end when user responds.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // first dropdown menu
    var html =
    '<select name="menu1" id="menu1">'+
    '<option value=""></option>'+
    '<option value="option1">the dog</option>'+
    '<option value="option2">the cat</option>'+
    '</select> ';

    // stimulus
    html += '<span id="jspsych-comp-stimulus" style="'+trial.styling+'">'+trial.stimulus+'</span> ';

    // second dropdown menu
    html +=
    '<select name="menu2" id="menu2">'+
    '<option value=""></option>'+
    '<option value="option1">the dog</option>'+
    '<option value="option2">the cat</option>'+
    '</select> ';

    //display buttons
    var buttons = [];
    if (Array.isArray(trial.button_html)) {
      if (trial.button_html.length == trial.choices.length) {
        buttons = trial.button_html;
      } else {
        console.error('Error in comp plugin. The length of the button_html array does not equal the length of the choices array');
      }
    } else {
      for (var i = 0; i < trial.choices.length; i++) {
        buttons.push(trial.button_html);
      }
    }
    html += '<div id="jspsych-comp-btngroup">';
    //show left comment if there is one
    if (trial.leftComment !== null) {
      html += trial.leftComment;
    }
    for (var i = 0; i < trial.choices.length; i++) {
      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
      html += '<div class="jspsych-comp-button" style="display: inline-block; margin:'+trial.margin_vertical+' '+trial.margin_horizontal+'" id="jspsych-comp-button-' + i +'" data-choice="'+i+'">'+str+'</div>';
    }
    //show right comment if there is one
    if (trial.rightComment !== null) {
      html += trial.rightComment;
    }
    html += '</div>';

    //show prompt if there is one
    if (trial.prompt !== null) {
      html += trial.prompt;
    }
    display_element.innerHTML = html;

    // start time
    var start_time = performance.now();

    // add event listeners to buttons
    for (var i = 0; i < trial.choices.length; i++) {
      display_element.querySelector('#jspsych-comp-button-' + i).addEventListener('click', function(e){
        var choice = e.currentTarget.getAttribute('data-choice'); // don't use dataset for jsdom compatibility
        after_response_button(choice);
      });
    }

    // process keyboard response
    jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response_key,
      valid_responses: [trial.keypress],
      persist: false,
      allow_held_key: false
    });

    // store response
    var response = {
      rt: null,
      button: null,
      key: null
    };

    // function to handle button responses by the subject
    function after_response_button(choice) {

      // record data
      var end_time = performance.now();
      var rt = end_time - start_time;
      response.button = choice;
      response.key = null;
      response.rt = rt;

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-comp-stimulus').className += ' responded';

      // disable all the buttons after a response
      var btns = document.querySelectorAll('.jspsych-comp-button button');
      for(var i=0; i<btns.length; i++){
        //btns[i].removeEventListener('click');
        btns[i].setAttribute('disabled', 'disabled');
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // function to handle keyboard responses by the subject
    function after_response_key(choice) {

    // record data
    var end_time = performance.now();
    var rt = end_time - start_time;
    response.button = null;
    response.key = choice.key;
    response.rt = rt;

    // disable all the buttons after a response
    var btns = document.querySelectorAll('.jspsych-comp-button button');
    for(var i=0; i<btns.length; i++){
      //btns[i].removeEventListener('click');
      btns[i].setAttribute('disabled', 'disabled');
    }

    if (trial.response_ends_trial) {
      end_trial();
    }
  };


    // function to end trial when it is time
    function end_trial() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "button_pressed": response.button,
        "key_pressed": response.key
      };

      // clear the display
      display_element.innerHTML = '';

      // set response.button back to null for the end of the trial (added by Fred on 2020-12-19)
      response.button = null;

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // start the response listener
    if (trial.keypress != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response_key,
        valid_responses: trial.keypress,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
        });
      }

    // hide image if timing is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-comp-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if time limit is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();