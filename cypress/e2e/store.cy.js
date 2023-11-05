describe('Selenium Academy Demo Store Test', function() {

  it('Registers a New User', function() {
    cy.visit('http://demo-store.seleniumacademy.com/')
    cy.get('.skip-account').click()
    cy.get('#header-account').get('a[title=Register]').click()
    cy.get('#firstname').type('Test')
    cy.get('#middlename').type('User')
    cy.get('#lastname').type('Lastname')
    cy.get('#email_address').type('testuser' + Date.now().toString() + '@test.com')
    cy.get('#password').type('Testpassword1!')
    cy.get('#confirmation').type('Testpassword1!')
    cy.get('.buttons-set button[type=submit]').click()
  })

  it('Logs in as a Registered User', function() {
    cy.visit('http://demo-store.seleniumacademy.com/')
    cy.get('.skip-account').click()
    cy.get('#header-account').get('a[title="Log In"]').click()
    cy.get('#email').type('testr6tusn4w@test.com');
    cy.get('#pass').type('testtest');
    cy.get('#send2').click();
    cy.get('.welcome-msg').should('contain.text', 'Hello, test test tes!');
  });

  it('Adds a Product to the Cart', function() {
    cy.visit('http://demo-store.seleniumacademy.com/')
    cy.get('.product-image').first().click()
    cy.get('.option-white').click()
    cy.get('.option-l').click()
    cy.get('.add-to-cart-buttons button').click()
    cy.get('.success-msg').should('contain.text', 'was added to your shopping cart.')
  })

  it('Checks out a Product', function() {
    cy.visit('http://demo-store.seleniumacademy.com/')
    cy.get('.product-image').first().click()
    let prodTitle;
    cy.get('.product-name span').first().then(($span) => {
      prodTitle = $span.text()
    })
    cy.get('.option-white').click()
    cy.get('.option-l').click()
    cy.get('.add-to-cart-buttons button').click()
    cy.get('.btn-proceed-checkout').first().click()
    cy.get('#onepage-guest-register-button').click()
    cy.get('#billing\\:firstname').type('Test')
    cy.get('#billing\\:middlename').type('User')
    cy.get('#billing\\:lastname').type('Lastname')
    cy.get('#billing\\:email').type('teretglsiure@test.com')
    cy.get('#billing\\:street1').type('123 Main St')
    cy.get('#billing\\:city').type('New York')
    cy.get('#billing\\:region_id').select('New York')
    cy.get('#billing\\:postcode').type('10001')
    cy.get('#billing\\:country_id').select('United States')
    cy.get('#billing\\:telephone').type('1234567890')
    cy.get('#billing-buttons-container button').click()
  })

  it('Goes for all pages and checks for 404', function() {
    cy.visit('http://demo-store.seleniumacademy.com/');
    cy.get("a").each(page => {
      const link = page.prop('href')
      cy.request({
        url: link,
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(200)
      })
    })
  });

});