import headerActions from "../../actions/headerActions";
import latestNewsActions from "../../actions/latestNewsActions";

describe('Verify Article', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('Verify article title, description and hero Image is present', () => {
        headerActions.clickHeaderItem("Football");
        headerActions.clickHeaderItem("Latest News");
        latestNewsActions.verifyArticleGroupList(4);
    });
});