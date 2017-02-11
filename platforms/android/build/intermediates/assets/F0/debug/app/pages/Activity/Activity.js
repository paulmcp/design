var frameModule = require('ui/frame');

function onNavBtnTap(args) {
    frameModule.topmost().goBack();
    console.log(' - Back Button Hit from Activity.XML');
}
exports.onNavBtnTap = onNavBtnTap;

function pageLoaded(args) {
    var page = args.object;
    var itemsArr = [];
    for (var i = 1; i <= 64; i++) {
        itemsArr.push({
    title1: "List item " + i,
    title2: "Lorem ipsum dolor sit amet",
    title3: "Lorem ipsum dolor sit amet",
    title4: "Lorem ipsum dolor sit amet",
    title5: "Lorem ipsum dolor sit amet",
    title6: "Lorem ipsum dolor sit amet",
    title7: "Lorem ipsum dolor sit amet",
    title8: "Lorem ipsum dolor sit amet",
    title9: "Lorem ipsum dolor sit amet",
    title10: "Lorem ipsum dolor sit amet",
    image1: "~/images/mountain.jpg",
    image2: "~/images/mountain.jpg",
    image3: "~/images/mountain.jpg",
    image4: "~/images/mountain.jpg",
    image5: "~/images/mountain.jpg",
    image6: "~/images/mountain.jpg",
    image7: "~/images/mountain.jpg",
    image8: "~/images/mountain.jpg",
    image9: "~/images/mountain.jpg",
    image10: "~/images/mountain.jpg"
 });
    }
    page.bindingContext = { items: itemsArr };
}
exports.pageLoaded = pageLoaded; 