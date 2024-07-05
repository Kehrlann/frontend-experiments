const greet = require("./greet.js") 

module.exports = () =>
{
    document.getElementById("greeting").textContent = greet("Daniel");
}
