document.cookie = "username=JohnDoe";
const d = new Date();
d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
let expires = "expires=" + d.toUTCString();
document.cookie = "username=JohnDoe;" + expires + ";path=/";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Usage:
setCookie("user_id", "12345", 7); // Sets a cookie named "user_id" with value "12345" that expires in 7 days.
