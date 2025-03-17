Feature: Books Management  
  As a user,  
  I want to manage my book collection,  
  So that I can keep track of my books.

  Scenario: View all books  
    Given I am on the "books" page  
    Then I should see a list of available books 

  Scenario: View a specific book  
    Given I am on the "books" page  
    And I see a book titled "O Poder do Hábito" by "Charles Duhigg" with ID "3"
    When I click the "View Details" button of the book titled "O Poder do Hábito"
    Then I should be redirected to "books/3"
    And I should see the details of "O Poder do Hábito"
    And I should see the description "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona..."

  Scenario: Create a new book  
    Given I am on the "write" page  
    When I fill in "name" with "A Startup Enxuta"  
    And I fill in "author" with "Eric Ries"  
    And I fill in the "description" field with "Na vanguarda do empreendedorismo do século 21, Eric Ries criou uma abordagem revolucionária para a administração, que gerou um movimento que está transformando a maneira como os novos produtos são criados, desenvolvidos e lançados."  
    And I click the "submit" button  
    Then I should see a confirmation message "POST request successful!"
    And I should see the "A Startup Enxuta" title at the "books" page