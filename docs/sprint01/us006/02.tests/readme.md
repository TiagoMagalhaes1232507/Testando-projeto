# US 006 - Reply directly to a comment in a Discussion


**Test 1:** Logged-in user tries to reply to a comment - AC1
    Steps: 
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box.
    Expected result: 
        * The system allows the user to enter a reply and displays a success message - Pass.
        * The system answers with a unsuccess message regarding the number of characters - Fail.

**Test 2:** Non-logged-in user tries to reply to a comment - AC1
    Steps:
1. The visitor, after sellecting a discussion from the homepage list, sellects the button reply bellow a comment on the Discussion page.
    Expected result: Fail
        * The system answers with a unsuccess message regarding providing the characters boundaries and characters numbers typed.
        * The system displays an unseccess message due to lack of login ("Yeahhhhh, No access token provided 🤠").

**Test 3:** Navigate to a post that does not have any comments. - AC2
    Steps: 
1. Select a discussion without comments.
    Expected results: Fail
    If a discussion does not contain comments, there is no option to reply.

**Test 4:** User replies to a comment typing more than 20 characters and less than 10000.	 - AC3
    Steps:
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box with 50 characters.
    Expected result: Pass
        * The system allows the user to submit the reply and displays the success message ("Done-zoo ").

**Test 5:**	User replies to a comment typing less than 20 characters. - AC3	
    Steps:
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box with 10 characters.
    Expected result: Fail
        * The system answers with a unsuccess message regarding providing the characters boundaries and characters numbers type
        * The system displays an error message and doesn't submit the reply.

**Test 6:**	User replies to a comment typing more than 10000 characters. - AC3	
    Steps:
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box with 10500 characters.
    Expected result: Fail
        * The system answers with a unsuccess message regarding providing the characters boundaries and characters numbers type
        * The system displays an error message and doesn't submit the reply.

**Test 7:** User replies to a comment typing 0 characters. - AC3
	Steps:
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. * The system displays an unsuccess message regarding providing the characters boundaries and characters numbers type

    Expected results: Fail
        * The system answers with a unsuccess message regarding providing the characters boundaries and characters numbers type.
        * The system displays an error message and doesn't submit the reply.










