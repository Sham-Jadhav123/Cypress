class Requirement{

    reqbtn="//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Recruitment']"
    addbtn="button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    fname="input[placeholder='First Name']"
    mname="input[placeholder='Middle Name']"
    lname="input[placeholder='Last Name']"
    vaccancy="//div[@class='oxd-select-text-input']"
    email="//div[3]//div[1]//div[1]//div[1]//div[2]//input[1]"
    contact="(//input[@placeholder='Type here'])[2]"
    Save="//button[normalize-space()='Save']"

    Requirementbtn(){
       
       // cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Recruitment']").click();
       cy.xpath(this.reqbtn).click();
    }
    Add(){
       
        cy.get(this.addbtn).click();
    }
    First_name(name){
       
        cy.get(this.fname).type(name)
    }
    Middle_name(midname){
       
        cy.get(this.mname).type(midname)
    }
    Last_Name(lastname){
       
        cy.get(this.lname).type(lastname)
    }
  Select_Vaccancy(){
    cy.xpath(this.vaccancy).click();
     cy.contains("Software Engineer") .scrollIntoView().click();
  }
  Enter_email(Email){
    cy.xpath(this.email).type(Email)
  }
  Enter_Contact(contact){
    cy.xpath(this.contact).type(contact)
  }
  Click_on_Save(){
    cy.xpath(this.Save).click();
  }


}
export default new Requirement();