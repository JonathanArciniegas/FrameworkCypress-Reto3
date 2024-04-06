describe('search bar', () => {
    it('TC-005: FE | Select navigation bar ', () => {
        cy.visit('http://www.testingyes.com/onlineshop/')
        cy.get('.ui-autocomplete-input').click()
        cy.get('button > .material-icons')
    });
});
