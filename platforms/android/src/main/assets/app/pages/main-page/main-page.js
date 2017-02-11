"use strict";
var frameModule = require("ui/frame");
var application = require("application");

if (application.android) {
    application.android.on(application.AndroidApplication.activityBackPressedEvent, backEvent);
}

function onNavBtnTap(args) {
    frameModule.topmost().goBack();
    console.log('Button Back Tapped');
}
exports.onNavBtnTap = onNavBtnTap;

function backEvent(args) {
    if (frameModule.topmost().canGoBack() != true) {
        args.cancel = true;
        console.log('Back Cancelled Browser');
    }
    else {
        console.log('Back Not Cancelled Browser');
    }
}
exports.backEvent = backEvent;

function onTapAbout(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/About/About');
    console.log('Navigate to About');
}
exports.onTapAbout = onTapAbout;


function onTapActivity(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Activity/Activity');
    console.log('Navigate to Activity');
}
exports.onTapActivity = onTapActivity;


function onTapAsk(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Ask/Ask');
    console.log('Navigate to Ask');
}
exports.onTapAsk = onTapAsk;


function onTapBook(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Book/Book');
    console.log('Navigate to Book');
}
exports.onTapBook = onTapBook;


function onTapBots(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Bots/Bots');
    console.log('Navigate to Bots');
}
exports.onTapBots = onTapBots;


function onTapBrowser(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Browser/Browser');
    console.log('Navigate to Browser');
}
exports.onTapBrowser = onTapBrowser;


function onTapCalculators(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Calculators/Calculators');
    console.log('Navigate to Calculators');
}
exports.onTapCalculators = onTapCalculators;


function onTapCalendars(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Calendars/Calendars');
    console.log('Navigate to Calendars');
}
exports.onTapCalendars = onTapCalendars;


function onTapCapture(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Capture/Capture');
    console.log('Navigate to Capture');
}
exports.onTapCapture = onTapCapture;


function onTapCards(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Cards/Cards');
    console.log('Navigate to Cards');
}
exports.onTapCards = onTapCards;


function onTapCharts(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Charts/Charts');
    console.log('Navigate to Charts');
}
exports.onTapCharts = onTapCharts;


function onTapCheckIn(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/CheckIn/CheckIn');
    console.log('Navigate to CheckIn');
}
exports.onTapCheckIn = onTapCheckIn;


function onTapCheckOut(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/CheckOut/CheckOut');
    console.log('Navigate to CheckOut');
}
exports.onTapCheckOut = onTapCheckOut;


function onTapCoach(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Coach/Coach');
    console.log('Navigate to Coach');
}
exports.onTapCoach = onTapCoach;


function onTapComments(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Comments/Comments');
    console.log('Navigate to Comments');
}
exports.onTapComments = onTapComments;


function onTapConfirmation(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Confirmation/Confirmation');
    console.log('Navigate to Confirmation');
}
exports.onTapConfirmation = onTapConfirmation;


function onTapContent(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Content/Content');
    console.log('Navigate to Content');
}
exports.onTapContent = onTapContent;


function onTapCoverpage(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Coverpage/Coverpage');
    console.log('Navigate to Coverpage');
}
exports.onTapCoverpage = onTapCoverpage;


function onTapCreate(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Create/Create');
    console.log('Navigate to Create');
}
exports.onTapCreate = onTapCreate;


function onTapDiscovery(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Discovery/Discovery');
    console.log('Navigate to Discovery');
}
exports.onTapDiscovery = onTapDiscovery;

function onTapEmpty(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Empty/Empty');
    console.log('Navigate to Empty');
}
exports.onTapEmpty = onTapEmpty;


function onTapEvents(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Events/Events');
    console.log('Navigate to Events');
}
exports.onTapEvents = onTapEvents;


function onTapFilter(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Filter/Filter');
    console.log('Navigate to Filter');
}
exports.onTapFilter = onTapFilter;


function onTapFind(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Find/Find');
    console.log('Navigate to Find');
}
exports.onTapFind = onTapFind;


function onTapFriends(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Friends/Friends');
    console.log('Navigate to Friends');
}
exports.onTapFriends = onTapFriends;

function onTapGrid(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Grid/Grid');
    console.log('Navigate to Grid');
}
exports.onTapGrid = onTapGrid;


function onTapHome(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Home/Home');
    console.log('Navigate to Home');
}
exports.onTapHome = onTapHome;


function onTapInvite(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Invite/Invite');
    console.log('Navigate to Invite');
}
exports.onTapInvite = onTapInvite;

function onTapLibrary(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Library/Library');
    console.log('Navigate to Library');
}
exports.onTapLibrary = onTapLibrary;


function onTapLists(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Lists/Lists');
    console.log('Navigate to Lists');
}
exports.onTapLists = onTapLists;


function onTapLoading(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Loading/Loading');
    console.log('Navigate to Loading');
}
exports.onTapLoading = onTapLoading;


function onTapLogins(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Logins/Logins');
    console.log('Navigate to Logins');
}
exports.onTapLogins = onTapLogins;


function onTapMaps(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Maps/Maps');
    console.log('Navigate to Maps');
}
exports.onTapMaps = onTapMaps;


function onTapMessaging(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Messaging/Messaging');
    console.log('Navigate to Messaging');
}
exports.onTapMessaging = onTapMessaging;


function onTapNavigations(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Navigations/Navigations');
    console.log('Navigate to Navigations');
}
exports.onTapNavigations = onTapNavigations;


function onTapNews(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/News/News');
    console.log('Navigate to News');
}
exports.onTapNews = onTapNews;


function onTapNotifications(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Notifications/Notifications');
    console.log('Navigate to Notifications');
}
exports.onTapNotifications = onTapNotifications;


function onTapPhotos(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Photos/Photos');
    console.log('Navigate to Photos');
}
exports.onTapPhotos = onTapPhotos;


function onTapPopovers(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Popovers/Popovers');
    console.log('Navigate to Popovers');
}
exports.onTapPopovers = onTapPopovers;


function onTapPrivacy(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Privacy/Privacy');
    console.log('Navigate to Privacy');
}
exports.onTapPrivacy = onTapPrivacy;


function onTapProduct(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Product/Product');
    console.log('Navigate to Product');
}
exports.onTapProduct = onTapProduct;


function onTapProfiles(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Profiles/Profiles');
    console.log('Navigate to Profiles');
}
exports.onTapProfiles = onTapProfiles;


function onTapProgress(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Progress/Progress');
    console.log('Navigate to Progress');
}
exports.onTapProgress = onTapProgress;


function onTapPurchase(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Purchase/Purchase');
    console.log('Navigate to Purchase');
}
exports.onTapPurchase = onTapPurchase;


function onTapRecipe(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Recipe/Recipe');
    console.log('Navigate to Recipe');
}
exports.onTapRecipe = onTapRecipe;


function onTapRecording(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Recording/Recording');
    console.log('Navigate to Recording');
}
exports.onTapRecording = onTapRecording;


function onTapSearch(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Search/Search');
    console.log('Navigate to Search');
}
exports.onTapSearch = onTapSearch;


function onTapSettings(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Settings/Settings');
    console.log('Navigate to Settings');
}
exports.onTapSettings = onTapSettings;


function onTapShare(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Share/Share');
    console.log('Navigate to Share');
}
exports.onTapShare = onTapShare;


function onTapShopping(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Shopping/Shopping');
    console.log('Navigate to Shopping');
}
exports.onTapShopping = onTapShopping;


function onTapSidebars(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Sidebars/Sidebars');
    console.log('Navigate to Sidebars');
}
exports.onTapSidebars = onTapSidebars;


function onTapSignups(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Signups/Signups');
    console.log('Navigate to Signups');
}
exports.onTapSignups = onTapSignups;


function onTapStorefront(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Storefront/Storefront');
    console.log('Navigate to Storefront');
}
exports.onTapStorefront = onTapStorefront;


function onTapTab(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Tab/Tab');
    console.log('Navigate to Tab');
}
exports.onTapTab = onTapTab;


function onTapTimeline(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Timeline/Timeline');
    console.log('Navigate to Timeline');
}
exports.onTapTimeline = onTapTimeline;


function onTapVenue(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Venue/Venue');
    console.log('Navigate to Venue');
}
exports.onTapVenue = onTapVenue;


function onTapVideo(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Video/Video');
    console.log('Navigate to Video');
}
exports.onTapVideo = onTapVideo;


function onTapWalkthroughs(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Walkthroughs/Walkthroughs');
    console.log('Navigate to Walkthroughs');
}
exports.onTapWalkthroughs = onTapWalkthroughs;


function onTapWidgets(args) {
    var topFrame = frameModule.topmost();
    topFrame.navigate('pages/Widgets/Widgets');
    console.log('Navigate to Widgets');
}
exports.onTapWidgets = onTapWidgets

