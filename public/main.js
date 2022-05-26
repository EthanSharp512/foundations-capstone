const chartBtn = document.querySelector('#chartBtn')
const recommendation = document.querySelector(`#recommendation`)
// const vpipBtn = document.querySelector('#')

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


    axios.post("http://localhost:3000/api/preflop", body)
    .then(res => {
        const data = res.data;
        recommendation.textContent = data;
    })
    .catch(err => {
        alert(err)
    })
};

// const updateVpip = () => {
//     axios.get("http://localhost:3000/api/vpip/")
//     .then(res => {
//         const data = res.data;
//         alert(data);
//     })
//     .catch(err => {
//         alert(err)
//     })
// };



chartBtn.addEventListener('click', preflopCalc)
// vpipBtn.addEventListener('click', updateVpip)