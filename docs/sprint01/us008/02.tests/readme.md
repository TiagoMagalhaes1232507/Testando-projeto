# US 008 - To vote on a Discussion

# 1. Tests 

**Test Case for Acceptance Criteria 1: Vote Button Display**

Objective: Verify that the "Vote" button (upvote and downvote) is displayed correctly for each discussion post.

Steps:

1. Login as a user: log in to the DDDForum application with a valid user account.
2. Navigate to a discussion page: access a page containing a discussion post.
3. Verify button presence: check that the "Vote" button (upvote and downvote) is visible within the discussion post.
4. Confirm button functionality: attempt to click the "Vote" button (upvote and downvote) to ensure it responds to user interaction.
5. Repeat for multiple posts: repeat steps 1-3 for several different discussion posts to ensure consistent behavior across multiple posts.

Expected Results:

* The "Vote" button (upvote and downvote) should be displayed correctly within each discussion post.
* The "Vote" button (upvote and downvote) should be clickable and respond to user interaction.

Pass/Fail Criteria:

* The test case passes if the "Vote" button (upvote and downvote) is consistently displayed, clickable, and functional for all discussion posts tested.
* The test case fails if the button (upvote and downvote) is missing, unresponsive, or inconsistent in its behavior across different posts.

**Test Case for Acceptance Criteria 2: Casting a Vote**

Objective: Verify that users can successfully cast a vote on a discussion post.

Steps:

1. Login as a user: log in to the DDDForum application with a valid user account.
2. Navigate to a discussion page: access a page containing a discussion post with the "upvote/downvote" buttons displayed.
3. Click the vote button: click on the "upvote/downvote" button associated with the chosen discussion post.
5. Verify vote count: check that the vote count for the discussion post reflects the user's vote (increased by 1 for upvote or decreased by -1 for downvote).

Expected Results:

* The system successfully registers the user's vote on the selected discussion.
*   The vote count for the discussion is updated to reflect the user's vote.

Pass/Fail Criteria:

* The test case passes if the user can successfully cast a vote on the discussion and see the vote count updated.
* The test case fails if the vote fails to register, the vote count is not updated or the system encounters errors during the voting process.

**Test Case for Acceptance Criteria 3: Displaying Vote Count**

Objective: Ensure the vote count is displayed accurately and consistently for all discussions.

Steps:

1. Login as a user: log in to the DDDForum application with a valid user account.
2 Navigate to a discussion list page: access a page that displays a list of discussion posts.
2. Verify vote count presence: check that each discussion entry has a designated area displaying the vote count, a numerical value (total votes).
3. Validate vote count accuracy: cast a vote on one of the discussions (upvote or downvote). Refresh the page and confirm the vote count reflects the newly cast vote (increased or decreased by 1 depending on the vote type).
4. Test multiple discussions: repeat steps 2 and 3 for several different discussions to ensure consistent vote count display and update across various posts.

Expected Results:

* Each discussion on the list page should have a clearly visible vote count.
* The vote count should accurately reflect the total number of votes received by the discussion.
* Casting a vote should update the vote count accordingly (increase for upvote, decrease for downvote).
* The vote count display and update behavior should be consistent across all discussions.

Pass/Fail Criteria:

* The test case passes if the vote count is consistently displayed for all discussions, accurately reflects the total votes, and updates correctly after users cast votes.
* The test case fails if the vote count is missing, inaccurate, or doesn't update as expected when users interact with the voting system.

**Test Case for Acceptance Criteria 4: Changing a Vote**

Objective: Verify that users can successfully change their vote on a discussion post.

Steps:

1. Login as a user: log in to the DDDForum application with a valid user account.
2. Navigate to a discussion page: locate a discussion post with a voting mechanism.
3. Cast an initial vote: click the "Vote" button to register an initial vote (upvote or downvote) on the chosen discussion post.
4. Verify initial vote: confirm that the vote is reflected visually (vote count update).
5. Change the vote: click the "Vote" button again to cast a different vote (opposite of the initial vote) on the same discussion post.
6. Verify vote change: ensure the user interface reflects the updated vote (vote count update). 

Expected Results:

* The system should allow the user to change their vote successfully.
* The visual representation of the vote count should update accordingly to reflect the new vote.

Pass/Fail Criteria:

* The test case passes if the user can successfully change their vote on a discussion post, and the system reflects the updated vote accurately.
* The test case fails if the system prevents users from changing their votes, or the vote change is not reflected correctly in the vote count.

**Test Case for Acceptance Criteria 5: Preventing Multiple Votes**

Objective: verify that the system enforces a limit of one vote per user per discussion.

Steps:

1. Login as a user: log in to the DDDForum application with a valid user account..
2. Navigate to a discussion: locate and open a discussion post.
3. Cast a vote: interact with the "Vote" button to cast a vote on the selected discussion (upvote and downvote).
4. Attempt a second vote: click the "Vote" button again on the same discussion.

Expected Results:

* The system should register the user's initial vote on the discussion.
* Upon attempting a second vote, the system should prevent the user from submitting another vote.
* The application should provide feedback to the user indicating they cannot vote again (disabled button).

Pass/Fail Criteria:

* The test case passes if the system successfully prevents the user from casting a second vote on the same discussion.
* The test case fails if the user is able to submit multiple votes.

*Test cases for AC6 (viewing voters) and AC7 (preventing voting on own discussion) are considered additional functionalities They are not part of the core acceptance criteria, and are not included here.* 

