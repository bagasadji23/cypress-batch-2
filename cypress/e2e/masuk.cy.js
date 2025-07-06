describe('verivikasi fitur login akun', () => {
  it('success login', () => {
    cy.login('standard_user', 'secret_sauce')
  })
})