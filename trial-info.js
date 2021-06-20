

/* =================================================================
self-paced reading and acceptability judgment tasks
================================================================= */

// critical items

var r01 = {
    type: 'critical', 
    item: 'item01', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was arrested?', 
    choices: jsPsych.randomization.shuffle(['John', 'Tina', 'Mary', 'Bill']), 
    correct: 'John'
};
var r01c1 = {
    eng: 'Tina thinks that John is the man who Mary arrested', 
    kor: '수아가 생각하기에 영희가 지난달에 체포한 남자는 철수이다.', 
    cond: 'cond1', 
    ...r01
};
var r01c2 = {
    eng: 'John is the man who Tina thinks that Mary arrested', 
    kor: '영희가 지난달에 체포했다고 수아가 생각하는 남자는 철수이다.', 
    cond: 'cond2', 
    ...r01
};
var r01c3 = {
    eng: 'John is the man who Tina wonders why Mary arrested', 
    kor: '영희가 지난달에 왜 체포했는지 수아가 궁금해하는 남자는 철수이다.', 
    cond: 'cond3', 
    ...r01
};
var r01c4 = {
    eng: 'Tina thinks that John is the man who Mary arrested him', 
    kor: '수아가 생각하기에 영희가 지난달에 그를 체포한 남자는 철수이다.', 
    cond: 'cond4', 
    ...r01
};
var r01c5 = {
    eng: 'John is the man who Tina thinks that Mary arrested him', 
    kor: '영희가 지난달에 그를 체포했다고 수아가 생각하는 남자는 철수이다.', 
    cond: 'cond5', 
    ...r01
};
var r01c6 = {
    eng: 'John is the man who Tina wonders why Mary arrested him', 
    kor: '영희가 지난달에 왜 그를 체포했는지 수아가 궁금해하는 남자는 철수이다.', 
    cond: 'cond6', 
    ...r01
};

var r02 = {
    type: 'critical', 
    item: 'item02', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was assisted?', 
    choices: jsPsych.randomization.shuffle(['John', 'Emma', 'Lisa', 'Bill']), 
    correct: 'John'
};
var r02c1 = {
    eng: 'Emma thinks that John is the man who Lisa assisted', 
    kor: '하은이가 생각하기에 민지가 지난주에 도운 남자는 철수이다.', 
    cond: 'cond1', 
    ...r02
};
var r02c2 = {
    eng: 'John is the man who Emma thinks that Lisa assisted', 
    kor: '민지가 지난주에 도왔다고 하은이가 생각하는 남자는 철수이다.', 
    cond: 'cond2', 
    ...r02
};
var r02c3 = {
    eng: 'John is the man who Emma wonders why Lisa assisted', 
    kor: '민지가 지난주에 왜 도왔는지 하은이가 궁금해하는 남자는 철수이다.', 
    cond: 'cond3', 
    ...r02
};
var r02c4 = {
    eng: 'Emma thinks that John is the man who Lisa assisted him', 
    kor: '하은이가 생각하기에 민지가 지난주에 그를 도운 남자는 철수이다.', 
    cond: 'cond4', 
    ...r02
};
var r02c5 = {
    eng: 'John is the man who Emma thinks that Lisa assisted him', 
    kor: '민지가 지난주에 그를 도왔다고 하은이가 생각하는 남자는 철수이다.', 
    cond: 'cond5', 
    ...r02
};
var r02c6 = {
    eng: 'John is the man who Emma wonders why Lisa assisted him', 
    kor: '민지가 지난주에 왜 그를 도왔는지 하은이가 궁금해하는 남자는 철수이다.', 
    cond: 'cond6', 
    ...r02
};

var r03 = {
    type: 'critical', 
    item: 'item03', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was criticized?', 
    choices: jsPsych.randomization.shuffle(['John', 'Mary', 'Tina', 'Bill']), 
    correct: 'John'
};
var r03c1 = {
    eng: 'Mary thinks that John is the man who Tina criticized', 
    kor: '영희가 생각하기에 수아가 어젯밤에 비판한 남자는 철수이다.', 
    cond: 'cond1', 
    ...r03
};
var r03c2 = {
    eng: 'John is the man who Mary thinks that Tina criticized', 
    kor: '수아가 어젯밤에 비판했다고 영희가 생각하는 남자는 철수이다.', 
    cond: 'cond2', 
    ...r03
};
var r03c3 = {
    eng: 'John is the man who Mary wonders why Tina criticized', 
    kor: '수아가 어젯밤에 왜 비판했는지 영희가 궁금해하는 남자는 철수이다.', 
    cond: 'cond3', 
    ...r03
};
var r03c4 = {
    eng: 'Mary thinks that John is the man who Tina criticized him', 
    kor: '영희가 생각하기에 수아가 어젯밤에 그를 비판한 남자는 철수이다.', 
    cond: 'cond4', 
    ...r03
};
var r03c5 = {
    eng: 'John is the man who Mary thinks that Tina criticized him', 
    kor: '수아가 어젯밤에 그를 비판했다고 영희가 생각하는 남자는 철수이다.', 
    cond: 'cond5', 
    ...r03
};
var r03c6 = {
    eng: 'John is the man who Mary wonders why Tina criticized him', 
    kor: '수아가 어젯밤에 왜 그를 비판했는지 영희가 궁금해하는 남자는 철수이다.', 
    cond: 'cond6', 
    ...r03
};

var r04 = {
    type: 'critical', 
    item: 'item04', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was forgiven?', 
    choices: jsPsych.randomization.shuffle(['John', 'Lisa', 'Emma', 'Bill']), 
    correct: 'John'
};
var r04c1 = {
    eng: 'Lisa thinks that John is the man who Emma forgave', 
    kor: '민지가 생각하기에 하은이가 지난달에 용서한 남자는 철수이다.', 
    cond: 'cond1', 
    ...r04
};
var r04c2 = {
    eng: 'John is the man who Lisa thinks that Emma forgave', 
    kor: '하은이가 지난달에 용서했다고 민지가 생각하는 남자는 철수이다.', 
    cond: 'cond2', 
    ...r04
};
var r04c3 = {
    eng: 'John is the man who Lisa wonders why Emma forgave', 
    kor: '하은이가 지난달에 왜 용서했는지 민지가 궁금해하는 남자는 철수이다.', 
    cond: 'cond3', 
    ...r04
};
var r04c4 = {
    eng: 'Lisa thinks that John is the man who Emma forgave him', 
    kor: '민지가 생각하기에 하은이가 지난달에 그를 용서한 남자는 철수이다.', 
    cond: 'cond4', 
    ...r04
};
var r04c5 = {
    eng: 'John is the man who Lisa thinks that Emma forgave him', 
    kor: '하은이가 지난달에 그를 용서했다고 민지가 생각하는 남자는 철수이다.', 
    cond: 'cond5', 
    ...r04
};
var r04c6 = {
    eng: 'John is the man who Lisa wonders why Emma forgave him', 
    kor: '하은이가 지난달에 왜 그를 용서했는지 민지가 궁금해하는 남자는 철수이다.', 
    cond: 'cond6', 
    ...r04
};

var r05 = {
    type: 'critical', 
    item: 'item05', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was greeted?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Lisa', 'Tina', 'John']), 
    correct: 'Bill'
};
var r05c1 = {
    eng: 'Lisa thinks that Bill is the man who Tina greeted', 
    kor: '민지가 생각하기에 수아가 지난주에 인사한 남자는 지훈이다.', 
    cond: 'cond1', 
    ...r05
};
var r05c2 = {
    eng: 'Bill is the man who Lisa thinks that Tina greeted', 
    kor: '수아가 지난주에 인사했다고 민지가 생각하는 남자는 지훈이다.', 
    cond: 'cond2', 
    ...r05
};
var r05c3 = {
    eng: 'Bill is the man who Lisa wonders why Tina greeted', 
    kor: '수아가 지난주에 왜 인사했는지 민지가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond3', 
    ...r05
};
var r05c4 = {
    eng: 'Lisa thinks that Bill is the man who Tina greeted him', 
    kor: '민지가 생각하기에 수아가 지난주에 그를 인사한 남자는 지훈이다.', 
    cond: 'cond4', 
    ...r05
};
var r05c5 = {
    eng: 'Bill is the man who Lisa thinks that Tina greeted him', 
    kor: '수아가 지난주에 그를 인사했다고 민지가 생각하는 남자는 지훈이다.', 
    cond: 'cond5', 
    ...r05
};
var r05c6 = {
    eng: 'Bill is the man who Lisa wonders why Tina greeted him', 
    kor: '수아가 지난주에 왜 그를 인사했는지 민지가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond6', 
    ...r05
};

var r06 = {
    type: 'critical', 
    item: 'item06', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was praised?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Mary', 'Emma', 'John']), 
    correct: 'Bill'
};
var r06c1 = {
    eng: 'Mary thinks that Bill is the man who Emma praised', 
    kor: '영희가 생각하기에 하은이가 어젯밤에 칭찬한 남자는 지훈이다.', 
    cond: 'cond1', 
    ...r06
};
var r06c2 = {
    eng: 'Bill is the man who Mary thinks that Emma praised', 
    kor: '하은이가 어젯밤에 칭찬했다고 영희가 생각하는 남자는 지훈이다.', 
    cond: 'cond2', 
    ...r06
};
var r06c3 = {
    eng: 'Bill is the man who Mary wonders why Emma praised', 
    kor: '하은이가 어젯밤에 왜 칭찬했는지 영희가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond3', 
    ...r06
};
var r06c4 = {
    eng: 'Mary thinks that Bill is the man who Emma praised him', 
    kor: '영희가 생각하기에 하은이가 어젯밤에 그를 칭찬한 남자는 지훈이다.', 
    cond: 'cond4', 
    ...r06
};
var r06c5 = {
    eng: 'Bill is the man who Mary thinks that Emma praised him', 
    kor: '하은이가 어젯밤에 그를 칭찬했다고 영희가 생각하는 남자는 지훈이다.', 
    cond: 'cond5', 
    ...r06
};
var r06c6 = {
    eng: 'Bill is the man who Mary wonders why Emma praised him', 
    kor: '하은이가 어젯밤에 왜 그를 칭찬했는지 영희가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond6', 
    ...r06
};

var r07 = {
    type: 'critical', 
    item: 'item07', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was questioned?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Emma', 'Mary', 'John']), 
    correct: 'Bill'
};
var r07c1 = {
    eng: 'Emma thinks that Bill is the man who Mary questioned', 
    kor: '하은이가 생각하기에 영희가 지난주에 심문한 남자는 지훈이다.', 
    cond: 'cond1', 
    ...r07
};
var r07c2 = {
    eng: 'Bill is the man who Emma thinks that Mary questioned', 
    kor: '영희가 지난주에 심문했다고 하은이가 생각하는 남자는 지훈이다.', 
    cond: 'cond2', 
    ...r07
};
var r07c3 = {
    eng: 'Bill is the man who Emma wonders why Mary questioned', 
    kor: '영희가 지난주에 왜 심문했는지 하은이가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond3', 
    ...r07
};
var r07c4 = {
    eng: 'Emma thinks that Bill is the man who Mary questioned him', 
    kor: '하은이가 생각하기에 영희가 지난주에 그를 심문한 남자는 지훈이다.', 
    cond: 'cond4', 
    ...r07
};
var r07c5 = {
    eng: 'Bill is the man who Emma thinks that Mary questioned him', 
    kor: '영희가 지난주에 그를 심문했다고 하은이가 생각하는 남자는 지훈이다.', 
    cond: 'cond5', 
    ...r07
};
var r07c6 = {
    eng: 'Bill is the man who Emma wonders why Mary questioned him', 
    kor: '영희가 지난주에 왜 그를 심문했는지 하은이가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond6', 
    ...r07
};

var r08 = {
    type: 'critical', 
    item: 'item08', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was released?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Tina', 'Lisa', 'John']), 
    correct: 'Bill'
};
var r08c1 = {
    eng: 'Tina thinks that Bill is the man who Lisa released', 
    kor: '수아가 생각하기에 민지가 지난달에 석방시킨 남자는 지훈이다.', 
    cond: 'cond1', 
    ...r08
};
var r08c2 = {
    eng: 'Bill is the man who Tina thinks that Lisa released', 
    kor: '민지가 지난달에 석방시켰다고 수아가 생각하는 남자는 지훈이다.', 
    cond: 'cond2', 
    ...r08
};
var r08c3 = {
    eng: 'Bill is the man who Tina wonders why Lisa released', 
    kor: '민지가 지난달에 왜 석방시켰는지 수아가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond3', 
    ...r08
};
var r08c4 = {
    eng: 'Tina thinks that Bill is the man who Lisa released him', 
    kor: '수아가 생각하기에 민지가 지난달에 그를 석방시킨 남자는 지훈이다.', 
    cond: 'cond4', 
    ...r08
};
var r08c5 = {
    eng: 'Bill is the man who Tina thinks that Lisa released him', 
    kor: '민지가 지난달에 그를 석방시켰다고 수아가 생각하는 남자는 지훈이다.', 
    cond: 'cond5', 
    ...r08
};
var r08c6 = {
    eng: 'Bill is the man who Tina wonders why Lisa released him', 
    kor: '민지가 지난달에 왜 그를 석방시켰는지 수아가 궁금해하는 남자는 지훈이다.', 
    cond: 'cond6', 
    ...r08
};

var r09 = {
    type: 'critical', 
    item: 'item09', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was adopted?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Tina', 'Lisa', 'Adam']), 
    correct: 'Paul'
};
var r09c1 = {
    eng: 'Tina thinks that Paul is the boy who Lisa adopted', 
    kor: '수아가 생각하기에 민지가 작년에 입양한 남자아이는 도윤이다.', 
    cond: 'cond1', 
    ...r09
};
var r09c2 = {
    eng: 'Paul is the boy who Tina thinks that Lisa adopted', 
    kor: '민지가 작년에 입양했다고 수아가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond2', 
    ...r09
};
var r09c3 = {
    eng: 'Paul is the boy who Tina wonders why Lisa adopted', 
    kor: '민지가 작년에 왜 입양했는지 수아가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond3', 
    ...r09
};
var r09c4 = {
    eng: 'Tina thinks that Paul is the boy who Lisa adopted him', 
    kor: '수아가 생각하기에 민지가 작년에 그를 입양한 남자아이는 도윤이다.', 
    cond: 'cond4', 
    ...r09
};
var r09c5 = {
    eng: 'Paul is the boy who Tina thinks that Lisa adopted him', 
    kor: '민지가 작년에 그를 입양했다고 수아가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond5', 
    ...r09
};
var r09c6 = {
    eng: 'Paul is the boy who Tina wonders why Lisa adopted him', 
    kor: '민지가 작년에 왜 그를 입양했는지 수아가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond6', 
    ...r09
};

var r10 = {
    type: 'critical', 
    item: 'item10', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was ignored?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Mary', 'Tina', 'Adam']), 
    correct: 'Paul'
};
var r10c1 = {
    eng: 'Mary thinks that Paul is the boy who Tina ignored', 
    kor: '영희가 생각하기에 수아가 지난달에 무시한 남자아이는 도윤이다.', 
    cond: 'cond1', 
    ...r10
};
var r10c2 = {
    eng: 'Paul is the boy who Mary thinks that Tina ignored', 
    kor: '수아가 지난달에 무시했다고 영희가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond2', 
    ...r10
};
var r10c3 = {
    eng: 'Paul is the boy who Mary wonders why Tina ignored', 
    kor: '수아가 지난달에 왜 무시했는지 영희가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond3', 
    ...r10
};
var r10c4 = {
    eng: 'Mary thinks that Paul is the boy who Tina ignored him', 
    kor: '영희가 생각하기에 수아가 지난달에 그를 무시한 남자아이는 도윤이다.', 
    cond: 'cond4', 
    ...r10
};
var r10c5 = {
    eng: 'Paul is the boy who Mary thinks that Tina ignored him', 
    kor: '수아가 지난달에 그를 무시했다고 영희가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond5', 
    ...r10
};
var r10c6 = {
    eng: 'Paul is the boy who Mary wonders why Tina ignored him', 
    kor: '수아가 지난달에 왜 그를 무시했는지 영희가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond6', 
    ...r10
};

var r11 = {
    type: 'critical', 
    item: 'item11', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was punched?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Lisa', 'Emma', 'Adam']), 
    correct: 'Paul'
};
var r11c1 = {
    eng: 'Lisa thinks that Paul is the boy who Emma punched', 
    kor: '민지가 생각하기에 하은이가 지난달에 때린 남자아이는 도윤이다.', 
    cond: 'cond1', 
    ...r11
};
var r11c2 = {
    eng: 'Paul is the boy who Lisa thinks that Emma punched', 
    kor: '하은이가 지난달에 때렸다고 민지가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond2', 
    ...r11
};
var r11c3 = {
    eng: 'Paul is the boy who Lisa wonders why Emma punched', 
    kor: '하은이가 지난달에 왜 때렸는지 민지가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond3', 
    ...r11
};
var r11c4 = {
    eng: 'Lisa thinks that Paul is the boy who Emma punched him', 
    kor: '민지가 생각하기에 하은이가 지난달에 그를 때린 남자아이는 도윤이다.', 
    cond: 'cond4', 
    ...r11
};
var r11c5 = {
    eng: 'Paul is the boy who Lisa thinks that Emma punched him', 
    kor: '하은이가 지난달에 그를 때렸다고 민지가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond5', 
    ...r11
};
var r11c6 = {
    eng: 'Paul is the boy who Lisa wonders why Emma punched him', 
    kor: '하은이가 지난달에 왜 그를 때렸는지 민지가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond6', 
    ...r11
};

var r12 = {
    type: 'critical', 
    item: 'item12', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was punished?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Emma', 'Mary', 'Adam']), 
    correct: 'Paul'
};
var r12c1 = {
    eng: 'Emma thinks that Paul is the boy who Mary punished', 
    kor: '하은이가 생각하기에 영희가 지난주에 처벌한 남자아이는 도윤이다.', 
    cond: 'cond1', 
    ...r12
};
var r12c2 = {
    eng: 'Paul is the boy who Emma thinks that Mary punished', 
    kor: '영희가 지난주에 처벌했다고 하은이가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond2', 
    ...r12
};
var r12c3 = {
    eng: 'Paul is the boy who Emma wonders why Mary punished', 
    kor: '영희가 지난주에 왜 처벌했는지 하은이가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond3', 
    ...r12
};
var r12c4 = {
    eng: 'Emma thinks that Paul is the boy who Mary punished him', 
    kor: '하은이가 생각하기에 영희가 지난주에 그를 처벌한 남자아이는 도윤이다.', 
    cond: 'cond4', 
    ...r12
};
var r12c5 = {
    eng: 'Paul is the boy who Emma thinks that Mary punished him', 
    kor: '영희가 지난주에 그를 처벌했다고 하은이가 생각하는 남자아이는 도윤이다.', 
    cond: 'cond5', 
    ...r12
};
var r12c6 = {
    eng: 'Paul is the boy who Emma wonders why Mary punished him', 
    kor: '영희가 지난주에 왜 그를 처벌했는지 하은이가 궁금해하는 남자아이는 도윤이다.', 
    cond: 'cond6', 
    ...r12
};

var r13 = {
    type: 'critical', 
    item: 'item13', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was rescued?', 
    choices: jsPsych.randomization.shuffle(['Adam', 'Emma', 'Lisa', 'Paul']), 
    correct: 'Adam'
};
var r13c1 = {
    eng: 'Emma thinks that Adam is the boy who Lisa rescued', 
    kor: '하은이가 생각하기에 민지가 어젯밤에 구해준 남자아이는 건우이다.', 
    cond: 'cond1', 
    ...r13
};
var r13c2 = {
    eng: 'Adam is the boy who Emma thinks that Lisa rescued', 
    kor: '민지가 어젯밤에 구해줬다고 하은이가 생각하는 남자아이는 건우이다.', 
    cond: 'cond2', 
    ...r13
};
var r13c3 = {
    eng: 'Adam is the boy who Emma wonders why Lisa rescued', 
    kor: '민지가 어젯밤에 왜 구해줬는지 하은이가 궁금해하는 남자아이는 건우이다.', 
    cond: 'cond3', 
    ...r13
};
var r13c4 = {
    eng: 'Emma thinks that Adam is the boy who Lisa rescued him', 
    kor: '하은이가 생각하기에 민지가 어젯밤에 그를 구해준 남자아이는 건우이다.', 
    cond: 'cond4', 
    ...r13
};
var r13c5 = {
    eng: 'Adam is the boy who Emma thinks that Lisa rescued him', 
    kor: '민지가 어젯밤에 그를 구해줬다고 하은이가 생각하는 남자아이는 건우이다.', 
    cond: 'cond5', 
    ...r13
};
var r13c6 = {
    eng: 'Adam is the boy who Emma wonders why Lisa rescued him', 
    kor: '민지가 어젯밤에 왜 그를 구해줬는지 하은이가 궁금해하는 남자아이는 건우이다.', 
    cond: 'cond6', 
    ...r13
};

var r14 = {
    type: 'critical', 
    item: 'item14', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was scolded?', 
    choices: jsPsych.randomization.shuffle(['Adam', 'Tina', 'Mary', 'Paul']), 
    correct: 'Adam'
};
var r14c1 = {
    eng: 'Tina thinks that Adam is the boy who Mary scolded', 
    kor: '수아가 생각하기에 영희가 지난주에 꾸짖은 남자아이는 건우이다.', 
    cond: 'cond1', 
    ...r14
};
var r14c2 = {
    eng: 'Adam is the boy who Tina thinks that Mary scolded', 
    kor: '영희가 지난주에 꾸짖었다고 수아가 생각하는 남자아이는 건우이다.', 
    cond: 'cond2', 
    ...r14
};
var r14c3 = {
    eng: 'Adam is the boy who Tina wonders why Mary scolded', 
    kor: '영희가 지난주에 왜 꾸짖었는지 수아가 궁금해하는 남자아이는 건우이다.', 
    cond: 'cond3', 
    ...r14
};
var r14c4 = {
    eng: 'Tina thinks that Adam is the boy who Mary scolded him', 
    kor: '수아가 생각하기에 영희가 지난주에 그를 꾸짖은 남자아이는 건우이다.', 
    cond: 'cond4', 
    ...r14
};
var r14c5 = {
    eng: 'Adam is the boy who Tina thinks that Mary scolded him', 
    kor: '영희가 지난주에 그를 꾸짖었다고 수아가 생각하는 남자아이는 건우이다.', 
    cond: 'cond5', 
    ...r14
};
var r14c6 = {
    eng: 'Adam is the boy who Tina wonders why Mary scolded him', 
    kor: '영희가 지난주에 왜 그를 꾸짖었는지 수아가 궁금해하는 남자아이는 건우이다.', 
    cond: 'cond6', 
    ...r14
};

var r15 = {
    type: 'critical', 
    item: 'item15', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was shoved?', 
    choices: jsPsych.randomization.shuffle(['Adam', 'Mary', 'Tina', 'Paul']), 
    correct: 'Adam'
};
var r15c1 = {
    eng: 'Mary thinks that Adam is the boy who Tina shoved', 
    kor: '영희가 생각하기에 수아가 지난달에 밀친 남자아이는 건우이다.', 
    cond: 'cond1', 
    ...r15
};
var r15c2 = {
    eng: 'Adam is the boy who Mary thinks that Tina shoved', 
    kor: '수아가 지난달에 밀쳤다고 영희가 생각하는 남자아이는 건우이다.', 
    cond: 'cond2', 
    ...r15
};
var r15c3 = {
    eng: 'Adam is the boy who Mary wonders why Tina shoved', 
    kor: '수아가 지난달에 왜 밀쳤는지 영희가 궁금해하는 남자아이는 건우이다.', 
    cond: 'cond3', 
    ...r15
};
var r15c4 = {
    eng: 'Mary thinks that Adam is the boy who Tina shoved him', 
    kor: '영희가 생각하기에 수아가 지난달에 그를 밀친 남자아이는 건우이다.', 
    cond: 'cond4', 
    ...r15
};
var r15c5 = {
    eng: 'Adam is the boy who Mary thinks that Tina shoved him', 
    kor: '수아가 지난달에 그를 밀쳤다고 영희가 생각하는 남자아이는 건우이다.', 
    cond: 'cond5', 
    ...r15
};
var r15c6 = {
    eng: 'Adam is the boy who Mary wonders why Tina shoved him', 
    kor: '수아가 지난달에 왜 그를 밀쳤는지 영희가 궁금해하는 남자아이는 건우이다.', 
    cond: 'cond6', 
    ...r15
};

var r16 = {
    type: 'critical', 
    item: 'item16', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was avoided?', 
    choices: jsPsych.randomization.shuffle(['Mary', 'John', 'Paul', 'Lisa']), 
    correct: 'Mary'
};
var r16c1 = {
    eng: 'John thinks that Mary is the woman who Paul avoided', 
    kor: '철수가 생각하기에 도윤이가 작년에 피해다닌 여자는 영희이다.', 
    cond: 'cond1', 
    ...r16
};
var r16c2 = {
    eng: 'Mary is the woman who John thinks that Paul avoided', 
    kor: '도윤이가 작년에 피해다녔다고 철수가 생각하는 여자는 영희이다.', 
    cond: 'cond2', 
    ...r16
};
var r16c3 = {
    eng: 'Mary is the woman who John wonders why Paul avoided', 
    kor: '도윤이가 작년에 왜 피해다녔는지 철수가 궁금해하는 여자는 영희이다.', 
    cond: 'cond3', 
    ...r16
};
var r16c4 = {
    eng: 'John thinks that Mary is the woman who Paul avoided her', 
    kor: '철수가 생각하기에 도윤이가 작년에 그녀를 피해다닌 여자는 영희이다.', 
    cond: 'cond4', 
    ...r16
};
var r16c5 = {
    eng: 'Mary is the woman who John thinks that Paul avoided her', 
    kor: '도윤이가 작년에 그녀를 피해다녔다고 철수가 생각하는 여자는 영희이다.', 
    cond: 'cond5', 
    ...r16
};
var r16c6 = {
    eng: 'Mary is the woman who John wonders why Paul avoided her', 
    kor: '도윤이가 작년에 왜 그녀를 피해다녔는지 철수가 궁금해하는 여자는 영희이다.', 
    cond: 'cond6', 
    ...r16
};

var r17 = {
    type: 'critical', 
    item: 'item17', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was defended?', 
    choices: jsPsych.randomization.shuffle(['Mary', 'Paul', 'John', 'Lisa']), 
    correct: 'Mary'
};
var r17c1 = {
    eng: 'Paul thinks that Mary is the woman who John defended', 
    kor: '도윤이가 생각하기에 철수가 작년에 변호한 여자는 영희이다.', 
    cond: 'cond1', 
    ...r17
};
var r17c2 = {
    eng: 'Mary is the woman who Paul thinks that John defended', 
    kor: '철수가 작년에 변호했다고 도윤이가 생각하는 여자는 영희이다.', 
    cond: 'cond2', 
    ...r17
};
var r17c3 = {
    eng: 'Mary is the woman who Paul wonders why John defended', 
    kor: '철수가 작년에 왜 변호했는지 도윤이가 궁금해하는 여자는 영희이다.', 
    cond: 'cond3', 
    ...r17
};
var r17c4 = {
    eng: 'Paul thinks that Mary is the woman who John defended her', 
    kor: '도윤이가 생각하기에 철수가 작년에 그녀를 변호한 여자는 영희이다.', 
    cond: 'cond4', 
    ...r17
};
var r17c5 = {
    eng: 'Mary is the woman who Paul thinks that John defended her', 
    kor: '철수가 작년에 그녀를 변호했다고 도윤이가 생각하는 여자는 영희이다.', 
    cond: 'cond5', 
    ...r17
};
var r17c6 = {
    eng: 'Mary is the woman who Paul wonders why John defended her', 
    kor: '철수가 작년에 왜 그녀를 변호했는지 도윤이가 궁금해하는 여자는 영희이다.', 
    cond: 'cond6', 
    ...r17
};

var r18 = {
    type: 'critical', 
    item: 'item18', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was disturbed?', 
    choices: jsPsych.randomization.shuffle(['Mary', 'Bill', 'Adam', 'Lisa']), 
    correct: 'Mary'
};
var r18c1 = {
    eng: 'Bill thinks that Mary is the woman who Adam disturbed', 
    kor: '지훈이가 생각하기에 건우가 어젯밤에 방해한 여자는 영희이다.', 
    cond: 'cond1', 
    ...r18
};
var r18c2 = {
    eng: 'Mary is the woman who Bill thinks that Adam disturbed', 
    kor: '건우가 어젯밤에 방해했다고 지훈이가 생각하는 여자는 영희이다.', 
    cond: 'cond2', 
    ...r18
};
var r18c3 = {
    eng: 'Mary is the woman who Bill wonders why Adam disturbed', 
    kor: '건우가 어젯밤에 왜 방해했는지 지훈이가 궁금해하는 여자는 영희이다.', 
    cond: 'cond3', 
    ...r18
};
var r18c4 = {
    eng: 'Bill thinks that Mary is the woman who Adam disturbed her', 
    kor: '지훈이가 생각하기에 건우가 어젯밤에 그녀를 방해한 여자는 영희이다.', 
    cond: 'cond4', 
    ...r18
};
var r18c5 = {
    eng: 'Mary is the woman who Bill thinks that Adam disturbed her', 
    kor: '건우가 어젯밤에 그녀를 방해했다고 지훈이가 생각하는 여자는 영희이다.', 
    cond: 'cond5', 
    ...r18
};
var r18c6 = {
    eng: 'Mary is the woman who Bill wonders why Adam disturbed her', 
    kor: '건우가 어젯밤에 왜 그녀를 방해했는지 지훈이가 궁금해하는 여자는 영희이다.', 
    cond: 'cond6', 
    ...r18
};

var r19 = {
    type: 'critical', 
    item: 'item19', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was hired?', 
    choices: jsPsych.randomization.shuffle(['Mary', 'Adam', 'Bill', 'Lisa']), 
    correct: 'Mary'
};
var r19c1 = {
    eng: 'Adam thinks that Mary is the woman who Bill hired', 
    kor: '건우가 생각하기에 지훈이가 작년에 채용한 여자는 영희이다.', 
    cond: 'cond1', 
    ...r19
};
var r19c2 = {
    eng: 'Mary is the woman who Adam thinks that Bill hired', 
    kor: '지훈이가 작년에 채용했다고 건우가 생각하는 여자는 영희이다.', 
    cond: 'cond2', 
    ...r19
};
var r19c3 = {
    eng: 'Mary is the woman who Adam wonders why Bill hired', 
    kor: '지훈이가 작년에 왜 채용했는지 건우가 궁금해하는 여자는 영희이다.', 
    cond: 'cond3', 
    ...r19
};
var r19c4 = {
    eng: 'Adam thinks that Mary is the woman who Bill hired her', 
    kor: '건우가 생각하기에 지훈이가 작년에 그녀를 채용한 여자는 영희이다.', 
    cond: 'cond4', 
    ...r19
};
var r19c5 = {
    eng: 'Mary is the woman who Adam thinks that Bill hired her', 
    kor: '지훈이가 작년에 그녀를 채용했다고 건우가 생각하는 여자는 영희이다.', 
    cond: 'cond5', 
    ...r19
};
var r19c6 = {
    eng: 'Mary is the woman who Adam wonders why Bill hired her', 
    kor: '지훈이가 작년에 왜 그녀를 채용했는지 건우가 궁금해하는 여자는 영희이다.', 
    cond: 'cond6', 
    ...r19
};

var r20 = {
    type: 'critical', 
    item: 'item20', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was recognized?', 
    choices: jsPsych.randomization.shuffle(['Lisa', 'Bill', 'Paul', 'Mary']), 
    correct: 'Lisa'
};
var r20c1 = {
    eng: 'Bill thinks that Lisa is the woman who Paul recognized', 
    kor: '지훈이가 생각하기에 도윤이가 지난달에 알아본 여자는 민지이다.', 
    cond: 'cond1', 
    ...r20
};
var r20c2 = {
    eng: 'Lisa is the woman who Bill thinks that Paul recognized', 
    kor: '도윤이가 지난달에 알아봤다고 지훈이가 생각하는 여자는 민지이다.', 
    cond: 'cond2', 
    ...r20
};
var r20c3 = {
    eng: 'Lisa is the woman who Bill wonders why Paul recognized', 
    kor: '도윤이가 지난달에 왜 알아봤는지 지훈이가 궁금해하는 여자는 민지이다.', 
    cond: 'cond3', 
    ...r20
};
var r20c4 = {
    eng: 'Bill thinks that Lisa is the woman who Paul recognized her', 
    kor: '지훈이가 생각하기에 도윤이가 지난달에 그녀를 알아본 여자는 민지이다.', 
    cond: 'cond4', 
    ...r20
};
var r20c5 = {
    eng: 'Lisa is the woman who Bill thinks that Paul recognized her', 
    kor: '도윤이가 지난달에 그녀를 알아봤다고 지훈이가 생각하는 여자는 민지이다.', 
    cond: 'cond5', 
    ...r20
};
var r20c6 = {
    eng: 'Lisa is the woman who Bill wonders why Paul recognized her', 
    kor: '도윤이가 지난달에 왜 그녀를 알아봤는지 지훈이가 궁금해하는 여자는 민지이다.', 
    cond: 'cond6', 
    ...r20
};

var r21 = {
    type: 'critical', 
    item: 'item21', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was supported?', 
    choices: jsPsych.randomization.shuffle(['Lisa', 'Adam', 'John', 'Mary']), 
    correct: 'Lisa'
};
var r21c1 = {
    eng: 'Adam thinks that Lisa is the woman who John supported', 
    kor: '건우가 생각하기에 철수가 작년에 지지한 여자는 민지이다.', 
    cond: 'cond1', 
    ...r21
};
var r21c2 = {
    eng: 'Lisa is the woman who Adam thinks that John supported', 
    kor: '철수가 작년에 지지했다고 건우가 생각하는 여자는 민지이다.', 
    cond: 'cond2', 
    ...r21
};
var r21c3 = {
    eng: 'Lisa is the woman who Adam wonders why John supported', 
    kor: '철수가 작년에 왜 지지했는지 건우가 궁금해하는 여자는 민지이다.', 
    cond: 'cond3', 
    ...r21
};
var r21c4 = {
    eng: 'Adam thinks that Lisa is the woman who John supported her', 
    kor: '건우가 생각하기에 철수가 작년에 그녀를 지지한 여자는 민지이다.', 
    cond: 'cond4', 
    ...r21
};
var r21c5 = {
    eng: 'Lisa is the woman who Adam thinks that John supported her', 
    kor: '철수가 작년에 그녀를 지지했다고 건우가 생각하는 여자는 민지이다.', 
    cond: 'cond5', 
    ...r21
};
var r21c6 = {
    eng: 'Lisa is the woman who Adam wonders why John supported her', 
    kor: '철수가 작년에 왜 그녀를 지지했는지 건우가 궁금해하는 여자는 민지이다.', 
    cond: 'cond6', 
    ...r21
};

var r22 = {
    type: 'critical', 
    item: 'item22', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was threatened?', 
    choices: jsPsych.randomization.shuffle(['Lisa', 'John', 'Adam', 'Mary']), 
    correct: 'Lisa'
};
var r22c1 = {
    eng: 'John thinks that Lisa is the woman who Adam threatened', 
    kor: '철수가 생각하기에 건우가 어젯밤에 위협한 여자는 민지이다.', 
    cond: 'cond1', 
    ...r22
};
var r22c2 = {
    eng: 'Lisa is the woman who John thinks that Adam threatened', 
    kor: '건우가 어젯밤에 위협했다고 철수가 생각하는 여자는 민지이다.', 
    cond: 'cond2', 
    ...r22
};
var r22c3 = {
    eng: 'Lisa is the woman who John wonders why Adam threatened', 
    kor: '건우가 어젯밤에 왜 위협했는지 철수가 궁금해하는 여자는 민지이다.', 
    cond: 'cond3', 
    ...r22
};
var r22c4 = {
    eng: 'John thinks that Lisa is the woman who Adam threatened her', 
    kor: '철수가 생각하기에 건우가 어젯밤에 그녀를 위협한 여자는 민지이다.', 
    cond: 'cond4', 
    ...r22
};
var r22c5 = {
    eng: 'Lisa is the woman who John thinks that Adam threatened her', 
    kor: '건우가 어젯밤에 그녀를 위협했다고 철수가 생각하는 여자는 민지이다.', 
    cond: 'cond5', 
    ...r22
};
var r22c6 = {
    eng: 'Lisa is the woman who John wonders why Adam threatened her', 
    kor: '건우가 어젯밤에 왜 그녀를 위협했는지 철수가 궁금해하는 여자는 민지이다.', 
    cond: 'cond6', 
    ...r22
};

var r23 = {
    type: 'critical', 
    item: 'item23', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was welcomed?', 
    choices: jsPsych.randomization.shuffle(['Lisa', 'Paul', 'Bill', 'Mary']), 
    correct: 'Lisa'
};
var r23c1 = {
    eng: 'Paul thinks that Lisa is the woman who Bill welcomed', 
    kor: '도윤이가 생각하기에 지훈이가 작년에 환영한 여자는 민지이다.', 
    cond: 'cond1', 
    ...r23
};
var r23c2 = {
    eng: 'Lisa is the woman who Paul thinks that Bill welcomed', 
    kor: '지훈이가 작년에 환영했다고 도윤이가 생각하는 여자는 민지이다.', 
    cond: 'cond2', 
    ...r23
};
var r23c3 = {
    eng: 'Lisa is the woman who Paul wonders why Bill welcomed', 
    kor: '지훈이가 작년에 왜 환영했는지 도윤이가 궁금해하는 여자는 민지이다.', 
    cond: 'cond3', 
    ...r23
};
var r23c4 = {
    eng: 'Paul thinks that Lisa is the woman who Bill welcomed her', 
    kor: '도윤이가 생각하기에 지훈이가 작년에 그녀를 환영한 여자는 민지이다.', 
    cond: 'cond4', 
    ...r23
};
var r23c5 = {
    eng: 'Lisa is the woman who Paul thinks that Bill welcomed her', 
    kor: '지훈이가 작년에 그녀를 환영했다고 도윤이가 생각하는 여자는 민지이다.', 
    cond: 'cond5', 
    ...r23
};
var r23c6 = {
    eng: 'Lisa is the woman who Paul wonders why Bill welcomed her', 
    kor: '지훈이가 작년에 왜 그녀를 환영했는지 도윤이가 궁금해하는 여자는 민지이다.', 
    cond: 'cond6', 
    ...r23
};

var r24 = {
    type: 'critical', 
    item: 'item24', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was comforted?', 
    choices: jsPsych.randomization.shuffle(['Tina', 'Paul', 'John', 'Emma']), 
    correct: 'Tina'
};
var r24c1 = {
    eng: 'Paul thinks that Tina is the girl who John comforted', 
    kor: '도윤이가 생각하기에 철수가 지난주에 달래준 여자아이는 수아이다.', 
    cond: 'cond1', 
    ...r24
};
var r24c2 = {
    eng: 'Tina is the girl who Paul thinks that John comforted', 
    kor: '철수가 지난주에 달래줬다고 도윤이가 생각하는 여자아이는 수아이다.', 
    cond: 'cond2', 
    ...r24
};
var r24c3 = {
    eng: 'Tina is the girl who Paul wonders why John comforted', 
    kor: '철수가 지난주에 왜 달래줬는지 도윤이가 궁금해하는 여자아이는 수아이다.', 
    cond: 'cond3', 
    ...r24
};
var r24c4 = {
    eng: 'Paul thinks that Tina is the girl who John comforted her', 
    kor: '도윤이가 생각하기에 철수가 지난주에 그녀를 달래준 여자아이는 수아이다.', 
    cond: 'cond4', 
    ...r24
};
var r24c5 = {
    eng: 'Tina is the girl who Paul thinks that John comforted her', 
    kor: '철수가 지난주에 그녀를 달래줬다고 도윤이가 생각하는 여자아이는 수아이다.', 
    cond: 'cond5', 
    ...r24
};
var r24c6 = {
    eng: 'Tina is the girl who Paul wonders why John comforted her', 
    kor: '철수가 지난주에 왜 그녀를 달래줬는지 도윤이가 궁금해하는 여자아이는 수아이다.', 
    cond: 'cond6', 
    ...r24
};

var r25 = {
    type: 'critical', 
    item: 'item25', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was found?', 
    choices: jsPsych.randomization.shuffle(['Tina', 'Adam', 'Bill', 'Emma']), 
    correct: 'Tina'
};
var r25c1 = {
    eng: 'Adam thinks that Tina is the girl who Bill found', 
    kor: '건우가 생각하기에 지훈이가 어젯밤에 찾은 여자아이는 수아이다.', 
    cond: 'cond1', 
    ...r25
};
var r25c2 = {
    eng: 'Tina is the girl who Adam thinks that Bill found', 
    kor: '지훈이가 어젯밤에 찾았다고 건우가 생각하는 여자아이는 수아이다.', 
    cond: 'cond2', 
    ...r25
};
var r25c3 = {
    eng: 'Tina is the girl who Adam wonders why Bill found', 
    kor: '지훈이가 어젯밤에 왜 찾았는지 건우가 궁금해하는 여자아이는 수아이다.', 
    cond: 'cond3', 
    ...r25
};
var r25c4 = {
    eng: 'Adam thinks that Tina is the girl who Bill found her', 
    kor: '건우가 생각하기에 지훈이가 어젯밤에 그녀를 찾은 여자아이는 수아이다.', 
    cond: 'cond4', 
    ...r25
};
var r25c5 = {
    eng: 'Tina is the girl who Adam thinks that Bill found her', 
    kor: '지훈이가 어젯밤에 그녀를 찾았다고 건우가 생각하는 여자아이는 수아이다.', 
    cond: 'cond5', 
    ...r25
};
var r25c6 = {
    eng: 'Tina is the girl who Adam wonders why Bill found her', 
    kor: '지훈이가 어젯밤에 왜 그녀를 찾았는지 건우가 궁금해하는 여자아이는 수아이다.', 
    cond: 'cond6', 
    ...r25
};

var r26 = {
    type: 'critical', 
    item: 'item26', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was frightened?', 
    choices: jsPsych.randomization.shuffle(['Tina', 'John', 'Paul', 'Emma']), 
    correct: 'Tina'
};
var r26c1 = {
    eng: 'John thinks that Tina is the girl who Paul frightened', 
    kor: '철수가 생각하기에 도윤이가 어젯밤에 놀래킨 여자아이는 수아이다.', 
    cond: 'cond1', 
    ...r26
};
var r26c2 = {
    eng: 'Tina is the girl who John thinks that Paul frightened', 
    kor: '도윤이가 어젯밤에 놀래켰다고 철수가 생각하는 여자아이는 수아이다.', 
    cond: 'cond2', 
    ...r26
};
var r26c3 = {
    eng: 'Tina is the girl who John wonders why Paul frightened', 
    kor: '도윤이가 어젯밤에 왜 놀래켰는지 철수가 궁금해하는 여자아이는 수아이다.', 
    cond: 'cond3', 
    ...r26
};
var r26c4 = {
    eng: 'John thinks that Tina is the girl who Paul frightened her', 
    kor: '철수가 생각하기에 도윤이가 어젯밤에 그녀를 놀래킨 여자아이는 수아이다.', 
    cond: 'cond4', 
    ...r26
};
var r26c5 = {
    eng: 'Tina is the girl who John thinks that Paul frightened her', 
    kor: '도윤이가 어젯밤에 그녀를 놀래켰다고 철수가 생각하는 여자아이는 수아이다.', 
    cond: 'cond5', 
    ...r26
};
var r26c6 = {
    eng: 'Tina is the girl who John wonders why Paul frightened her', 
    kor: '도윤이가 어젯밤에 왜 그녀를 놀래켰는지 철수가 궁금해하는 여자아이는 수아이다.', 
    cond: 'cond6', 
    ...r26
};

var r27 = {
    type: 'critical', 
    item: 'item27', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was hugged?', 
    choices: jsPsych.randomization.shuffle(['Emma', 'John', 'Adam', 'Tina']), 
    correct: 'Emma'
};
var r27c1 = {
    eng: 'John thinks that Emma is the girl who Adam hugged', 
    kor: '철수가 생각하기에 건우가 어젯밤에 안아준 여자아이는 하은이다.', 
    cond: 'cond1', 
    ...r27
};
var r27c2 = {
    eng: 'Emma is the girl who John thinks that Adam hugged', 
    kor: '건우가 어젯밤에 안아줬다고 철수가 생각하는 여자아이는 하은이다.', 
    cond: 'cond2', 
    ...r27
};
var r27c3 = {
    eng: 'Emma is the girl who John wonders why Adam hugged', 
    kor: '건우가 어젯밤에 왜 안아줬는지 철수가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond3', 
    ...r27
};
var r27c4 = {
    eng: 'John thinks that Emma is the girl who Adam hugged her', 
    kor: '철수가 생각하기에 건우가 어젯밤에 그녀를 안아준 여자아이는 하은이다.', 
    cond: 'cond4', 
    ...r27
};
var r27c5 = {
    eng: 'Emma is the girl who John thinks that Adam hugged her', 
    kor: '건우가 어젯밤에 그녀를 안아줬다고 철수가 생각하는 여자아이는 하은이다.', 
    cond: 'cond5', 
    ...r27
};
var r27c6 = {
    eng: 'Emma is the girl who John wonders why Adam hugged her', 
    kor: '건우가 어젯밤에 왜 그녀를 안아줬는지 철수가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond6', 
    ...r27
};

var r28 = {
    type: 'critical', 
    item: 'item28', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was pinched?', 
    choices: jsPsych.randomization.shuffle(['Emma', 'Bill', 'Paul', 'Tina']), 
    correct: 'Emma'
};
var r28c1 = {
    eng: 'Bill thinks that Emma is the girl who Paul pinched', 
    kor: '지훈이가 생각하기에 도윤이가 지난주에 꼬집은 여자아이는 하은이다.', 
    cond: 'cond1', 
    ...r28
};
var r28c2 = {
    eng: 'Emma is the girl who Bill thinks that Paul pinched', 
    kor: '도윤이가 지난주에 꼬집었다고 지훈이가 생각하는 여자아이는 하은이다.', 
    cond: 'cond2', 
    ...r28
};
var r28c3 = {
    eng: 'Emma is the girl who Bill wonders why Paul pinched', 
    kor: '도윤이가 지난주에 왜 꼬집었는지 지훈이가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond3', 
    ...r28
};
var r28c4 = {
    eng: 'Bill thinks that Emma is the girl who Paul pinched her', 
    kor: '지훈이가 생각하기에 도윤이가 지난주에 그녀를 꼬집은 여자아이는 하은이다.', 
    cond: 'cond4', 
    ...r28
};
var r28c5 = {
    eng: 'Emma is the girl who Bill thinks that Paul pinched her', 
    kor: '도윤이가 지난주에 그녀를 꼬집었다고 지훈이가 생각하는 여자아이는 하은이다.', 
    cond: 'cond5', 
    ...r28
};
var r28c6 = {
    eng: 'Emma is the girl who Bill wonders why Paul pinched her', 
    kor: '도윤이가 지난주에 왜 그녀를 꼬집었는지 지훈이가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond6', 
    ...r28
};

var r29 = {
    type: 'critical', 
    item: 'item29', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was saved?', 
    choices: jsPsych.randomization.shuffle(['Emma', 'Paul', 'Bill', 'Tina']), 
    correct: 'Emma'
};
var r29c1 = {
    eng: 'Paul thinks that Emma is the girl who Bill saved', 
    kor: '도윤이가 생각하기에 지훈이가 작년에 구조한 여자아이는 하은이다.', 
    cond: 'cond1', 
    ...r29
};
var r29c2 = {
    eng: 'Emma is the girl who Paul thinks that Bill saved', 
    kor: '지훈이가 작년에 구조했다고 도윤이가 생각하는 여자아이는 하은이다.', 
    cond: 'cond2', 
    ...r29
};
var r29c3 = {
    eng: 'Emma is the girl who Paul wonders why Bill saved', 
    kor: '지훈이가 작년에 왜 구조했는지 도윤이가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond3', 
    ...r29
};
var r29c4 = {
    eng: 'Paul thinks that Emma is the girl who Bill saved her', 
    kor: '도윤이가 생각하기에 지훈이가 작년에 그녀를 구조한 여자아이는 하은이다.', 
    cond: 'cond4', 
    ...r29
};
var r29c5 = {
    eng: 'Emma is the girl who Paul thinks that Bill saved her', 
    kor: '지훈이가 작년에 그녀를 구조했다고 도윤이가 생각하는 여자아이는 하은이다.', 
    cond: 'cond5', 
    ...r29
};
var r29c6 = {
    eng: 'Emma is the girl who Paul wonders why Bill saved her', 
    kor: '지훈이가 작년에 왜 그녀를 구조했는지 도윤이가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond6', 
    ...r29
};

var r30 = {
    type: 'critical', 
    item: 'item30', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who was cured?', 
    choices: jsPsych.randomization.shuffle(['Emma', 'Adam', 'John', 'Tina']), 
    correct: 'Emma'
};
var r30c1 = {
    eng: 'Adam thinks that Emma is the girl who John cured', 
    kor: '건우가 생각하기에 철수가 작년에 치료한 여자아이는 하은이다.', 
    cond: 'cond1', 
    ...r30
};
var r30c2 = {
    eng: 'Emma is the girl who Adam thinks that John cured', 
    kor: '철수가 작년에 치료했다고 건우가 생각하는 여자아이는 하은이다.', 
    cond: 'cond2', 
    ...r30
};
var r30c3 = {
    eng: 'Emma is the girl who Adam wonders why John cured', 
    kor: '철수가 작년에 왜 치료했는지 건우가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond3', 
    ...r30
};
var r30c4 = {
    eng: 'Adam thinks that Emma is the girl who John cured her', 
    kor: '건우가 생각하기에 철수가 작년에 그녀를 치료한 여자아이는 하은이다.', 
    cond: 'cond4', 
    ...r30
};
var r30c5 = {
    eng: 'Emma is the girl who Adam thinks that John cured her', 
    kor: '철수가 작년에 그녀를 치료했다고 건우가 생각하는 여자아이는 하은이다.', 
    cond: 'cond5', 
    ...r30
};
var r30c6 = {
    eng: 'Emma is the girl who Adam wonders why John cured her', 
    kor: '철수가 작년에 왜 그녀를 치료했는지 건우가 궁금해하는 여자아이는 하은이다.', 
    cond: 'cond6', 
    ...r30
};

// fillers

var times = jsPsych.randomization.shuffle(['the end of the night', 'the beginning of the week', 'the end of the month', 'the beginning of the year']);

var r31f1 = {
    type: 'filler1', 
    item: 'item31', 
    cond: 'gram', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who did the carrying?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Mary', 'Paul', 'Lisa']), 
    correct: 'Bill',
    eng: 'Mary told Paul that Bill is the man who carried her', 
    kor: '영희가 도윤이에게 말한 바에 따르면 어젯밤에 그녀를 부축한 남자는 지훈이다.', 
};

var r32f1 = {
    type: 'filler1', 
    item: 'item32', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who gave the training?', 
    choices: jsPsych.randomization.shuffle(['John', 'Lisa', 'Adam', 'Mary']), 
    correct: 'John',
    eng: 'Lisa told Adam that John is the man who trained her', 
    kor: '민지가 건우에게 말한 바에 따르면 지난달에 그녀를 훈련시킨 남자는 철수이다.', 
};

var r33f1 = {
    type: 'filler1', 
    item: 'item33', 
    cond: 'gram', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who did the attacking?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Emma', 'John', 'Tina']), 
    correct: 'Paul',
    eng: 'Emma told John that Paul is the boy who attacked her', 
    kor: '하은이가 철수에게 말한 바에 따르면 지난주에 그녀를 공격한 남자아이는 도윤이다.', 
};

var r34f1 = {
    type: 'filler1', 
    item: 'item34', 
    cond: 'gram', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who did the following?', 
    choices: jsPsych.randomization.shuffle(['Adam', 'Tina', 'Bill', 'Emma']), 
    correct: 'Adam',
    eng: 'Tina told Bill that Adam is the boy who followed her', 
    kor: '수아가 지훈이에게 말한 바에 따르면 지난주에 그녀를 따라온 남자아이는 건우이다.', 
};

var r35f1 = {
    type: 'filler1', 
    item: 'item35', 
    cond: 'gram', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who did the tricking?', 
    choices: jsPsych.randomization.shuffle(['Adam', 'Emma', 'John', 'Tina']), 
    correct: 'Adam',
    eng: 'Emma told John that Adam is the boy who tricked her', 
    kor: '하은이가 철수에게 말한 바에 따르면 작년에 그녀를 속인 남자아이는 건우이다.', 
};

var r36f1 = {
    type: 'filler1', 
    item: 'item36', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'When did the firing happen?', choices: times, 
    correct: 'the end of the month',
    eng: 'John told Tina that Lisa is the woman who fired him', 
    kor: '철수가 수아에게 말한 바에 따르면 지난달에 그를 해고한 여자는 민지이다.', 
};

var r37f1 = {
    type: 'filler1', 
    item: 'item37', 
    cond: 'gram', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'When did the teaching happen?', choices: times, 
    correct: 'the beginning of the week',
    eng: 'Bill told Emma that Mary is the woman who taught him', 
    kor: '지훈이가 하은이에게 말한 바에 따르면 지난주에 그를 가르친 여자는 영희이다.', 
};

var r38f1 = {
    type: 'filler1', 
    item: 'item38', 
    cond: 'gram', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'When did the interrupting happen?', choices: times, 
    correct: 'the beginning of the week',
    eng: 'Paul told Mary that Tina is the girl who interrupted him', 
    kor: '도윤이가 영희에게 말한 바에 따르면 지난주에 그를 방해한 여자아이는 수아이다.', 
};

var r39f1 = {
    type: 'filler1', 
    item: 'item39', 
    cond: 'gram', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'When did the teasing happen?', 
    choices: times, correct: 'the beginning of the week',
    eng: 'Adam told Lisa that Tina is the girl who teased him', 
    kor: '건우가 민지에게 말한 바에 따르면 지난주에 그를 놀린 여자아이는 수아이다.', 
};

var r40f1 = {
    type: 'filler1', 
    item: 'item40', 
    cond: 'gram', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'When did the visiting happen?', 
    choices: times, 
    correct: 'the beginning of the week',
    eng: 'Adam told Mary that Emma is the girl who visited him', 
    kor: '건우가 영희에게 말한 바에 따르면 지난주에 그를 방문한 여자아이는 하은이다.', 
};

var r41f2 = {
    type: 'filler2', 
    item: 'item41', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'When was somebody brought to the conference?', 
    choices: times, 
    correct: 'the end of the month',
    eng: 'John is the man who wonders why Mary brought Paul to the conference', 
    kor: '영희가 왜 지난달에 회의에 도윤이를 데려왔는지 궁금해하는 남자는 철수이다.', 
};

var r42f2 = {
    type: 'filler2', 
    item: 'item42', 
    cond: 'ungr', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'When was somebody led to the subway?', 
    choices: times, 
    correct: 'the end of the night',
    eng: 'John is the man who wonders that Lisa led Adam to the subway', 
    kor: '민지가 왜 어젯밤에 지하철에 건우를 안내했다 궁금해하는 남자는 철수이다.', 
};

var r43f2 = {
    type: 'filler2', 
    item: 'item43', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'When was somebody sent to the factory?', 
    choices: times, 
    correct: 'the end of the month',
    eng: 'Bill is the man who wonders why Mary sent Paul to the factory', 
    kor: '영희가 왜 지난달에 공장에 도윤이를 보냈는지 궁금해하는 남자는 지훈이다.', 
};

var r44f2 = {
    type: 'filler2', 
    item: 'item44', 
    cond: 'ungr', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'When was somebody pulled off the bus?', 
    choices: times, 
    correct: 'the end of the night',
    eng: 'Paul is the boy who wonders that Mary pulled Bill off the bus', 
    kor: '영희가 왜 어젯밤에 버스에서 지훈이를 내렸다 궁금해하는 남자아이는 도윤이다.', 
};

var r45f2 = {
    type: 'filler2', 
    item: 'item45', 
    cond: 'gram', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'When was somebody taken to a dance?', 
    choices: times, 
    correct: 'the beginning of the year',
    eng: 'Adam is the boy who wonders why Lisa took John to a dance', 
    kor: '민지가 왜 작년에 댄스파티에 철수를 데려갔는지 궁금해하는 남자아이는 건우이다.', 
};

var r46f2 = {
    type: 'filler2', 
    item: 'item46', 
    cond: 'ungr', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who appointed somebody to the committee?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Mary', 'Tina', 'John']), 
    correct: 'Bill',
    eng: 'Mary is the woman who wonders that Bill appointed Tina to the committee', 
    kor: '지훈이가 왜 작년에 위원회에 수아를 지명했다 궁금해하는 여자는 영희이다.', 
};

var r47f2 = {
    type: 'filler2', 
    item: 'item47', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who introduced somebody to the president?', 
    choices: jsPsych.randomization.shuffle(['John', 'Lisa', 'Emma', 'Bill']), 
    correct: 'John',
    eng: 'Lisa is the woman who wonders why John introduced Emma to the president', 
    kor: '철수가 왜 지난달에 대통령에게 하은이를 소개했는지 궁금해하는 여자는 민지이다.', 
};

var r48f2 = {
    type: 'filler2', 
    item: 'item48', 
    cond: 'ungr', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who let somebody into the office?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Mary', 'Emma', 'John']), 
    correct: 'Bill',
    eng: 'Mary is the woman who wonders that Bill let Emma into the office', 
    kor: '지훈이가 왜 지난주에 사무실에 하은이를 들여보냈다 궁금해하는 여자는 영희이다.', 
};

var r49f2 = {
    type: 'filler2', 
    item: 'item49', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who invited somebody to a party?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Emma', 'Lisa', 'Adam']), 
    correct: 'Paul',
    eng: 'Emma is the girl who wonders why Paul invited Lisa to a party', 
    kor: '도윤이가 왜 지난달에 파티에 민지를 초대했는지 궁금해하는 여자아이는 하은이다.', 
};

var r50f2 = {
    type: 'filler2', 
    item: 'item50', 
    cond: 'ungr', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who pushed somebody off a train?', 
    choices: jsPsych.randomization.shuffle(['Adam', 'Tina', 'Mary', 'Paul']), 
    correct: 'Adam',
    eng: 'Tina is the girl who wonders that Adam pushed Mary off a train', 
    kor: '건우이가 왜 지난주에 기차에서 영희를 밀어냈다 궁금해하는 여자아이는 수아이다.', 
};

var r51f3 = {
    type: 'filler3', 
    item: 'item51', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who cooked the meal?', 
    choices: jsPsych.randomization.shuffle(['John', 'Tina', 'Paul', 'Emma']), 
    correct: 'John',
    eng: 'Tina says that John is the man who cooked Paul a meal', 
    kor: '수아가 말하기에 지난달에 도윤이에게 식사를 요리한 남자는 철수이다.', 
};

var r52f3 = {
    type: 'filler3', 
    item: 'item52', 
    cond: 'ungr', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who handed over the keys?', 
    choices: jsPsych.randomization.shuffle(['Bill', 'Emma', 'Adam', 'Tina']), 
    correct: 'Bill',
    eng: 'Emma says that Bill is the who handed Adam the keys', 
    kor: '하은이가 말하기 작년에 건우에게 열쇠를 건네준 남자는 지훈이다.', 
};

var r53f3 = {
    type: 'filler3', 
    item: 'item53', 
    cond: 'gram', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who bought the present?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Lisa', 'Bill', 'Mary']), 
    correct: 'Paul',
    eng: 'Lisa says that Paul is the boy who bought Bill a present', 
    kor: '민지가 말하기에 작년에 지훈이에게 선물을 사준 남자아이는 도윤이다.', 
};

var r54f3 = {
    type: 'filler3', 
    item: 'item54', 
    cond: 'ungr', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who made the sandwich?', 
    choices: jsPsych.randomization.shuffle(['Paul', 'Mary', 'John', 'Lisa']), 
    correct: 'Paul',
    eng: 'Mary says that Paul is the who made John a sandwich', 
    kor: '영희가 말하기 어젯밤에 철수에게 샌드위치를 만든 남자아이는 도윤이다.', 
};

var r55f3 = {
    type: 'filler3', 
    item: 'item55', 
    cond: 'gram', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'Who wrote the letter?', 
    choices: jsPsych.randomization.shuffle(['Adam', 'Lisa', 'Bill', 'Mary']), 
    correct: 'Adam',
    eng: 'Lisa says that Adam is the boy who wrote Bill a letter', 
    kor: '민지가 말하기에 작년에 지훈이에게 편지를 쓴 남자아이는 건우이다.', 
};

var r56f3 = {
    type: 'filler3', 
    item: 'item56', 
    cond: 'ungr', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'When was the story read?', 
    choices: times, 
    correct: 'the end of the night',
    eng: 'Adam says that Lisa is the who read Tina a story', 
    kor: '건우가 말하기 어젯밤에 수아에게 이야기를 읽어준 여자는 민지이다.', 
};

var r57f3 = {
    type: 'filler3', 
    item: 'item57', 
    cond: 'gram', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'When was the car sold?', 
    choices: times, 
    correct: 'the beginning of the year',
    eng: 'Paul says that Mary is the woman who sold Emma a car', 
    kor: '도윤이가 말하기에 작년에 하은이에게 차를 판 여자는 영희이다.', 
};

var r58f3 = {
    type: 'filler3', 
    item: 'item58', 
    cond: 'ungr', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'When was the book given?', 
    choices: times, 
    correct: 'the end of the month',
    eng: 'John says that Emma is the who gave Lisa a book', 
    kor: '철수가 말하기 지난달에 민지에게 책을 준 여자아이는 하은이다.', 
};

var r59f3 = {
    type: 'filler3', 
    item: 'item59', 
    cond: 'gram', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'When was the snack offered?', 
    choices: times, 
    correct: 'the end of the night',
    eng: 'Bill says that Emma is the girl who offered Mary a snack', 
    kor: '지훈이가 말하기에 어젯밤에 영희에게 간식을 제공한 여자아이는 하은이다.', 
};

var r60f3 = {
    type: 'filler3', 
    item: 'item60', 
    cond: 'ungr', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'When was the secret told?', 
    choices: times, 
    correct: 'the beginning of the year',
    eng: 'John says that Tina is the who told Lisa a secret', 
    kor: '철수가 말하기 작년에 민지에게 비밀을 말한 여자아이는 수아이다.', 
};

var r61f4 = {
    type: 'filler4', 
    item: 'item61', 
    cond: 'gram', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'When did somebody arrive?', 
    choices: times, 
    correct: 'the beginning of the year',
    eng: 'Tina told Adam that Bill is the man who arrived', 
    kor: '수아가 건우에게 말한 바에 따르면 작년에 도착한 남자는 지훈이다.', 
};

var r62f4 = {
    type: 'filler4', 
    item: 'item62', 
    cond: 'ungr', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'When did somebody die?', 
    choices: times, 
    correct: 'the end of the month',
    eng: 'Emma told Paul that Bill is the man who did died', 
    kor: '하은이가 도윤이에게 말한 바에 따르면 지난달에 죽은 남자가는 지훈이다.', 
};

var r63f4 = {
    type: 'filler4', 
    item: 'item63', 
    cond: 'gram', 
    coda: ' at the beginning of the year.', 
    time: ' last year.',
    question: 'When did somebody leave?', 
    choices: times, 
    correct: 'the beginning of the year',
    eng: 'Tina told Adam that John is the man who left', 
    kor: '수아가 건우에게 말한 바에 따르면 작년에 떠난 남자는 철수이다.', 
};

var r64f4 = {
    type: 'filler4', 
    item: 'item64', 
    cond: 'ungr', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'When did somebody exercise?', 
    choices: times, 
    correct: 'the beginning of the week',
    eng: 'Emma told John that Paul is the boy who did exercised', 
    kor: '하은이가 철수에게 말한 바에 따르면 지난주에 운동한 남자아이가는 도윤이다.', 
};

var r65f4 = {
    type: 'filler4', 
    item: 'item65', 
    cond: 'gram', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'When did somebody shout?', 
    choices: times, 
    correct: 'the end of the night',
    eng: 'Tina told Bill that Adam is the boy who shouted', 
    kor: '수아가 지훈이에게 말한 바에 따르면 어젯밤에 소리친 남자아이는 건우이다.', 
};

var r66f4 = {
    type: 'filler4', 
    item: 'item66', 
    cond: 'ungr', 
    coda: ' at the beginning of the week.', 
    time: ' last week.',
    question: 'Who was coming?', 
    choices: jsPsych.randomization.shuffle(['Lisa', 'Adam', 'Tina', 'Paul']), 
    correct: 'Lisa',
    eng: 'Adam told Tina that Lisa is the woman who did came', 
    kor: '건우가 수아에게 말한 바에 따르면 지난주에 온 여자가는 민지이다.', 
};

var r67f4 = {
    type: 'filler4', 
    item: 'item67', 
    cond: 'gram', 
    coda: ' at the end of the month.', 
    time: ' last month.',
    question: 'Who was traveling?', 
    choices: jsPsych.randomization.shuffle(['Mary', 'Paul', 'Emma', 'Adam']), 
    correct: 'Mary',
    eng: 'Paul told Emma that Mary is the woman who traveled', 
    kor: '도윤이가 하은이에게 말한 바에 따르면 지난달에 여행한 여자는 영희이다.', 
};

var r68f4 = {
    type: 'filler4', 
    item: 'item68', 
    cond: 'ungr', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was working?', 
    choices: jsPsych.randomization.shuffle(['Lisa', 'Adam', 'Tina', 'Paul']), 
    correct: 'Lisa',
    eng: 'Adam told Tina that Lisa is the woman who did worked', 
    kor: '건우가 수아에게 말한 바에 따르면 어젯밤에 일한 여자가는 민지이다.', 
};

var r69f4 = {
    type: 'filler4', 
    item: 'item69', 
    cond: 'gram', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was crying?', 
    choices: jsPsych.randomization.shuffle(['Tina', 'John', 'Mary', 'Bill']), 
    correct: 'Tina',
    eng: 'John told Mary that Tina is the girl who cried', 
    kor: '철수가 영희에게 말한 바에 따르면 어젯밤에 운 여자아이는 수아이다.', 
};

var r70f4 = {
    type: 'filler4', 
    item: 'item70', 
    cond: 'ungr', 
    coda: ' at the end of the night.', 
    time: ' last night.',
    question: 'Who was studying?', 
    choices: jsPsych.randomization.shuffle(['Emma', 'Bill', 'Lisa', 'John']), 
    correct: 'Emma',
    eng: 'Bill told Lisa that Emma is the girl who did studied', 
    kor: '지훈이가 민지에게 말한 바에 따르면 어젯밤에 공부한 여자아이가는 하은이다.', 
};

// running lists

var rcrit1 = [r01c1, r02c2, r03c3, r04c4, r05c5, r06c6, r07c1, r08c2, r09c3, r10c4, r11c5, r12c6, r13c1, r14c2, r15c3, r16c4, r17c5, r18c6, r19c1, r20c2, r21c3, r22c4, r23c5, r24c6, r25c1, r26c2, r27c3, r28c4, r29c5, r30c6,];

var rcrit2 = [r01c2, r02c3, r03c4, r04c5, r05c6, r06c1, r07c2, r08c3, r09c4, r10c5, r11c6, r12c1, r13c2, r14c3, r15c4, r16c5, r17c6, r18c1, r19c2, r20c3, r21c4, r22c5, r23c6, r24c1, r25c2, r26c3, r27c4, r28c5, r29c6, r30c1,];

var rcrit3 = [r01c3, r02c4, r03c5, r04c6, r05c1, r06c2, r07c3, r08c4, r09c5, r10c6, r11c1, r12c2, r13c3, r14c4, r15c5, r16c6, r17c1, r18c2, r19c3, r20c4, r21c5, r22c6, r23c1, r24c2, r25c3, r26c4, r27c5, r28c6, r29c1, r30c2,];

var rcrit4 = [r01c4, r02c5, r03c6, r04c1, r05c2, r06c3, r07c4, r08c5, r09c6, r10c1, r11c2, r12c3, r13c4, r14c5, r15c6, r16c1, r17c2, r18c3, r19c4, r20c5, r21c6, r22c1, r23c2, r24c3, r25c4, r26c5, r27c6, r28c1, r29c2, r30c3,];

var rcrit5 = [r01c5, r02c6, r03c1, r04c2, r05c3, r06c4, r07c5, r08c6, r09c1, r10c2, r11c3, r12c4, r13c5, r14c6, r15c1, r16c2, r17c3, r18c4, r19c5, r20c6, r21c1, r22c2, r23c3, r24c4, r25c5, r26c6, r27c1, r28c2, r29c3, r30c4,];

var rcrit6 = [r01c6, r02c1, r03c2, r04c3, r05c4, r06c5, r07c6, r08c1, r09c2, r10c3, r11c4, r12c5, r13c6, r14c1, r15c2, r16c3, r17c4, r18c5, r19c6, r20c1, r21c2, r22c3, r23c4, r24c5, r25c6, r26c1, r27c2, r28c3, r29c4, r30c5,];

var rfill = [r31f1, r32f1, r33f1, r34f1, r35f1, r36f1, r37f1, r38f1, r39f1, r40f1, r41f2, r42f2, r43f2, r44f2, r45f2, r46f2, r47f2, r48f2, r49f2, r50f2, r51f3, r52f3, r53f3, r54f3, r55f3, r56f3, r57f3, r58f3, r59f3, r60f3, r61f4, r62f4, r63f4, r64f4, r65f4, r66f4, r67f4, r68f4, r69f4, r70f4,];

var rlist0 = [r01c1, r02c2, r03c3,]; // short list for testing

// self-paced reading practice

var spr_prac1 = {
    sent: 'Mary told Emma that Bill is the man who disappeared at the end of the month.',
    question: 'Who disappeared?',
    choices: jsPsych.randomization.shuffle(['Bill', 'Mary', 'Emma', 'John']),
    correct: 'Bill',
    type: 'practice',
    item: 'prac1'
};

var spr_prac2 = {
    sent: 'Adam says that Lisa is the woman who kissed John at the end of the night.',
    question: 'When did the kissing happen?',
    choices: jsPsych.randomization.shuffle(['the end of the night', 'the beginning of the week', 'the end of the month', 'the beginning of the year']),
    correct: 'the end of the night',
    type: 'practice',
    item: 'prac2'
};

var spr_prac3 = {
    sent: 'Tina is the girl who thinks that Adam helped John at the beginning of the week.',
    question: 'Who was helped?',
    choices: jsPsych.randomization.shuffle(['John', 'Tina', 'Adam', 'Mary']),
    correct: 'John',
    type: 'practice',
    item: 'prac3'
};

var spr_prac_list = [spr_prac1, spr_prac2, spr_prac3];

// english acceptability judgment practice

var eng_ajt_prac1 = {
    sent: 'Bill told Lisa that Emma is the girl who graduated last month.',
    type: 'practice',
    item: 'prac1',
    cond: 'gram',
};

var eng_ajt_prac2 = {
    sent: 'Mary says to John is the man who met Tina last night.',
    type: 'practice',
    item: 'prac2',
    cond: 'ungr',
};

var eng_ajt_prac3 = {
    sent: 'Adam is the boy who thinks that Emma interviewed Lisa last week.',
    type: 'practice',
    item: 'prac3',
    cond: 'gram',
};

var eng_ajt_prac_list = [eng_ajt_prac1, eng_ajt_prac2, eng_ajt_prac3];

// korean acceptability judgment practice

var kor_ajt_prac1 = {
    sent: '지훈이가 민지에게 말한 바에 따르면 지난달에 졸업한 여자아이는 하은이가 이다.',
    eng: 'Bill told Lisa that Emma is the girl who graduated last month.',
    type: 'practice',
    item: 'prac1',
    cond: 'ungr',
};

var kor_ajt_prac2 = {
    sent: '영희가 말하기에 어젯밤에 수아를 만난 남자는 철수이다.',
    eng: 'Mary said that John is the man who met Tina last night.',
    type: 'practice',
    item: 'prac2',
    cond: 'gram',
};

var kor_ajt_prac3 = {
    sent: '하은이가 지난주에 민지를 인터뷰했다고 생각하는 남자아이는 건우이다.',
    eng: 'Adam is the boy who thinks that Emma interviewed Lisa last week.',
    type: 'practice',
    item: 'prac3',
    cond: 'gram',
};

var kor_ajt_prac_list = [kor_ajt_prac1, kor_ajt_prac2, kor_ajt_prac3];


/* =================================================================
elicited production task
================================================================= */

// critical items

var p01 = {
    item: 'item01', 
    type: 'critical', 
    image1: 'img_man1.png', 
    image2: 'img_man2.png'
};
var p01c1 = {
    setup1: 'Lisa arrested this man last month.',
    setup2: 'Mary arrested this man last month.', // stimulus
    response1: 'Lisa arrested this man last month.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'Mary arrested this man last month.',
    target: 'the man who Mary arrested last month',
    cond: 'cond1', 
    ...p01
};
var p01c2 = {
    setup1: 'Emma thinks that Mary arrested this man last month.',
    setup2: 'Tina thinks that Mary arrested this man last month.', // stimulus
    response1: 'Emma thinks that Mary arrested this man last month.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'Tina thinks that Mary arrested this man last month.',
    target: 'the man who Tina thinks that Mary arrested last month',
    cond: 'cond2', 
    ...p01
};
var p01c3 = {
    setup1: 'Emma wonders why Mary arrested this man last month.',
    setup2: 'Tina wonders why Mary arrested this man last month.', // stimulus
    response1: 'Emma wonders why Mary arrested this man last month.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'Tina wonders why Mary arrested this man last month.',
    target: 'the man who Tina wonders why Mary arrested him last month',
    cond: 'cond3', 
    ...p01
};

var p02 = {
    item: 'item02', 
    type: 'critical', 
    image1: 'img_man2.png', 
    image2: 'img_man1.png'
};
var p02c1 = {
    setup1: 'Emma assisted this man last week.', // stimulus
    setup2: 'Tina assisted this man last week.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'Tina assisted this man last week.',
    stimulus: 'Emma assisted this man last week.',
    target: 'the man who Emma assisted last week',
    cond: 'cond1', 
    ...p02
};
var p02c2 = {
    setup1: 'Lisa thinks that Emma assisted this man last week.', // stimulus
    setup2: 'Mary thinks that Emma assisted this man last week.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'Mary thinks that Emma assisted this man last week.',
    stimulus: 'Lisa thinks that Emma assisted this man last week.',
    target: 'the man who Lisa thinks that Emma assisted last week',
    cond: 'cond2', 
    ...p02
};
var p02c3 = {
    setup1: 'Lisa wonders why Emma assisted this man last week.', // stimulus
    setup2: 'Mary wonders why Emma assisted this man last week.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'Mary wonders why Emma assisted this man last week.',
    stimulus: 'Lisa wonders why Emma assisted this man last week.',
    target: 'the man who Lisa wonders why Emma assisted him last week',
    cond: 'cond3', 
    ...p02
};

var p03 = {
    item: 'item03', 
    type: 'critical', 
    image1: 'img_man1.png', 
    image2: 'img_man2.png'
};
var p03c1 = {
    setup1: 'Emma criticized this man last night.',
    setup2: 'Tina criticized this man last night.', // stimulus
    response1: 'Emma criticized this man last night.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'Tina criticized this man last night.',
    target: 'the man who Tina criticized last night',
    cond: 'cond1', 
    ...p03
};
var p03c2 = {
    setup1: 'Lisa thinks that Tina criticized this man last night.',
    setup2: 'Mary thinks that Tina criticized this man last night.', // stimulus
    response1: 'Lisa thinks that Tina criticized this man last night.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'Mary thinks that Tina criticized this man last night.',
    target: 'the man who Mary thinks that Tina crticized last night',
    cond: 'cond2', 
    ...p03
};
var p03c3 = {
    setup1: 'Lisa wonders why Tina criticized this man last night.',
    setup2: 'Mary wonders why Tina criticized this man last night.', // stimulus
    response1: 'Lisa wonders why Tina criticized this man last night.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'Mary wonders why Tina criticized this man last night.',
    target: 'the man who Mary wonders why Tina criticized him last night',
    cond: 'cond3', 
    ...p03
};

var p04 = {
    item: 'item04', 
    type: 'critical', 
    image1: 'img_man2.png', 
    image2: 'img_man1.png'
};
var p04c1 = {
    setup1: 'Emma forgave this man last month.', // stimulus
    setup2: 'Tina forgave this man last month.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'Tina forgave this man last month.',
    stimulus: 'Emma forgave this man last month.',
    target: 'the man who Emma forgave last month',
    cond: 'cond1', 
    ...p04
};
var p04c2 = {
    setup1: 'Mary thinks that Emma forgave this man last month.', // stimulus
    setup2: 'Lisa thinks that Emma forgave this man last month.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'Lisa thinks that Emma forgave this man last month.',
    stimulus: 'Mary thinks that Emma forgave this man last month.',
    target: 'the man who Mary thinks that Emma forgave last month',
    cond: 'cond2', 
    ...p04
};
var p04c3 = {
    setup1: 'Mary wonders why Emma forgave this man last month.', // stimulus
    setup2: 'Lisa wonders why Emma forgave this man last month.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'Lisa wonders why Emma forgave this man last month.',
    stimulus: 'Mary wonders why Emma forgave this man last month.',
    target: 'the man who Mary wonders why Emma forgave him last month',
    cond: 'cond3', 
    ...p04
};

var p05 = {
    item: 'item05', 
    type: 'critical', 
    image1: 'img_boy1.png', 
    image2: 'img_boy2.png'
};
var p05c1 = {
    setup1: 'Mary adopted this boy last year.',
    setup2: 'Lisa adopted this boy last year.', // stimulus
    response1: 'Mary adopted this boy last year.',
    response2: '<b><u>Which boy is this?</b></u>', // question
    stimulus: 'Lisa adopted this boy last year.',
    target: 'the boy who Lisa adopted last year',
    cond: 'cond1', 
    ...p05
};
var p05c2 = {
    setup1: 'Emma thinks that Lisa adopted this boy last year.',
    setup2: 'Tina thinks that Lisa adopted this boy last year.', // stimulus
    response1: 'Emma thinks that Lisa adopted this boy last year.',
    response2: '<b><u>Which boy is this?</b></u>', // question
    stimulus: 'Tina thinks that Lisa adopted this boy last year.',
    target: 'the boy who Tina thinks that Lisa adopted last year',
    cond: 'cond2', 
    ...p05
};
var p05c3 = {
    setup1: 'Emma wonders why Lisa adopted this boy last year.',
    setup2: 'Tina wonders why Lisa adopted this boy last year.', // stimulus
    response1: 'Emma wonders why Lisa adopted this boy last year.',
    response2: '<b><u>Which boy is this?</b></u>', // question
    stimulus: 'Tina wonders why Lisa adopted this boy last year.',
    target: 'the boy who Tina wonders why Lisa adopted him last year',
    cond: 'cond3', 
    ...p05
};

var p06 = {
    item: 'item06', 
    type: 'critical', 
    image1: 'img_boy2.png', 
    image2: 'img_boy1.png'
};
var p06c1 = {
    setup1: 'Lisa punished this boy last week.', // stimulus
    setup2: 'Mary punished this boy last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'Mary punished this boy last week.',
    stimulus: 'Lisa punished this boy last week.',
    target: 'the boy who Lisa punished last week',
    cond: 'cond1', 
    ...p06
};
var p06c2 = {
    setup1: 'Emma thinks that Lisa punished this boy last week.', // stimulus
    setup2: 'Tina thinks that Lisa punished this boy last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'Tina thinks that Lisa punished this boy last week.',
    stimulus: 'Emma thinks that Lisa punished this boy last week.',
    target: 'the boy who Emma thinks that Lisa punished last week',
    cond: 'cond2', 
    ...p06
};
var p06c3 = {
    setup1: 'Emma wonders why Lisa punished this boy last week.', // stimulus
    setup2: 'Tina wonders why Lisa punished this boy last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'Tina wonders why Lisa punished this boy last week.',
    stimulus: 'Emma wonders why Lisa punished this boy last week.',
    target: 'the boy who Emma wonders why Lisa punished him last week',
    cond: 'cond3', 
    ...p06
};

var p07 = {
    item: 'item07', 
    type: 'critical', 
    image1: 'img_boy1.png', 
    image2: 'img_boy2.png'
};
var p07c1 = {
    setup1: 'Emma rescued this boy last year.',
    setup2: 'Tina rescued this boy last year.', // stimulus
    response1: 'Emma rescued this boy last year.',
    response2: '<b><u>Which boy is this?</b></u>', // question
    stimulus: 'Tina rescued this boy last year.',
    target: 'the boy who Tina rescued last year',
    cond: 'cond1', 
    ...p07
};
var p07c2 = {
    setup1: 'Mary thinks that Tina rescued this boy last year.',
    setup2: 'Lisa thinks that Tina rescued this boy last year.', // stimulus
    response1: 'Mary thinks that Tina rescued this boy last year.',
    response2: '<b><u>Which boy is this?</b></u>', // question
    stimulus: 'Lisa thinks that Tina rescued this boy last year.',
    target: 'the boy who Lisa thinks that Tina rescued last year',
    cond: 'cond2', 
    ...p07
};
var p07c3 = {
    setup1: 'Mary wonders why Tina rescued this boy last year.',
    setup2: 'Lisa wonders why Tina rescued this boy last year.', // stimulus
    response1: 'Mary wonders why Tina rescued this boy last year.',
    response2: '<b><u>Which boy is this?</b></u>', // question
    stimulus: 'Lisa wonders why Tina rescued this boy last year.',
    target: 'the boy who Lisa wonders why Tina rescued him last year',
    cond: 'cond3', 
    ...p07
};

var p08 = {
    item: 'item08', 
    type: 'critical', 
    image1: 'img_boy2.png', 
    image2: 'img_boy1.png'
};
var p08c1 = {
    setup1: 'Mary scolded this boy last week.', // stimulus
    setup2: 'Lisa scolded this boy last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'Lisa scolded this boy last week.',
    stimulus: 'Mary scolded this boy last week.',
    target: 'the boy who Mary scolded last week.',
    cond: 'cond1', 
    ...p08
};
var p08c2 = {
    setup1: 'Emma thinks that Mary scolded this boy last week.', // stimulus
    setup2: 'Tina thinks that Mary scolded this boy last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'Tina thinks that Mary scolded this boy last week.',
    stimulus: 'Emma thinks that Mary scolded this boy last week.',
    target: 'the boy who Emma thinks that Mary scolded last week.',
    cond: 'cond2', 
    ...p08
};
var p08c3 = {
    setup1: 'Emma wonders why Mary scolded this boy last week.', // stimulus
    setup2: 'Tina wonders why Mary scolded this boy last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'Tina wonders why Mary scolded this boy last week.',
    stimulus: 'Emma wonders why Mary scolded this boy last week.',
    target: 'the boy who Emma wonders why Mary scolded him last week',
    cond: 'cond3', 
    ...p08
};

var p09 = {
    item: 'item09', 
    type: 'critical', 
    image1: 'img_woman1.png', 
    image2: 'img_woman2.png'
};
var p09c1 = {
    setup1: 'Adam avoided this woman last year.',
    setup2: 'Paul avoided this woman last year.', // stimulus
    response1: 'Adam avoided this woman last year.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'Paul avoided this woman last year.',
    target: 'the woman who Paul avoided last year',
    cond: 'cond1', 
    ...p09
};
var p09c2 = {
    setup1: 'Bill thinks that Paul avoided this woman last year.',
    setup2: 'John thinks that Paul avoided this woman last year.', // stimulus
    response1: 'Bill thinks that Paul avoided this woman last year.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'John thinks that Paul avoided this woman last year.',
    target: 'the boy who John thinks that Paul avoided last year',
    cond: 'cond2', 
    ...p09
};
var p09c3 = {
    setup1: 'Bill wonders why Paul avoided this woman last year.',
    setup2: 'John wonders why Paul avoided this woman last year.', // stimulus
    response1: 'Bill wonders why Paul avoided this woman last year.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'John wonders why Paul avoided this woman last year.',
    target: 'the woman who John wonders why Paul avoided her last year',
    cond: 'cond3', 
    ...p09
};

var p10 = {
    item: 'item10', 
    type: 'critical', 
    image1: 'img_woman2.png', 
    image2: 'img_woman1.png'
};
var p10c1 = {
    setup1: 'Adam disturbed this woman last night.', // stimulus
    setup2: 'Paul disturbed this woman last night.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'Paul disturbed this woman last night.',
    stimulus: 'Adam disturbed this woman last night.',
    target: 'the woman who Adam disturbed last night',
    cond: 'cond1', 
    ...p10
};
var p10c2 = {
    setup1: 'Bill thinks that Adam disturbed this woman last night.', // stimulus
    setup2: 'John thinks that Adam disturbed this woman last night.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'John thinks that Adam disturbed this woman last night.',
    stimulus: 'Bill thinks that Adam disturbed this woman last night.',
    target: 'the woman who Bill thinks that Adam disturbed last night',
    cond: 'cond2', 
    ...p10
};
var p10c3 = {
    setup1: 'Bill wonders why Adam disturbed this woman last night.', // stimulus
    setup2: 'John wonders why Adam disturbed this woman last night.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'John wonders why Adam disturbed this woman last night.',
    stimulus: 'Bill wonders why Adam disturbed this woman last night.',
    target: 'the woman who Bill wonders why Adam disturbed her last night',
    cond: 'cond3', 
    ...p10
};

var p11 = {
    item: 'item11', 
    type: 'critical', 
    image1: 'img_woman1.png', 
    image2: 'img_woman2.png'
};
var p11c1 = {
    setup1: 'John hired this woman last year.',
    setup2: 'Bill hired this woman last year.', // stimulus
    response1: 'John hired this woman last year.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'Bill hired this woman last year.',
    target: 'the woman who Bill hired last year',
    cond: 'cond1', 
    ...p11
};
var p11c2 = {
    setup1: 'Adam thinks that Bill hired this woman last year.',
    setup2: 'Paul thinks that Bill hired this woman last year.', // stimulus
    response1: 'Adam thinks that Bill hired this woman last year.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'Paul thinks that Bill hired this woman last year.',
    target: 'the woman who Paul thinks that Bill hired last year',
    cond: 'cond2', 
    ...p11
};
var p11c3 = {
    setup1: 'Adam wonders why Bill hired this woman last year.',
    setup2: 'Paul wonders why Bill hired this woman last year.', // stimulus
    response1: 'Adam wonders why Bill hired this woman last year.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'Paul wonders why Bill hired this woman last year.',
    target: 'the woman who Paul wonders why Bill hired her last year',
    cond: 'cond3', 
    ...p11
};

var p12 = {
    item: 'item12', 
    type: 'critical', 
    image1: 'img_woman2.png', 
    image2: 'img_woman1.png'
};
var p12c1 = {
    setup1: 'John welcomed this woman last month.', // stimulus
    setup2: 'Bill welcomed this woman last month.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'Bill welcomed this woman last month.',
    stimulus: 'John welcomed this woman last month.',
    target: 'the woman who John welcomed last month',
    cond: 'cond1', 
    ...p12
};
var p12c2 = {
    setup1: 'Adam thinks that John welcomed this woman last month.', // stimulus
    setup2: 'Paul thinks that John welcomed this woman last month.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'Paul thinks that John welcomed this woman last month.',
    stimulus: 'Adam thinks that John welcomed this woman last month.',
    target: 'the woman who Adam thinks that John welcomed last month',
    cond: 'cond2', 
    ...p12
};
var p12c3 = {
    setup1: 'Adam wonders why John welcomed this woman last month.', // stimulus
    setup2: 'Paul wonders why John welcomed this woman last month.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'Paul wonders why John welcomed this woman last month.',
    stimulus: 'Adam wonders why John welcomed this woman last month.',
    target: 'the woman who Adam wonders why John welcomed her last month',
    cond: 'cond3', 
    ...p12
};

var p13 = {
    item: 'item13', 
    type: 'critical', 
    image1: 'img_girl1.png', 
    image2: 'img_girl2.png'
};
var p13c1 = {
    setup1: 'Bill comforted this girl last week.',
    setup2: 'John comforted this girl last week.', // stimulus
    response1: 'Bill comforted this girl last week.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'John comforted this girl last week.',
    target: 'the girl who John comforted last week',
    cond: 'cond1', 
    ...p13
};
var p13c2 = {
    setup1: 'Adam thinks that John comforted this girl last week.',
    setup2: 'Paul thinks that John comforted this girl last week.', // stimulus
    response1: 'Adam thinks that John comforted this girl last week.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'Paul thinks that John comforted this girl last week.',
    target: 'the girl who Paul thinks that John comforted last week',
    cond: 'cond2', 
    ...p13
};
var p13c3 = {
    setup1: 'Adam wonders why John comforted this girl last week.',
    setup2: 'Paul wonders why John comforted this girl last week.', // stimulus
    response1: 'Adam wonders why John comforted this girl last week.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'Paul wonders why John comforted this girl last week.',
    target: 'the girl who Paul wonders why John comforted her last week',
    cond: 'cond3', 
    ...p13
};

var p14 = {
    item: 'item14', 
    type: 'critical', 
    image1: 'img_girl2.png', 
    image2: 'img_girl1.png'
};
var p14c1 = {
    setup1: 'Paul frightened this girl last night.', // stimulus
    setup2: 'Adam frightened this girl last night.',
    response1: '<b><u>Which girl is this?</b></u>', // question
    response2: 'Adam frightened this girl last night.',
    stimulus: 'Paul frightened this girl last night.',
    target: 'the girl who Paul frightened last night',
    cond: 'cond1', 
    ...p14
};
var p14c2 = {
    setup1: 'Bill thinks that Paul frightened this girl last night.', // stimulus
    setup2: 'John thinks that Paul frightened this girl last night.',
    response1: '<b><u>Which girl is this?</b></u>', // question
    response2: 'John thinks that Paul frightened this girl last night.',
    stimulus: 'Bill thinks that Paul frightened this girl last night.',
    target: 'the girl who Bill thinks that Paul frightened last night',
    cond: 'cond2', 
    ...p14
};
var p14c3 = {
    setup1: 'Bill wonders why Paul frightened this girl last night.', // stimulus
    setup2: 'John wonders why Paul frightened this girl last night.',
    response1: '<b><u>Which girl is this?</b></u>', // question
    response2: 'John wonders why Paul frightened this girl last night.',
    stimulus: 'Bill wonders why Paul frightened this girl last night.',
    target: 'the girl who Bill wonders why Paul frightened her last night',
    cond: 'cond3', 
    ...p14
};

var p15 = {
    item: 'item15', 
    type: 'critical', 
    image1: 'img_girl1.png', 
    image2: 'img_girl2.png'
};
var p15c1 = {
    setup1: 'Paul hugged this girl last night.',
    setup2: 'Adam hugged this girl last night.', // stimulus
    response1: 'Paul hugged this girl last night.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'Adam hugged this girl last night.',
    target: 'the girl who Adam hugged last night',
    cond: 'cond1', 
    ...p15
};
var p15c2 = {
    setup1: 'Bill thinks that Adam hugged this girl last night.',
    setup2: 'John thinks that Adam hugged this girl last night.', // stimulus
    response1: 'Bill thinks that Adam hugged this girl last night.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'John thinks that Adam hugged this girl last night.',
    target: 'the girl who John thinks that Adam hugged last night',
    cond: 'cond2', 
    ...p15
};
var p15c3 = {
    setup1: 'Bill wonders why Adam hugged this girl last night.',
    setup2: 'John wonders why Adam hugged this girl last night.', // stimulus
    response1: 'Bill wonders why Adam hugged this girl last night.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'John wonders why Adam hugged this girl last night.',
    target: 'the girl who John wonders why Adam hugged her last night',
    cond: 'cond3', 
    ...p15
};

// fillers

var p16f1 = {
    setup1: 'This man says that Mary trained him last year.', // stimulus
    setup2: 'This man says that Lisa trained him last year.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'This man says that Lisa trained him last year.',
    stimulus: 'This man says that Mary trained him last year.',
    target: 'the man who says that Mary trained him last year',
    cond: 'gram',
    item: 'item16',
    type: 'filler1',
    image1: 'img_man2.png', 
    image2: 'img_man1.png',
};

var p17f1 = {
    setup1: 'This man says that Mary fired him last month.',
    setup2: 'This man says that Lisa fired him last month.',  // stimulus
    response1: 'This man says that Mary fired him last month.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'This man says that Lisa fired him last month.',
    target: 'the man who says that Lisa fired him last month',
    cond: 'gram',
    item: 'item17',
    type: 'filler1',
    image1: 'img_man1.png', 
    image2: 'img_man2.png',
};

var p18f1 = {
    setup1: 'This boy says that Tina teased him last week.',  // stimulus
    setup2: 'This boy says that Emma teased him last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'This boy says that Emma teased him last week.',
    stimulus: 'This boy says that Tina teased him last week.',
    target: 'the boy who says that Tina teased him last week',
    cond: 'gram',
    item: 'item18',
    type: 'filler1',
    image1: 'img_boy2.png', 
    image2: 'img_boy1.png',
};

var p19f1 = {
    setup1: 'This woman says that Bill visited her last week.',
    setup2: 'This woman says that John visited her last week.',  // stimulus
    response1: 'This woman says that Bill visited her last week.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'This woman says that John visited her last week.',
    target: 'the woman who says taht John visited her last week',
    cond: 'gram',
    item: 'item19',
    type: 'filler1',
    image1: 'img_woman1.png', 
    image2: 'img_woman2.png',
};

var p20f1 = {
    setup1: 'This girl says that Adam tricked her last night.',  // stimulus
    setup2: 'This girl says that Paul tricked her last night.',
    response1: '<b><u>Which girl is this?</b></u>', // question
    response2: 'This girl says that Paul tricked her last night.',
    stimulus: 'This girl says that Adam tricked her last night.',
    target: 'the girl who says that Adam tricked her last night',
    cond: 'gram',
    item: 'item20',
    type: 'filler1',
    image1: 'img_girl2.png', 
    image2: 'img_girl1.png',
};

var p21f2 = {
    setup1: 'This man appointed Mary to the board last year.',
    setup2: 'This man appointed Mary to the committee last year.',  // stimulus
    response1: 'This man appointed Mary to the board last year.',
    response2: '<b><u>Which man is this?</b></u>', // question
    stimulus: 'This man appointed Mary to the committee last year.',
    target: 'the man who appointed Mary to the committee last year',
    cond: 'gram',
    item: 'item21',
    type: 'filler2',
    image1: 'img_man1.png', 
    image2: 'img_man2.png',
};

var p22f2 = {
    setup1: 'This boy invited Tina to a party last week.',  // stimulus
    setup2: 'This boy invited Tina to a concert last week.',
    response1: '<b><u>Which boy is this?</b></u>', // question
    response2: 'This boy invited Tina to a concert last week.',
    stimulus: 'This boy invited Tina to a party last week.',
    target: 'the boy who invited Tina to a party last week',
    cond: 'gram',
    item: 'item22',
    type: 'filler2',
    image1: 'img_boy2.png', 
    image2: 'img_boy1.png',
};

var p23f2 = {
    setup1: 'This woman brought John to the assembly last month.',
    setup2: 'This woman brought John to the conference last month.',  // stimulus
    response1: 'This woman brought John to the assembly last month.',
    response2: '<b><u>Which woman is this?</b></u>', // question
    stimulus: 'This woman brought John to the conference last month.',
    target: 'the woman who brought John to the assembly last month',
    cond: 'gram',
    item: 'item23',
    type: 'filler2',
    image1: 'img_woman1.png', 
    image2: 'img_woman2.png',
};

var p24f2 = {
    setup1: 'This woman sent Bill to the factory last month.',  // stimulus
    setup2: 'This woman sent Bill to the store last month.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'This woman sent Bill to the store last month.',
    stimulus: 'This woman sent Bill to the factory last month.',
    target: 'the woman who sent Bill to the factory last month',
    cond: 'gram',
    item: 'item24',
    type: 'filler2',
    image1: 'img_woman2.png', 
    image2: 'img_woman1.png',
};

var p25f2 = {
    setup1: 'This girl took Adam to the hospital last night.',
    setup2: 'This girl took Adam to a dance last night.',  // stimulus
    response1: 'This girl took Adam to the hospital last night.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'This girl took Adam to a dance last night.',
    target: 'the girl who took Adam to the dance last night.',
    cond: 'gram',
    item: 'item25',
    type: 'filler2',
    image1: 'img_girl1.png', 
    image2: 'img_girl2.png',
};

var p26f3 = {
    setup1: 'This man told Emma that Lisa came last month.',  // stimulus
    setup2: 'This man told Lisa that Emma came last month.',
    response1: '<b><u>Which man is this?</b></u>', // question
    response2: 'This man told Lisa that Emma came last month.',
    stimulus: 'This man told Emma that Lisa came last month.',
    target: 'the man who told Emma that Lisa came last month',
    cond: 'gram',
    item: 'item26',
    type: 'filler3',
    image1: 'img_man2.png', 
    image2: 'img_man1.png',
};

var p27f3 = {
    setup1: 'This boy told Emma that Mary cried last night.',
    setup2: 'This boy told Mary that Emma cried last night.',  // stimulus
    response1: 'This boy told Emma that Mary cried last night.',
    response2: '<b><u>Which boy is this?</b></u>', // question
    stimulus: 'This boy told Mary that Emma cried last night.',
    target: 'the boy who told Mary that Emma cried last night',
    cond: 'gram',
    item: 'item27',
    type: 'filler3',
    image1: 'img_boy1.png', 
    image2: 'img_boy2.png',
};

var p28f3 = {
    setup1: 'This woman told Bill that Paul studied last night.',  // stimulus
    setup2: 'This woman told Paul that Bill studied last night.',
    response1: '<b><u>Which woman is this?</b></u>', // question
    response2: 'This woman told Paul that Bill studied last night.',
    stimulus: 'This woman told Bill that Paul studied last night.',
    target: 'the woman who told Bill that Paul studied last night',
    cond: 'gram',
    item: 'item28',
    type: 'filler3',
    image1: 'img_woman2.png', 
    image2: 'img_woman1.png',
};

var p29f3 = {
    setup1: 'This girl told Paul that John arrived last week.',
    setup2: 'This girl told John that Paul arrived last week.',  // stimulus
    response1: 'This girl told Paul that John arrived last week.',
    response2: '<b><u>Which girl is this?</b></u>', // question
    stimulus: 'This girl told John that Paul arrived last week.',
    target: 'the girl who told John that Paul arrived last week',
    cond: 'gram',
    item: 'item29',
    type: 'filler3',
    image1: 'img_girl1.png', 
    image2: 'img_girl2.png',
};

var p30f3 = {
    setup1: 'This girl told Adam that Bill left last year.',  // stimulus
    setup2: 'This girl told Bill that Adam left last year.',
    response1: '<b><u>Which girl is this?</b></u>', // question
    response2: 'This girl told Bill that Adam left last year.',
    stimulus: 'This girl told Adam that Bill left last year.',
    target: 'the girl who told Adam that Bill left last year',
    cond: 'gram',
    item: 'item30',
    type: 'filler3',
    image1: 'img_girl2.png', 
    image2: 'img_girl1.png',
};

// running lists

var pcrit1 = [p01c1, p02c2, p03c3, p04c1, p05c2, p06c3, p07c1, p08c2, p09c3, p10c1, p11c2, p12c3, p13c1, p14c2, p15c3,];

var pcrit2 = [p01c2, p02c3, p03c1, p04c2, p05c3, p06c1, p07c2, p08c3, p09c1, p10c2, p11c3, p12c1, p13c2, p14c3, p15c1,];

var pcrit3 = [p01c3, p02c1, p03c2, p04c3, p05c1, p06c2, p07c3, p08c1, p09c2, p10c3, p11c1, p12c2, p13c3, p14c1, p15c2,];

var pfill = [p16f1, p17f1, p18f1, p19f1, p20f1, p21f2, p22f2, p23f2, p24f2, p25f2, p26f3, p27f3, p28f3, p29f3, p30f3,];

var plist0 = [p01c1, p02c2, p03c3,];

// practice

var inactive_btn = '.inactive-btn {display: inline-block; padding: 6px 12px; margin: 0px; font-size: 14px; font-weight: 400; font-family: "Open Sans", "Arial", sans-serif; cursor: pointer; line-height: 1.4; text-align: center; white-space: nowrap; vertical-align: middle; background-image: none; border: 1px solid transparent; border-radius: 4px; color: #333; background-color: #fff; border-color: #ccc; pointer-events: none;}';

var ept_prac1 = {
    item: 'ept_prac1',
    stimulus1: '<style> table {margin-left:auto; margin-right:auto;} td {text-align:left;}'+inactive_btn+'</style>'+
    '<div style="margin:0;"><table>'+
    '<tr><td><img src="img_woman1.png" style="width:100px;"></img></td>'+
    '<td>This woman wrote the book.</td></tr>'+
    '<tr><td><img src="img_woman2.png" style="width:100px;"></img></td>'+
    '<td>This woman read the book.</td></tr></table></div>',
    stimulus2: '<style> table {margin-left:auto; margin-right:auto;} td {text-align:left;}'+inactive_btn+' div {margin:0; padding:0; border:0; outline:0;}</style>'+
    '<div style="margin:0;"><table>'+
    '<tr><td><img src="img_woman1.png" style="width:100px;"></img></td>'+
    '<td>This woman wrote the book.</td></tr>'+
    '<tr><td><img src="img_woman2.png" style="width:100px;"></img></td>'+
    '<td><b><u>Which woman is this?</b></u></td></tr></table></div>',
    choices: ['the woman who wrote the book', 'This woman read the book', 'the woman who read the book', 'This woman wrote the book'],
    correct: '2',
};

var ept_prac2 = {
    item: 'ept_prac2',
    stimulus1: '<style> table {margin-left:auto; margin-right:auto;} td {text-align:left;}'+inactive_btn+' .center {display: flex; justify-content: center; align-items: center;} </style>'+
    '<table>'+
    '<tr><td><img src="img_man2.png" style="width:100px;"></img></td>'+
    '<td>This man walked to the park.</td></tr>'+
    '<tr><td><img src="img_man1.png" style="width:100px;"></img></td>'+
    '<td>This man walked to the mall.</td></tr></table>',
    stimulus2: '<style> table {margin-left:auto; margin-right:auto;} td {text-align:left;}'+inactive_btn+' .center {display: flex; justify-content: center; align-items: center;} </style>'+
    '<table>'+
    '<tr><td><img src="img_man2.png" style="width:100px;"></img></td>'+
    '<td><b><u>Which man is this?</b></u></td></tr>'+
    '<tr><td><img src="img_man1.png" style="width:100px;"></img></td>'+
    '<td>This man walked to the mall.</td></tr></table>',
    choices: ['This man walked to the mall', 'the man who walked to the park', 'This man walked to the park', 'the man who walked to the mall'],
    correct: '1',
};

var ept_prac3 = {
    item: 'ept_prac3',
    stimulus1: '<style> table {margin-left:auto; margin-right:auto;} td {text-align:left;}'+inactive_btn+'</style>'+
    '<div style="margin:0;"><table>'+
    '<tr><td><img src="img_girl1.png" style="width:100px;"></img></td>'+
    '<td>This girl likes Paul.</td></tr>'+
    '<tr><td><img src="img_girl2.png" style="width:100px;"></img></td>'+
    '<td>This girl likes Adam.</td></tr></table></div>',
    stimulus2: '<style> table {margin-left:auto; margin-right:auto;} td {text-align:left;}'+inactive_btn+' div {margin:0; padding:0; border:0; outline:0;}</style>'+
    '<div style="margin:0;"><table>'+
    '<tr><td><img src="img_girl1.png" style="width:100px;"></img></td>'+
    '<td>This girl likes Paul.</td></tr>'+
    '<tr><td><img src="img_girl2.png" style="width:100px;"></img></td>'+
    '<td><b><u>Which girl is this?</b></u></td></tr></table></div>',
    choices: ['This girl likes Adam', 'the girl who likes Paul', 'This girl likes Paul', 'the girl who likes Adam'],
    correct: '3',
};

var ept_prac_list = [ept_prac1, ept_prac2, ept_prac3];