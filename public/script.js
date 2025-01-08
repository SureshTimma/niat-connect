// script.js

import { auth, provider } from './firebase-config.js'; // Import Firebase auth and provider

// Add event listener to the Google Sign-In button
document.getElementById('google-sign-in-btn').addEventListener('click', async () => {
  try {
    // Sign in with Google
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('User signed in:', user);
    // You can also display the user info in the HTML if you want
    document.getElementById('user-info').innerHTML = `
      <p>Welcome, ${user.displayName}</p>
      <img src="${user.photoURL}" alt="User Image">
    `;
  } catch (error) {
    console.error('Error during sign-in:', error.message);
  }
});
