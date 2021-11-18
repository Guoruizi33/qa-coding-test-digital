import headerActions from "../../actions/headerActions";
import videoActions from "../../actions/videoActions"

describe('Verify Playback', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('Verify play and pause video', () => {
        headerActions.clickHeaderItem("video");
        videoActions.openVideo("Cunnington breaks down at awards");
        videoActions.verifyVideoStatus('playing');
        videoActions.playOrPauseVideo();
        videoActions.verifyVideoStatus('paused');
    });
});