class employee {
    clickAddEmployee(add) {
        cy.xpath("//a[contains(text(),'Add Employee')]").click(add)
    }
    setClearDetails() {
        cy.get('#name').focus().clear()
        cy.get('#dob').focus().clear()
        cy.get('#salary').focus().clear()
        cy.xpath("//input[@id='joining date']").focus().clear()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/input[1]").focus().clear()
        cy.get('#contact').focus().clear()
    }
    setEmployeeValues(name, dob, salary, joiningdate, relievingdate, contact, status) {
        cy.get('#name').type(name)
        cy.get('#dob').type(dob)
        cy.get('#salary').type(salary)
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/input[1]").type(relievingdate), { force: true }
        cy.get('#contact').type(contact)
        cy.xpath("//input[@id='joining date']").type(joiningdate)
        cy.get('#status', { timeout: 10000 }).should('exist').select(status, { force: true })
    }
    clickSubmit(submit) {
        cy.xpath("//button[contains(text(),'Submit')]").click(submit)
    }
    clickDelete(remove) {
        cy.xpath("//button[contains(text(),'Delete')]").click(remove)
    }
    clickEdit(edit) {
        cy.xpath("//a[contains(text(),'Edit')]").click(edit)
        cy.get('#salary').focus().clear()
        cy.get('#salary').type('30000')
        cy.get('#status', { timeout: 10000 }).should('exist').select('active', { force: true })
        cy.xpath("//button[contains(text(),'Submit')]").click()
    }
    invalidValidation() {
        cy.xpath("//td[contains(text(),'-20000')]").should('contains.text', '-20000')
        cy.xpath("//td[contains(text(),'safdagdggad')]").should('contains.text', 'safdagdggad')
    }
    validValidation() {
        cy.xpath("//td[contains(text(),'Mahin')]").should('contains.text', 'Mahin')
        cy.xpath("//td[contains(text(),'active')]").should('contains.text', 'active')
    }
    deleteValidation() {
        cy.xpath("//td[contains(text(),'30000')]").should('not.exist')
    }
    editValidation() {
        cy.xpath("//td[contains(text(),'30000')]").should('contains.text', '30000')
        cy.xpath("//td[contains(text(),'active')]").should('contains.text', 'active')
    }
    editValidationBefore() {
        cy.xpath("//td[contains(text(),'20000')]").should('contains.text', '20000')
        cy.xpath("//td[contains(text(),'active')]").should('contains.text', 'active')
    }

}

export default employee