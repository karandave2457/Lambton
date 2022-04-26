describe("LambtonSuite",function()
{
  it("LaunchLambton",function()
  
  {
      cy.visit("https://www.lambtoncollege.ca")
      cy.title().should('eq',"Welcome | Lambton College")
  })

})