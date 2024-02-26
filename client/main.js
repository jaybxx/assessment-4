const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const luckyNumBtn = document.querySelector("#luckyNumButton")
const colorBtn = document.querySelector("#colorButton")
const timeBtn = document.querySelector("#timeButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getLuckyNum = () => {
    axios.get("http://localhost:4000/api/luckyNumber/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getTime = () => {
    axios.get("http://localhost:4000/api/time/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
    


fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
luckyNumBtn.addEventListener('click', getLuckyNum)
colorBtn.addEventListener('click', getColor )
timeBtn.addEventListener('click', getTime)