function initialize() {
  console.log("Initialization complete.");
}

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
console.log("Script loaded successfully.");
const data = { name: "John", age: 30 };
console.log(`User: ${data.name}, Age: ${data.age}`);
const sum = (a, b) => a + b;
console.log(`Sum of 5 and 3 is: ${sum(5, 3)}`);
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Error fetching data:", error));
const items = ["Comic Book", "Keychain", "Mistery Box"];
items.forEach(item => console.log("Item:", item));
console.log("All operations completed.");
function greetUser(user) {
  return `Hello, ${user.name}!`;
}
console.log(greetUser({ name: "Alice" }));