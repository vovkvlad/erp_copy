describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('https://www.google.com/');
    cy.get('.gLFyf').type('AAAAA');
    cy.get('.tsf').submit();
  })
});