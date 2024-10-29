describe('template spec', () => {
    beforeEach(() => {
      // This will run before each 'it' block
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
 
    it("Directory", () => {
            cy.get("input[placeholder='Username']").type('Admin');
            cy.get("input[placeholder='Password']").type('admin123')
            cy.get("button[type='submit']").click().wait(1000);
            cy.contains("My Info").click().wait(1000);    
// Open the dropdown menu
cy.xpath("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[1]").click();
 
// Count the total number of options in the dropdown
cy.xpath("//div[contains(@class, 'oxd-select-option')]")
  .then($options => {
    const optionCount = $options.length; // Count the elements
    cy.log(`Total number of options in dropdown: ${optionCount}`);
  });
        })
 
 
});
