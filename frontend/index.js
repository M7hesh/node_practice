const users = require("../routes/users/users");

const listUsers = async () => {
  try {
    const res = await axios.get("http:localhost:3000/users");
    const users = res.data.users;
    let ul = document.querySelector("ul");
    ul.innerHTML = "";
    users.forEach((user) => {
      let li = document.createElement("li");
      li.innerText = user.name;
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};

listUsers();

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.querySelector("#name");
  const age = document.querySelector("#age");
  axios.post("http:localhost:3000/users", { name: name.value, age: age.value });
  name.value = "";
  name.age = "";
  listUsers();
});
