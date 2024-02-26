module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A dubious friend may be an enemy in camouflage.", "A fresh start will put you on your way.", "People find it difficult to resist your persuasive manner.", "Romance moves you in a new direction.", "You are almost there."];
      
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getLuckyNum: (req, res) => {
        
        let luckyNum = []
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        luckyNum.push(randomNumber)
        let text = luckyNum.toString();  //express doesn't allow numbers in .send()

        res.status(200).send(text); 
    },

    getColor: (req, res) => {
        const colors = ["Red", "Orange", "Yellow", "Green.", "Blue", "Indigo", "Violet"];
      
        
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];
      
        res.status(200).send(randomColor);
    },

    getTime: (req, res) => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const amPm = []
        if (hours < 12) {
           amPm.push("AM");
        } else {
            amPm.push("PM");
        };
        const hour = []
        if (hours > 12) {
            hour.push(hours % 12);
        } else {
            hour.push(hours);
        }
        
      
        let Time = `${hour}:${minutes}:${seconds}${amPm}`;
        res.status(200).send(Time)
    }
}