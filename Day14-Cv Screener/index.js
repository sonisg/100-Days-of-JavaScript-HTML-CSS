const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    exp: 0,
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    exp: 5,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },

  {
    name: "Camella Cabello",
    age: 20,
    exp: 2,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Aishwariya Behl",
    age: 45,
    exp: 20,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    exp: 10,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];
function cvInterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidate = cvInterator(data);
nextCV();
let next = document.getElementById("next");

next.addEventListener("click", nextCV);

function nextCV() {
  console.log("1");
  const curr = candidate.next().value;
  let profile = document.getElementById("profile");
let image = document.getElementById("image");
  if (curr != undefined) {
    image.innerHTML = `<img src='${curr.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name : ${curr.name}</li>
    <li class="list-group-item">Age : ${curr.age} </li>
    <li class="list-group-item">City : ${curr.city}</li>
    <li class="list-group-item">Skills :  ${curr.language}</li>
    <li class="list-group-item">Experience : ${curr.exp} years </li>
    <li class="list-group-item">Frameworks Known :  ${curr.framework} </li>
  </ul>`;
  } else {
    alert("End of candidate applications");
    window.location.reload();
  }
}
