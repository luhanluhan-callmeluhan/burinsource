module.exports = (data) => {
  let w = data.toLowerCase().split(" ");
  if (w.includes("hello")) {
    return (res = "Hello");
  } else if (w.includes("name") && w.includes("your") && w.includes("what")) {
    const randoms = [
      "My name is Burin",
      "People called me Burin",
      "You can call me Burin!",
    ];
    const res = randoms[Math.floor(Math.random() * randoms.length)];
    return res;
  } else return (res = "false");
};
