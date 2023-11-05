describe('Math Testing', function() {
  it('Check Math Function', function() {
    cy.visit('http://suninjuly.github.io/math.html')
    cy.get('#input_value').then(($val) => {
      const x = parseInt($val.text())
      const mathFuncValue = Math.log(Math.abs(12*Math.sin(x)));
      cy.get('#answer').type(mathFuncValue.toString())
    })
    cy.get('[for="robotCheckbox"]').click()
    cy.get('[for="robotsRule"]').click()
    cy.get('.btn').click()
  })
})