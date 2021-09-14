let but=document.getElementById('but');
let joke=document.getElementById('joke');

but.addEventListener("click",generateJoke);

//Using asyn await
async function generateJoke()
{
    const params = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch('https://icanhazdadjoke.com', params);
    const data =  await res.json();
    joke.innerHTML = data.joke;

}

//USING FETCH API
// generateJoke();
// function generateJoke()
// {
//     params = {
//         headers: {
//             Accept: 'application/json'
//         },
//     }
//     fetch('https://icanhazdadjoke.com', params).then(
//         res=>res.json()).then((data)=>
//         joke.innerHTML=data.joke);
// }