import employee from "../../PageObjects/PageLocators";

describe('EM Suite', function () {
  it('Delete', function () {

    cy.visit('')
    const ln = new employee()
    ln.clickAddEmployee()
    ln.setClearDetails()
    ln.setEmployeeValues("Mahin", "11/05/1999", "20000", "10/05/2024", "20/07/2025", "9605827658", "active")
    ln.clickSubmit()
    cy.wait(3000)

    ln.clickDelete()   // delete flow starts from here

    ln.deleteValidation()   //validation
  });
});



