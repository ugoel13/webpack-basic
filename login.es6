document.write("login.js loaded \n");
let login = (username, password) => {
  if (username !== "admin" || password !== "admin") {
    console.log("username or password is incorrect");
  }
};

login("admin", "password");
