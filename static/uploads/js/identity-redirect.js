// Check if the URL contains the invite token hash
if (window.location.hash.indexOf("invite_token") != -1) {
    // If the token is found, redirect to the correct admin path
    window.location = "/admin/" + window.location.hash;
}
