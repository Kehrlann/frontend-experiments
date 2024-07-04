export function greet(name) {
    return `Hello ${name}!`;
}

export function setup() {
    document.getElementById("greeting").textContent = greet("Daniel");
}

// Setup only runs if "document" is defined, which is the case in the browser but not in
// Node-based tests
if (typeof document !== 'undefined' && document) {
    setup();
}
