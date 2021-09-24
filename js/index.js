const getUser = async () => {
  // fetch("https://randomuser.me/api/?results=5000")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.results));

  const usersData = await fetch("https://randomuser.me/api/?results=50");
  const jsonUsersData = await usersData.json();
  displayUsers(jsonUsersData.results);
};

const displayUsers = (usersArray) => {
  const main = document.getElementById("users");
  console.log(main);
  main.innerText = "";

  usersArray.forEach((user) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("p-3");
    li.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    main.appendChild(li);
  });
};

const getEmail = async () => {
  const usersData = await fetch("https://randomuser.me/api/?results=50");
  const jsonUsersData = await usersData.json();
  displayEmails(jsonUsersData.results);
};

const displayEmails = (usersArray) => {
  const main = document.getElementById("users");
  main.innerText = "";
  usersArray.forEach((user) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("p-3");
    li.innerText = `${user.email}`;
    main.appendChild(li);
  });
};
