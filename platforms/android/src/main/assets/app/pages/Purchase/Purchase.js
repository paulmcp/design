var frameModule = require('ui/frame');

function onNavBtnTap(args) {
    frameModule.topmost().goBack();
    console.log(' - Back Button Hit from Purchase.XML');
}
exports.onNavBtnTap = onNavBtnTap;


