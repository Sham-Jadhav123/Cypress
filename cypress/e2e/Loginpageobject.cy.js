import  Test from "../e2e/Pages/Homepage.js";
import Requirement from "./Pages/Requirement.js";

describe("login Test case using cypress", () => {
//const Test=new test()

    beforeEach("login",() =>{


        Test.visit();
        Test.Username();
        Test.password();
        Test.clickon();
        

    })


    it("Requirement",() =>{

     Requirement.Requirementbtn();
     Requirement.Add();
     Requirement.First_name("Shyam");
     Requirement.Middle_name("P")
     Requirement.Last_Name("Jadhav")
     Requirement.Select_Vaccancy()
     Requirement.Enter_email("Shamj@siddhatech.com")
     Requirement.Enter_Contact("7498219685")
     Requirement.Click_on_Save()
       

    })







})