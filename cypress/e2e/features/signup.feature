Feature: User Signup  
    As a new user,  
    I want to create an account,  
    So that I can access and manage my book collection.

    Scenario: Successful Signup  
        Given I am on the "signup" page  
        When I fill in "fullName" with "John Doe"  
        And I fill in "username" with "johndoe"  
        And I fill in "password" with "SecurePass123"  
        And I fill in "confirmPassword" with "SecurePass123"  
        And I fill in "gender" with "M" 
        And I click the "Submit" button  
        Then I should see a confirmation message "POST request successful!" 

    Scenario: Unsuccessful Signup
        Given I am on the "signup" page  
        When I fill in "fullName" with "Mateus Viégas"  
        And I fill in "username" with "mateus"  
        And I fill in "password" with "mateus"  
        And I fill in "confirmPassword" with "mateus"  
        And I fill in "gender" with "M" 
        And I click the "Submit" button  
        Then I should see a confirmation message "POST request failed."  