Feature: Google Main Page

  I want to open a search engine


  Scenario Outline: Opening a search engine page
    Given I open Google page
    Then I see '<title>' in the title
    Examples:
      | title  |
      | Google |
      | Raju   |
      | Anagha |