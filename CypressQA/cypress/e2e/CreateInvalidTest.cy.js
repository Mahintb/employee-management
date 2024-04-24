
describe('EM Suite', function()  {
  it('Invalid', function() {
   
      cy.visit('')
       cy.xpath("//a[contains(text(),'Add Employee')]").click()
       cy.get('#name').focus().clear()
       cy.get('#name').type('Ravi')
       cy.get('#dob').focus().clear()
       cy.get('#dob').type('18/04/1940')
       cy.get('#salary').focus().clear()
       cy.get('#salary').type('-20000')
       cy.xpath("//input[@id='joining date']").focus().clear()
       cy.xpath("//input[@id='joining date']").type('18/04/1940')
       cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/input[1]").focus().clear()
       cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/input[1]").type('18/04/1940')
       cy.get('#contact').focus().clear()
       cy.get('#contact').type('fdsghfdgh')
       cy.get('#status', { timeout: 10000 }).should('exist').select('active', { force: true })
       cy.xpath("//button[contains(text(),'Submit')]").click()
       //validation 
       cy.xpath("//td[contains(text(),'-20000')]").should('contains.text','-20000')
       

    });
});



