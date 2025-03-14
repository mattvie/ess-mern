Feature: User Login
  As a user,  
  I want to login on my account,  
  So that I can access and manage my book collection.

  Scenario: Successful Login  
    Given I am on the "login" page  
    When I fill in "username" with "mateus"  
    And I fill in "password" with "mateus"  
    And I click the "submit" button  
    Then I should see a confirmation message "POST request successful!"  

  Scenario: Unsuccessful Login (Non-existent user)  
    Given I am on the "login" page  
    When I fill in "username" with "mateuss"  
    And I fill in "password" with "mateus"  
    And I click the "Submit" button  
    Then I should see a confirmation message "POST request failed."  