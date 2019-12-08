// listen for auth status changes.  It calls the setupUI function in the index.js file in the
//scripts folder.
auth.onAuthStateChanged(user => {
  if (user) {
      setupUI(user);
  } else {
    setupUI();
  }
});





// logout code attached to the sign-out button on the nav bar.
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  document.location.href="index.html"
});

