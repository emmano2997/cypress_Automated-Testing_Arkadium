# Technical Test Assignment forGamesQA Engineer

## Automated Testing

programming language: JavaScript
framework : Cypress 

Test 1: Support button and verify all required sections
Status: PASSED
Description: Verify that clicking the support icon opens a modal containing all required support sections.
Assertions Passed:
Support button is visible and clickable
All four required support sections are displayed in the modal
Modal interaction works correctly

Test 2: Crosswords search functionality
Status: PASSED
Description: Test the search functionality by searching for "Crosswords" and verify results.
Assertions Passed:
Sidebar menu opens correctly
Search input accepts text. But don’t execute search on Enter
Results page loads with proper URL parameters
Search term is properly highlighted
Relevant game cards are displayed
Crossword games are present in results

Test 3: Best Games section verification
Status: PASSED
Description: Verify that the Best Games section contains all expected popular games.
Assertions Passed:
Navigation to Best section works correctly
Games grid container is properly displayed
All 7 expected popular games are present
Sufficient number of game cards are displayed (≥7)

