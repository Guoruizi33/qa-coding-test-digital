import headerElement from "../pageElements/headerElements"

var headerActions ={
    clickHeaderItem: function(itemName){
        cy.get(headerElement.navigationBar).contains(itemName, {matchCase: false}).click({ force: true });
        cy.url().should('include',itemName.toLowerCase().replace(/\ /g, '-'))
    }
}

export default headerActions;