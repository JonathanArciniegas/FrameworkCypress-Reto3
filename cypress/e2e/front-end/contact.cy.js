describe('contact feature', () => {
    it('TC-003: FE | send request by contact ', () => {

        cy.visit('http://www.testingyes.com/onlineshop/')
        cy.get('#contact-link > a').click()
        cy.get(':nth-child(3) > .col-md-6 > .form-control').click()
        cy.get('.col-md-9 > .form-control').click()
        cy.get('.form-footer > .btn').click()
        cy.screenshot();
    });
});