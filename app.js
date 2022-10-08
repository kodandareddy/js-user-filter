const result = document.getElementById("result");
const filter = document.getElementById("filter");
filter.addEventListener('input',handleChange)
const listItems = [];
getData()

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')

  const { results } = await res.json()
  console.log(result)
  result.innerHTML = '';

  results.forEach(user => {
        const li = document.createElement('li')

    listItems.push(li)

    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `

    result.appendChild(li)
})
}

function handleChange(e){
  listItems.forEach(list=>{
  if(list.innerText.toLowerCase().includes(e.target.value)){
    list.classList.remove('hide')
  }else {
    list.classList.add('hide')
}
  })
}

