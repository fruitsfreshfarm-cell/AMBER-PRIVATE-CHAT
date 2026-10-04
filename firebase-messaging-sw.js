importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBLxvT7qQpZNG9a_oDHKdhlUlHu0UoYxZE",
  authDomain: "privatechat-d07cc.firebaseapp.com",
  databaseURL: "https://privatechat-d07cc-default-rtdb.firebaseio.com",
  projectId: "privatechat-d07cc",
  storageBucket: "privatechat-d07cc.firebasestorage.app",
  messagingSenderId: "1001843094093",
  appId: "1:1001843094093:web:406588f476808a1deba204"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || "Private Chat";
  const body = (payload.notification && payload.notification.body) || "New message";
  self.registration.showNotification(title, { body, icon: "./icon.png" });
});
