const second = () => {
  setTimeout(() => {
    console.log("Async, Hi there!");
  }, 2000);
};
const first = () => {
  console.log("First Hello");
  second();
  console.log("The End Hello");
};
first();
