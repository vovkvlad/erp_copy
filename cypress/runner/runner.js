describe('My First Test', function() {
  it('Does not do much!', function() {
    cy.visit('https://www.google.com/');
    cy.get('.gLFyf').type('AAAAA');
    cy.get('.tsf').submit();
    // cy.task('readFile', 'data/credentials.json').then(result => {
    //   console.log('=========result=================');
    //   console.log(result);
    //   console.log('==========================');
    // });
    cy.readCredentials();
    cy.pause();
  })
});