const displayShows = async() =>{
   const url = `https://openapi.programming-hero.com/api/ai/tools`
   const res = await fetch(url);
   const data = await res.json();
   allDisplayDetails(data.data.tools);
   showAllDisplayData(data.data.tools);

}

const allDisplayDetails = cards =>{
  const universeContainer = document.getElementById('Al-container');
  //display 6 cards only
  const seeMore = document.getElementById('see-more');
  if(cards.length > 6){
    cards = cards.slice(0,6);
    seeMore.classList.remove('d-none');
  }
  else{
    seeMore.classList.add('d-none');

  }
  

  cards.forEach(tool => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    toolDiv.innerHTML = `
    <div class="card p-4 ">
    <img src="${tool.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-title">Features</h3>
      <h5 class="card-title">1.${tool.features[0]}</h5>
      <h5 class="card-title">2.${tool.features[1]}</h5>
      <h5 class="card-title">3.${tool.features[2]}</h5>
      <hr>
    <div class="d-flex justify-content-between">
    <div>
    <h5 class="card-title">${tool.name}</h5>
    <h5 class="card-title"> <span><i class="fa-solid fa-calendar-days"></i></span>  ${tool.published_in}</h5>
    </div>
  <div>
 <button class="rounded-4 btn btn-outline-danger"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
  </div>
    </div>
  </div>
  </div>
    `;
    universeContainer.appendChild(toolDiv);
  })
}
// displayShows();

// singleDetail Show

// document.getElementById('btn-see-more').addEventListener('click',function(){
//   const seeMoreButton = document.getElementById('see-more');
//   const seeBtn = seeMoreButton.innerText;
//   const displayShows = async() =>{
//     const url = `https://openapi.programming-hero.com/api/ai/tools`

//   console.log(url);
 
//  }
  
// })
 const showAllData = () =>{

  window.location.href ="alldata.html";

  const showAllDisplayData = cards =>{
    const universeContainer = document.getElementById('btn-container');
    //display 6 cards only
    // const seeMore = document.getElementById('see-more');
    // if(cards.length > 6){
    //   cards = cards.slice(0,6);
    //   seeMore.classList.remove('d-none');
    // }
    // else{
    //   seeMore.classList.add('d-none');
  
    // }
    
  
    cards.forEach(tool => {
      const toolDiv = document.createElement('div');
      toolDiv.classList.add('col');
      toolDiv.innerHTML = `
      <div class="card p-4 ">
      <img src="${tool.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h3 class="card-title">Features</h3>
        <h5 class="card-title">1.${tool.features[0]}</h5>
        <h5 class="card-title">2.${tool.features[1]}</h5>
        <h5 class="card-title">3.${tool.features[2]}</h5>
        <hr>
      <div class="d-flex justify-content-between">
      <div>
      <h5 class="card-title">${tool.name}</h5>
      <h5 class="card-title"> <span><i class="fa-solid fa-calendar-days"></i></span>  ${tool.published_in}</h5>
      </div>
    <div>
   <button class="rounded-4 btn btn-outline-danger"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
    </div>
      </div>
    </div>
    </div>
      `;
      universeContainer.appendChild(toolDiv);
    })
  }
  

 }

 displayShows();
 





