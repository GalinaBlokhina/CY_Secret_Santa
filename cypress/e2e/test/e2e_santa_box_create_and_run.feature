Feature: user logins on Secret Santa website, creates a box, runs a draw 

Scenario: user logins and creates a box successfully
Given user logs in on Secret Santa login page with data table
    | login          | password |
    | galina-a@yandex.ru | Test1234  |
Then user creates a box

Scenario: user adds participants
Then user gets an invitation link

Scenario: participant1 joins the box
Then participant enters via invitation link
Then participant1 logs in
    | login                   | password |
    | galina-a+test1@yandex.ru| Test1234  |
Then participant fills in participant's questionnaire

Scenario: participant2 joins the box
Then participant enters via invitation link
Then participant2 logs in
    | login                   | password |
    | galina-a+test2@yandex.ru| Test1234  |
Then participant fills in participant's questionnaire

Scenario: participant3 joins the box
Then participant enters via invitation link
Then participant3 logs in
    | login                   | password |
    | galina-a+test3@yandex.ru| Test1234  |
Then participant fills in participant's questionnaire

Scenario: the draw is successfully run
Given user logs in on Secret Santa login page with data table
    | login              | password |
    | galina-a@yandex.ru | Test1234  |
Then user runs a draw

Scenario: after the draw participant1 gets notification
Then participant1 gets notification

Scenario: after the draw participant2 gets notification
Then participant2 gets notification

Scenario: after the draw participant3 gets notification
Then participant3 gets notification

Scenario: when the draw is over user deletes the box
Then user logins via API
Then user deletes the box
