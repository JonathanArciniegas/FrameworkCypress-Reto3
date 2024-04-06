describe('Cart feature', () => {

    it('TC-001: FE | Add new product to cart', () => {
        cy.visit('http://www.testingyes.com/onlineshop/')
        cy.get('[data-id-product="2"] > .thumbnail-container > .thumbnail > img').click()
        cy.get('.add > .btn').click()
        cy.get('.btn-secondary').click()
        cy.screenshot();
    });
    it('TC-002: FE | Delete a product from cart', () => {
        cy.visit('http://www.testingyes.com/onlineshop/')
        cy.get('[data-id-product="2"] > .thumbnail-container > .thumbnail > img').click()
        cy.get('.add > .btn').click()
        cy.get('.btn-secondary').click()
        cy.get('.header > a > .hidden-sm-down').click()
        cy.get('.remove-from-cart > .material-icons').click()
        cy.screenshot();
    });

});