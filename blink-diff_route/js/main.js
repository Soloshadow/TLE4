import BLINKDIFF from '../../node_modules/blink-diff'

var diff = new BlinkDiff({
    imageAPath: '../images/imageBeforeSend',
    imageBPath: '../images/uploadedImage',

    thresholdType: BlinkDiff.THRESHOLD_PERCENT,
    threshold: 0.01, // 1% threshold

    imageOutputPath: '../images'
});
//