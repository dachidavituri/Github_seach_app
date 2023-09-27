const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const title = document.querySelector(".name");
const dark = document.getElementById("dark-theme");
const light = document.getElementById("light-theme");
const searchBtn = document.querySelector(".search-btn");
const inputName = document.getElementById("user");
const cards = document.querySelectorAll(".card");
const nameOfPerson = document.querySelector(".name-of-customer");
const login = document.querySelector(".login");
const date = document.querySelector(".date");
const description = document.querySelector(".description");
const statistics = document.querySelector(".statistics");
const amountElements = document.querySelectorAll(".amount");
const extraInfo = document.querySelectorAll(".extra-names");
const avatarMob = document.querySelector(".avatar-for-mobile");
const avartarDesktop = document.querySelector(".avatar-for-desktop");
const repo = document.querySelector(".repo");
const followers = document.querySelector(".follower");
const following = document.querySelector(".following");
const userLocation = document.querySelector(".user-location");
const link = document.querySelector(".link");
const socialMedia = document.querySelector(".twitter");
const company = document.querySelector(".company");
const errorResult = document.querySelector('.error')

const octobat = {
  login: "octocat",
  id: 583231,
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  followers_url: "https://api.github.com/users/octocat/followers",
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  repos_url: "https://api.github.com/users/octocat/repos",
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  received_events_url: "https://api.github.com/users/octocat/received_events",
  type: "User",
  site_admin: false,
  name: "The Octocat",
  company: "@github",
  blog: "https://github.blog",
  location: "San Francisco",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 8,
  followers: 10513,
  following: 9,
  created_at: "2011-01-25T18:44:36Z",
  updated_at: "2023-09-22T11:25:21Z",
};
user.addEventListener('input', function(){
    errorResult.textContent = ''
})
const changeThemeDark = (color) => {
  if (color === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "#141D2F";
    title.classList.add("name-dark");
    dark.style.display = "none";
    light.style.display = "block";
    Array.from(cards).forEach((card) => card.classList.add("dark-shadow"));
    inputName.classList.add("dark-placeholder");
    inputName.style.backgroundColor = "#1E2A47";
    inputName.style.color = "white";
    nameOfPerson.style.color = "white";
    date.style.color = "white";
    description.style.color = "white";
    statistics.style.backgroundColor = "#141D2F";
    amountElements.forEach((amount) => {
      const staticName = amount.querySelector(".amount-name");
      const staticAmount = amount.querySelector(".quantity");
      staticName.style.color = "white";
      staticAmount.style.color = "white";
    });
    Array.from(extraInfo).forEach((info) => (info.style.color = "white"));
  }
};
const changeThemeWhite = (color) => {
  if (color === "white") {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.style.backgroundColor = "#F6F8FF";
    title.classList.remove("name-dark");
    dark.style.display = "block";
    light.style.display = "none";
    Array.from(cards).forEach((card) => card.classList.remove("dark-shadow"));
    inputName.classList.remove("dark-placeholder");
    inputName.style.backgroundColor = "#fff";
    inputName.style.color = "#222731";
    nameOfPerson.style.color = "#2B3442";
    date.style.color = "#697C9A";
    description.style.color = "#697c9a";
    statistics.style.backgroundColor = "#F6F8FF";
    amountElements.forEach((amount) => {
      const staticName = amount.querySelector(".amount-name");
      const staticAmount = amount.querySelector(".quantity");
      staticName.style.color = "#4B6A9B";
      staticAmount.style.color = "#2B3442";
    });
    Array.from(extraInfo).forEach((info) => (info.style.color = "#4B6A9B"));
  }
};

moon.addEventListener("click", () => changeThemeDark("dark"));
sun.addEventListener("click", () => changeThemeWhite("white"));

const convertDate = (date1) => {
    const date2 = new Date(date1);
    const dateString = date2.toDateString();
    const [day, month, date, year] = dateString.split(" ");
    return `Joined ${date} ${month} ${year}`;
  };


const displayInformation = (customer) => {
    avartarDesktop.src = customer.avatar_url;
    avatarMob.src = customer.avatar_url;
    nameOfPerson.textContent = customer.name;
    login.textContent = "@" + customer.login;
    date.textContent = convertDate(octobat.created_at);
    if (customer.bio) {
      description.textContent = customer.bio;
    } else {
      description.textContent =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
    }
    repo.textContent = customer.public_repos;
    followers.textContent = customer.followers;
    following.textContent = customer.following;
  
    if (customer.location) {
      userLocation.textContent = customer.location;
    } else {
      userLocation.textContent = "Not avaliable";
      userLocation.parentElement.style.opacity = 0.5;
    }
    if (customer.blog) {
      link.textContent = customer.blog;
    } else {
      link.innerHTML = "Not avaliable";
      link.parentElement.style.opacity = 0.5;
    }
  
    if (customer.twitter_username) {
      socialMedia.textContent = customer.twitter_username;
    } else {
      socialMedia.textContent = "Not avaliable";
      socialMedia.parentElement.style.opacity = 0.5;
    }
  
    if (customer.company) {
      company.textContent = customer.company;
    } else {
      company.textContent = "Not avaliable";
      company.parentElement.style.opacity = 0.5;
    }
  };

searchBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const response = await axios.get(
      "https://api.github.com/users/" + inputName.value
    );
    const user = response.data;
    inputName.value = "";
    displayInformation(user)
    console.log(user);
  } catch (error) {
    console.log(error);
    errorResult.textContent = 'No result'
  }
});




displayInformation(octobat);
