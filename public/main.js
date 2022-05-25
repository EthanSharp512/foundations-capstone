const chartBtn = document.querySelector('#chartBtn')
// const vpipBtn = document.querySelector('#')

const preflopCalc = () => {
    axios.get("http://localhost:3000/api/preflop/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => {
        alert(err)
    })
};

const updateVpip = () => {
    axios.get("http://localhost:3000/api/vpip/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => {
        alert(err)
    })
};



chartBtn.addEventListener('click', preflopCalc)
// vpipBtn.addEventListener('click', updateVpip)