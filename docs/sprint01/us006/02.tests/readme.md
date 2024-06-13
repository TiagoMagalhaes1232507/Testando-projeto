# US 006 - Reply directly to a comment in a Discussion


**Test 1:** Logged-in user tries to reply to a comment - AC1
    Steps: 
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box.
    Expected result: 
        * The system allows the user to enter a reply and displays a successul message.
        * The system answers with a unsuccessful message regarding the number of characters.

**Test 2:** Non-logged-in user tries to reply to a comment - AC1
    Steps:
1. The visitor, after sellecting a discussion from the homepage list, sellects the button reply bellow a comment on the Discussion page.
    Expected result:
        * The system displays an unsuccessful message providing the characters boundaries and character count.
        * The system displays an unsuccess message due to lack of login ("Yeahhhhh, No access token provided 🤠").

**Test 3:** Navigate to a post that does not have any comments. - AC2
    Steps: 
1. Select a discussion without comments.
    Expected results:
    If a discussion does not contain comments, there is no option to reply.

**Test 4:** User replies to a comment typing more than 20 characters and less than 10000.- AC3
    Steps:
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box with 50 characters.
    Expected result:
        * The system allows the user to submit the reply and displays the success message ("Done-zoo ").

**Test 5:**	User replies to a comment typing less than 20 characters. - AC3	
    Steps:
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box with 10 characters.
    Expected result:
        *  The system answers with an unsuccessful message providing the characters boundaries and character count.
        * The system doesn't submit the reply.

**Test 6:**	User replies to a comment typing more than 10000 characters. - AC3	
    Steps:
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box with 10500 characters.
    Expected result:
        * The system answers with an unsuccessful message providing the characters boundaries and character count.
        * The system doesn't submit the reply.











