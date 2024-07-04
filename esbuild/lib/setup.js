import {greet} from "./greet.js";

export function setup() {
    document.getElementById("greeting").textContent = greet("Daniel");
}