
/// <reference types = "cypress" />
import 'cypress-xpath';
describe('Orange HRM', () => {
  // Login
  

  beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
     // expect(true).to.equal(true)
     cy.title().should('eq','OrangeHRM');

     cy.get("input[placeholder='Username']").type("Admin")
     cy.get("input[placeholder='Password']").type("admin123")
     cy.get("button[type='submit']").click();

    // cy.url().should('include', '/dashboard');
    // cy.wait(10000);
    cy.wait(2000)
    // cy.get("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Recruitment']").contains('Recruitment').should('be.visible').click();

    })


  //   it(' Add Admin', () => {
     

  //     cy.contains("Admin").click();
  //     // clicks on add button
  //     cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
  //     cy.wait(6000)
  //     // select user
  //     cy.get("div[class='oxd-grid-2 orangehrm-full-width-grid'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click().type("a").get("body").type('{enter}');
      
  //     cy.wait(6000)
  //     // cy.get("body").type('{downArrow}')
  //     // cy.wait(6000)
  //     // cy.get("body").type('{enter}');
  //     cy.get("input[placeholder='Type for hints...']").type("Dummy");
  //     cy.wait(10000)
  //     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click().type("e").get("body").type('{enter}');
  //     cy.wait(10000)
  //     // cy.get('.oxd-select-dropdown --option-bottom') // Adjust this to match your option selector
  //     // .should('be.visible');
  //     // cy.get(".oxd-select-dropdown --option-bottom").find('option') // Get all option elements
  //     // .then(($options) => {
  //     //   const totalCountries = $options.length; // Count total countries
  //     //   cy.log(`Total countries: ${totalCountries}`); // Log the count
  //     //  cy.wait(10000)

  //     //   // Example: Select the first 3 countries
  //     //   for (let i = 0; i < Math.min(totalCountries, 1); i++) {
  //     //     cy.get(".oxd-select-dropdown --option-bottom").select($options[i].innerText); // Select country by visible text
  //     //   }
  //     // });

  //     // Enter Username 
  //     cy.get("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type("Shyam Jadhav")
  //     cy.get("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type("Shyam@123");
  //     cy.get("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type("Shyam@123");
  //     cy.get("button[type='submit']").click();
   
  
  // })



//   it(' My Info', () => {

//     // my info
//     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)").click();
//     cy.get("input[placeholder='First Name']").clear().type("Shyam")
//     cy.get("input[placeholder='Middle Name']").clear().type("P")
//     cy.get("input[placeholder='Last Name']").clear().type("Jadhav")
//     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").clear().type("268")
//     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").clear().type("100")
//     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").clear().type("MH21ESG5666")
//     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").clear().type("2024-12-12").click();
//     cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click();
//     cy.xpath("//div[contains(text(),'Single')]").click
//      // select country
//     //  cy.wait(6000)
//     //  cy.contains("Chinese") // Replace with the country you want to select
//     //  .scrollIntoView()
//     //  .click();
//      cy.wait(6000)
//      //cy.xpath("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[1]")1
//      //cy.get(".oxd-select-text-input") 3
//      //cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])")2

//     //  cy.contains("Zambian") // Replace with the country you want to select
//     //    .scrollIntoView()

//      //cy.get(".oxd-select-text oxd-select-text--active")
//      cy.xpath("//div[contains(@class, 'oxd-select-option')]").then(($options) => {
//       // Count total number of countries
//       const totalCountries = $options.length;
//       cy.log(`Total number of countries: ${totalCountries}`);
//       cy.wait(6000)

//       for (let i = 0; i < totalCountries; i++) {
//         cy.xpath(`(//div[contains(@class, 'oxd-select-option')])[${i + 1}]`,{timeout:1000000}) // Adjust the index for 1-based XPath
//           .scrollIntoView() // Scroll to the current option
//           .should('be.visible') // Ensure the option is visible
//           .then($option => {
//             const optionText = $option.text().trim(); // Get the text of the option
     
//             // Log the current option being checked
//             cy.log(`Checking option: ${optionText}`);
//              cy.wait(100000)
//             // Check if the text matches "Indian"
//             if (optionText === 'Indian') {
//               cy.wrap($option).click(); // Click on the option if it matches
//               cy.log(`Clicked on: ${optionText}`); // Log the clicked option
//               return; // Exit the loop once found
//             }
     
//             // Optional: Slow down the scrolling
//             cy.wait(500); // Wait for half a second before checking the next option
//           });
//       }


      

         
//   });
// });



it(' My Info', () => {
  cy.wait(8000);

  cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1) > span:nth-child(2)").click();
  cy.wait(12000)
  cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click();
  
  cy.wait(7000)
  cy.xpath("//div[contains(@class, 'oxd-select-option')]") 
  .then(options => {
    const totalCountries = options.length; 
    cy.log(`Total number of countries: ${totalCountries}`); 

    const randomIndex = Math.floor(Math.random() * totalCountries); // Generate a random index
    const randomCountry = options[randomIndex]; // Get the random country option

    // Click the random country option
    cy.wrap(randomCountry).click();
  });
  cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click();
 cy.wait(6000)
  cy.get("body").type('{downArrow}')
  cy.get("body").type('{downArrow}')
        cy.wait(6000)
     cy.get("body").type('{enter}');



 });

  })