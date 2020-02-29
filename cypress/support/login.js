function readCredentials(filePath) {
  cy.log('Trying to read credentials');
  cy.task('readFile', 'data/credentials.json').then(result => {
    console.log('==========result================');
    console.log(result);
    console.log('==========================');
    
    return result;
  });
}

Cypress.Commands.add('readCredentials', readCredentials);