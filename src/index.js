/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    var userFromScratchNeed1300h = 1300;
     var advancedUserNeedOnly800h = 800;
    
  if (knowsProgramming) {
    return Math.ceil(advancedUserNeedOnly800h / config[focus]);
  } else {
    return Math.ceil(userFromScratchNeed1300h / config[focus]);
  }

  };
  