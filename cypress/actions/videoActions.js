import videoPageElement from "../pageElements/videoPageElements";

var videoActions ={

    openVideo:function (videoName){
        cy.get(videoPageElement.videoList).within(()=>{
            cy.get(videoPageElement.videoItem(videoName)).click();
        })
    },
    verifyVideoStatus:function(status){
        cy.get(videoPageElement.playControlButton).should('have.class', 'vjs-'+status);
    },
    playOrPauseVideo:function(){
        cy.get(videoPageElement.playControlButton).click({ force: true });
    }
}

export default videoActions;