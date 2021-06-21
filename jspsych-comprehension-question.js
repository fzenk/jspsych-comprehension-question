/**
 * jspsych-comprehension-question
 * written by Fred Zenker using Shane Martin's 
 * 'jspsych-survey-multi-choice' plugin as a model
 */

jsPsych.plugins['comprehension-question'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'comprehension-question',
    parameters: {
      prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Prompt',
          default: undefined,
          description: 'Prompt text'
      },
      word: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Word',
        default: undefined,
        description: 'The word or words to display between the two input menus'
      },
      menu1: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Input Menu 1',
          array: true,
          default: undefined,
          description: 'Options for the first radio input menu'
      },
      menu2: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Input Menu 2',
        array: true,
        default: undefined,
        description: 'Options for the second radio input menu'
      },
      correct1: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Correct Answer 1',
        default: null,
        description: 'Correct answer from first radio input menu'
      },
      correct2: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Correct Answer 2',
        default: null,
        description: 'Correct answer from second radio input menu'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      },
    }
  }
  plugin.trial = function(display_element, trial) {
    var plugin_id_name = "jspsych-comprehension-question";

    var html = "";

    // inject CSS for trial
    html += '<style id="jspsych-comprehension-question-css">';
    html += 
      ".jspsych-comprehension-question-prompt { margin-top: 2em; margin-bottom: 2em; text-align: left; }"+
      "table {border-collapse:collapse; margin-bottom: 2em;}"+
      "td {padding: 0px 5px 0px 5px;}"+
      ".jspsych-comprehension-question-option { line-height: 2; }"+
      "label.jspsych-comprehension-question-text input[type='radio'] {margin-right: .8em;}";
    html += '</style>';

    // show prompt
    if(trial.prompt !== null){
      html += '<div id="jspsych-comprehension-question-prompt" class="jspsych-comprehension-question-prompt" style="text-align: center;">'+trial.prompt+'</div>';
    }

    // form id
    html += '<form id="jspsych-comprehension-question" autocomplete="off">';

    // create table
    html += '<table><tr>';

    // add blank cell to left of trial.word
    html += '<td style="border: 1.5px solid black;"></td>';

    // add word or words to display between two input menus
    html += '<td style="text-align: center;"> '+trial.word+' </td>';

    // add blank cell to right of trial.word
    html += '<td style="border: 1.5px solid black;"></td></tr>';
    
    // create first input menu
    html += '<tr><td style="text-align: left; background-color:#f7f3f2;  box-shadow:2px 2px 5px #999;">'+
    '<div id="menu1container">';
    for (var j = 0; j < trial.menu1.length; j++) {
      // add labels
      var menu1_option_id_name = "jspsych-comprehension-question-option-menu1-"+j;
      var menu1_input_name = 'jspsych-comprehension-question-response-menu1';
      var menu1_input_id = 'jspsych-comprehension-question-response-menu1-'+j;
      // add radio button container
      html += '<div id="'+menu1_option_id_name+'" class="jspsych-comprehension-question-option">';
      html += '<label class="jspsych-comprehension-question-text" for="'+menu1_input_id+'">';
      html += '<input type="radio" name="'+menu1_input_name+'" id="'+menu1_input_id+'" value="'+trial.menu1[j]+'" required></input>';
      html += trial.menu1[j]+'</label>';
      html += '</div>';
    };
    html += '</div></td>';

    // add blank cell between the two menus
    html += '<td></td>';

    // create second radio input menu
    html += 
    '<td style="text-align: left; background-color:#f7f3f2; box-shadow:2px 2px 5px #999;">'+
    '<div id="menu2container">';
    for (var j = 0; j < trial.menu2.length; j++) {
      // add labels
      var menu2_option_id_name = "jspsych-comprehension-question-option-menu2-"+j;
      var menu2_input_name = 'jspsych-comprehension-question-response-menu2';
      var menu2_input_id = 'jspsych-comprehension-question-response-menu2-'+j;
      // add radio button container
      html += '<div id="'+menu2_option_id_name+'" class="jspsych-comprehension-question-option">';
      html += '<label class="jspsych-comprehension-question-text" for="'+menu2_input_id+'">';
      html += '<input type="radio" name="'+menu2_input_name+'" id="'+menu2_input_id+'" value="'+trial.menu2[j]+'" required></input>';
      html += trial.menu2[j]+'</label>';
      html += '</div>';
    };
    html += '</div>';

    // close table
    html += '</td></tr></table>';
    
    // add submit button
    html += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + '></input>';
    html += '</form>';

    // render
    display_element.innerHTML = html;

    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      // measure response time
      var endTime = performance.now();
      var response_time = endTime - startTime;

    // create object to hold responses
    var container1 = display_element.querySelector('#menu1container');
    if(container1.querySelector("input[type=radio]:checked") !== null){
      val1 = container1.querySelector("input[type=radio]:checked").value;
    };
    var container2 = display_element.querySelector('#menu2container');
    var val2 = "";
    if(container2.querySelector("input[type=radio]:checked") !== null){
      val2 = container2.querySelector("input[type=radio]:checked").value;
    };

    // check accuracy
    if (val1 == trial.correct1 & val2 == trial.correct2) {
      acc = true
    } else {
      acc = false
    };

      // save data
      var trial_data = {
        rt: response_time,
        response1: val1,
        response2: val2,
        accuracy: acc
      };
      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = performance.now();
  };

  return plugin;
})();
