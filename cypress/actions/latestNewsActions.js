import latestNewsPageElements from "../pageElements/latestNewsPageElements";

var latestNewsActions ={
    verifyArticleGroupList:function(articleNumber){
        cy.get('.habitual-group--habitual article').should('have.length',articleNumber).within(()=>{
            cy.get(latestNewsPageElements.articleTitle).should('have.length',articleNumber);
            cy.get(latestNewsPageElements.articleDescription).should('have.length',articleNumber);
            cy.get(latestNewsPageElements.articleHeroImage).should('have.length',articleNumber);
        });
    }
}

export default latestNewsActions;