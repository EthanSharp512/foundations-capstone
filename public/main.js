const chartBtn = document.querySelector('#chartBtn')
const recommendation = document.querySelector(`#recommendation`)
const mybutton = document.getElementById("backtotop");
const rangeBtn = document.querySelector("#rangeBtn");
const pairBtn = document.querySelector('#pairBtn')
const winpercentage = document.querySelector(`#winpercentage`)

const preflopCalc = (e) => {
  e.preventDefault()
  
  const positionInput = document.querySelector("#position");
  const suitInput = document.querySelector("#suit");
  const card1Input = document.querySelector("#cardone");
  const card2Input = document.querySelector("#cardtwo");
  
  const position =positionInput.value;
  const suited = suitInput.value;
  const card1 = card1Input.value;
  const card2 = card2Input.value;
  
  const body = {
    position: position,
        suited: suited,
        card1: card1,
        card2: card2
      }
      
      axios.post("/api/preflop", body)
      .then(res => {
        const data = res.data;
        recommendation.textContent = data;
      })
      .catch(err => {
        alert(err)
      })
    };

    const pairWinCalc = (e) => {
      e.preventDefault()
      
      const playerInput = document.querySelector("#player");
      const pairInput = document.querySelector("#pair");
      
      const player = playerInput.value;
      const pair = pairInput.value;
      
      const body = {
        player: player,
        pair: pair
      }
          
      axios.post("/api/pair", body)
      .then(res => {
      const data = res.data;
      winpercentage.textContent = data;
      })
      .catch(err => {
        alert(err)
      })
    };


    const glanceCont = document.querySelector('#glanceCont')
    const glanceAns = document.querySelector('section')

    function clearRange() {
      glanceAns.innerHTML = ``
    }

    function createList(data) {
      let yourRange = document.createElement('div')
      yourRange.innerHTML = `<p class="question" id="chart">${data}</p>`

      glanceAns.appendChild(yourRange)
    }


    
    const rangeList = (e) => {
      e.preventDefault()
      
      clearRange()
      let range = document.querySelector('#range').value

      axios.get(`/api/range/${range}`)
      .then(res => {
        const data = res.data;
        console.log(res.data)
        createList(data);
      })
      .catch(err => {
        alert(err)
    })
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

rangeBtn.addEventListener('click', rangeList)
chartBtn.addEventListener('click', preflopCalc)
pairBtn.addEventListener('click', pairWinCalc)