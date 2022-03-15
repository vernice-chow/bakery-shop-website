importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
//For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);


// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyBWDNKdVrF0j0nTGPOr4jDnHo59dVxBl5g",
    authDomain: "test-f4a1e.firebaseapp.com",
    databaseURL: "https://test-f4a1e.firebaseio.com",
    projectId: "test-f4a1e",
    storageBucket: "test-f4a1e.appspot.com",
    messagingSenderId: "1013916114339",
    appId: "1:1013916114339:web:1965ccbc74de240483ce16",
    measurementId: "G-H9EY4PGYFH"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.usePublicVapidKey("ct_Ax1dATlARtvy2wtZ6Ap:APA91bGHz5-c2JGR-5sT5uZL4ZYVwCv_IaHD8jI0xhhUeFQKAuAoEXHF3AdtDLojdO3NIfyDtztZW4kxWRXrVaVWJHhkG-8dmephIcwpwCXxJ_bgvQClsAw4G24jsVMgC3zaSnV-ZYqj");

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});