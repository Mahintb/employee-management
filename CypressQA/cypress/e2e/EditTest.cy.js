
describe('EM Suite', function () {
  it('Valid and Invalid', function () {

    cy.visit('')
    cy.xpath("//a[contains(text(),'Add Employee')]").click()
    cy.get('#name').focus().clear()
    cy.get('#name').type('Mahin')
    cy.get('#dob').focus().clear()
    cy.get('#dob').type('11/05/1999')
    cy.get('#salary').focus().clear()
    cy.get('#salary').type('20000')
    cy.xpath("//input[@id='joining date']").focus().clear()
    cy.xpath("//input[@id='joining date']").type('10/05/2024')
    cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/input[1]").focus().clear()
    cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/input[1]").type('2/05/2024')
    cy.get('#contact').focus().clear()
    cy.get('#contact').type('9605827658')
    cy.get('#status', { timeout: 10000 }).should('exist').select('inactive', { force: true })
    cy.xpath("//button[contains(text(),'Submit')]").click()

    //validation before edit

    cy.xpath("//td[contains(text(),'20000')]").should('contains.text','20000')
    cy.xpath("//td[contains(text(),'inactive')]").should('contains.text','inactive')

    cy.wait(6000)

    

    // edit flow starts from here
    cy.xpath("//a[contains(text(),'Edit')]").click()
    cy.get('#salary').focus().clear()
    cy.get('#salary').type('30000')
    cy.get('#status', { timeout: 10000 }).should('exist').select('active', { force: true })
    cy.xpath("//button[contains(text(),'Submit')]").click()

    //validation
    cy.xpath("//td[contains(text(),'30000')]").should('contains.text','30000')
    cy.xpath("//td[contains(text(),'active')]").should('contains.text','active')

  });
});


