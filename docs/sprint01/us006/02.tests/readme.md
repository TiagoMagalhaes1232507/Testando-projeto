# US 006 - Reply directly to a comment in a Discussion


**Test 1:** Logged-in user tries to reply to a comment - AC1
    Steps: 
1. After being logged, after sellecting a discussion from the homepage list, the user sellects the button reply bellow a comment on the Discussion page.
2. User types a text in the text box.
    Expected result: 
        * The system allows te user to enter a reply and reply a successfull message - Pass.
        * The system answers with a unsuccess message regarding the number of characters - Fail.

**Test 2:** Non-logged-in user tries to reply to a comment - AC1
    Steps:
1. The visitor, after sellecting a discussion from the homepage list, sellects the button reply bellow a comment on the Discussion page.
    Expected result:
            * The system answers with a unsuccess message regarding the number of characters"Yeahhhhh, comments should be 20 to 10000 characters Yours was 0. " - Fail
            * The system displays an unseccess message due to lack of login ("Yeahhhhh, No access token provided 🤠")- Fail.

**Test 3:** User tries to reply to a comment in a discussion. - AC2

**Test 4:** User enters a comment with more than 20 characters and less than 10000.	The system allows the user to submit the reply and displays the success message ("Done-zoo "). - AC3
**Test 5:**	User enters a comment with less than 20 characters	The system displays an error message ("Yeahhhhh, comments should be 20 to 10000 characters. Yours was 0. ") and doesn't submit the reply. -	AC3
**Test 6:**	User enters a comment with more than 10000 characters	The system truncates the comment to 10000 characters, allows submission, and displays the success message ("Done-zoo "). - AC3



*It is also recommended to organize this content by subsections.* 







