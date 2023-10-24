let btn = document.querySelector("#btn");
let jokes = document.querySelector(".title");
const options = {
  method: "GET",
  headers: { "X-Api-Key": "b3FCX0u0rfmwffqrZCKrob4S2W45qWkqHfySTwwW" },
};
let res = null;
async function getJoke() {
  jokes.innerText = `Updating...`;
  try {
    setTimeout(async () => {
      let data = await fetch(
        "https://api.api-ninjas.com/v1/dadjokes?limit=1",
        options
      );
      res = await data.json();
      jokes.style.color="rgb(5, 50, 71)";
      jokes.innerText = `${res[0].joke}`;
    }, 1500);
  } catch {
    jokes.innerText = `Click Again`;
  }
}
btn.addEventListener("click", getJoke);