(() => {
  if (!window.firebase) {
    throw new Error("Firebase SDK no está cargado.");
  }
  if (!window.firebaseConfig) {
    throw new Error("firebaseConfig no está definido.");
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(window.firebaseConfig);
  }

  const auth = firebase.auth();
  const db = firebase.firestore();

  window.firebaseServices = {
    auth,
    db,
    firebase
  };
})();
