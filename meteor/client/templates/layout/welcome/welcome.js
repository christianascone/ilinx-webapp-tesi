Template.welcome.onRendered(function onRendered() {
  Logs.log("Open Welcome");
});

/**
 * Check if the logged user has done memory game
 * @return {Boolean} If user has done memory game
 */
function userDoneMemoryGame() {
  var user = Meteor.user();
  var userId = user._id;
  var loggedPlayer = undefined;
  if (Players.findOne()) {
    loggedPlayer = Players.findOne().byUserId(userId);
  }
  if (!loggedPlayer) {
    return false;
  }
  // Find all closed series for logged player
  var closedSeries = loggedPlayer.closedScoreSeries().fetch();
  // Check if player has closed at least one score series
  return closedSeries.length > 0;
}

/**
 * Check if user has completed the survey with given index
 * @param  {Strign} surveyIndex Survey index
 * @return {Boolean}             If user has completed the survey
 */
function userDoneSurvey(surveyIndex) {
  var user = Meteor.user();
  // Find survey with index for logged user
  var userSurveyResults = SurveyResults.byUserIdAndIndex(user._id, surveyIndex).fetch();
  return userSurveyResults.length > 0;
}

Template.welcome.helpers({
  /**
   * Check if task 1 (Memory Game) is already done
   * @return {Boolean} True if task is done
   */
  taskMemoryIsDone() {
    return userDoneMemoryGame();
  },
  /**
   * Check if task 2 (survey 1) is already done
   * @return {Boolean} True if task is done
   */
  taskSurvey1IsDone() {
    return userDoneSurvey("1");
  },
  /**
   * Check if task 3/4 (leaderboard and survey 2) is already done
   * @return {Boolean} True if task is done
   */
  taskSurvey2IsDone() {
    return userDoneSurvey("2");
  },
  /**
   * Check if user has completed every task
   * @return {Boolean} If user completed every task
   */
  allTasksCompleted() {
    return userDoneMemoryGame() && userDoneSurvey("1") && userDoneSurvey("2");
  }
});
// Events for dialog template
Template.welcome.events({
  'click .ok-dialog' (event, instance) {
    console.log("ok dialog");
    Blaze._globalHelpers.closeDialog();
  },
  'click .close-dialog' (event, instance) {
    Blaze._globalHelpers.closeDialog();
  },
  // click is the event type and button is the selector
  'click #start-test' (event, instance) {
    Logs.log("Clicked Start Test button");
    Router.go('memory');
  },
});