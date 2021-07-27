# jspsych-comprehension-question

This is a custom jsPsych plugin I wrote to create a new comprehension question format for my self-paced reading experiments.

<img src="img_demo.gif" alt="Demo" width="600"/>

The code is adapted from Shane Martin's [jspsych-survey-multi-choice](https://www.jspsych.org/plugins/jspsych-survey-multi-choice/) plugin.

## Parameters

- __prompt:__ The text displayed at the top of the screen during the trial
- __text_left:__ Text to display to the left of the input fields
- __text_center:__ Text to display between the two input fields
- __text_right:__ Text to display to the right of the input fields
- __options_left:__ Response options for the first input field
- __options_right:__ Response options for the second input field
- __correct_left:__ Correct answer for the first input field
- __correct_right:__ Correct answer for second input field
- __button_label:__ Label for the button to continue to the next trial