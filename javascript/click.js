var shirtOne={
    shirtId: "s001" 
};
var shirtTwo={
    shirtId: "s002"
};
var shirtThree={
    shirtId: "s003" 
};

document.getElementById("c1").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/index2.html" + "?" + shirtOne.shirtId; // Replace with your desired URL
});
document.getElementById("c2").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/index2.html" + "?" + shirtTwo.shirtId; // Replace with your desired URL
});
document.getElementById("c3").addEventListener("click", function() {
    // Redirect to the new webpage
    window.location.href = "/index2.html" + "?" + shirtThree.shirtId; // Replace with your desired URL
});