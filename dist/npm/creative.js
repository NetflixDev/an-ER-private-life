/**
 * This animation preset uses ff0000-ad-tech/ad-canvas package to animate canvas-rendered elements
 * See here for more details: https://github.com/ff0000-ad-tech/ad-canvas
 */
var Creative = function() {
  // percentage of iris animation that has to elapse before content underneath is completely visible
  var irisOffscreenAnimPercent = 0.15;
  this.play = function() {
    console.log('Creative.play()');

    var irisDelay = Creative.irisDelay;
    var irisDuration = Creative.irisDuration;
    var irisLen = Math.max(adParams.adWidth, adParams.adHeight);
    View.endFrame.iris.tween.to(View.endFrame.iris.circle, irisDuration, {
      delay: irisDelay,
      scale: irisLen * 0.1,
      ease: Power2.easeOut
    });
    View.endFrame.iris.tween.start();

    var logoDelay = irisDelay + irisOffscreenAnimPercent * irisDuration;
    TweenLite.delayedCall(logoDelay, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// time to delay start of iris animation (in seconds)
Creative.irisDelay = 0.5;

// how long iris expansion lasts
Creative.irisDuration = 6;

// color of iris screen
Creative.irisColor = 'white';

// how long zoom animates for (in seconds)
Creative.zoomDuration = 1.7;

// how much to scale the keyart intro frame
Creative.zoomAmount = 5;

// indicates whether to use canvas-rendered iris
Creative.usesCanvasIris = true;
