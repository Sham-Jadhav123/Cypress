class Test {


    Uname="input[placeholder='Username']"
    Pwd="input[placeholder='Password']"
    loginbtn="button[type='submit']"

    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.wait(6000)
    }
    Username() {
        cy.get(this.Uname).type("Admin")
    }


    //pwd=
 password(){
    cy.get(this.Pwd).type("admin123")

  }
 clickon(){
    cy.get(this.loginbtn).click();

 }

}
export default  new Test();