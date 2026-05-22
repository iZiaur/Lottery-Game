// import { useState } from "react"
// import "./Lottery.css"
// function Lottery(){
//     let [nums,setnums]=useState(123)
//     let [win,setwin]= useState(false)
    
//     function GenerateNumber(){
//         let newNum=(Math.floor(Math.random()*1000))
//         setnums(newNum)
//         checkSum(newNum)
       
//     }

//     function checkSum(nums){
//         let temp=nums
//         let sum=0;
//         while(temp>0){
//             sum+=temp%10
//             temp=Math.floor(temp/10)
//         }
//         if (sum==15){
//             setwin(true);
//         }else{
//             setwin(false);
//         }
//     }
//     return  <div>
//     <h1>Lottery  {win?"'Congratulations you won!'":null} </h1>
//     <h3>Lottery ticket={nums}</h3>
//     <button onClick={GenerateNumber}>Get New Ticket</button>
//     <button onClick={checkSum}>Check Sum</button>
    
//     </div>
// }

// export default Lottery


import { useState } from "react";
import "./Lottery.css";

function Lottery() {
    let [nums, setnums] = useState(123);
    let [win, setwin] = useState(false);

    function GenerateNumber() {
        let newNum = Math.floor(Math.random() * 1000);
        setnums(newNum);
        checkSum(newNum);
    }

    function checkSum(nums) {
        let temp = nums;
        let sum = 0;

        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (sum === 15) {
            setwin(true);
        } else {
            setwin(false);
        }
    }

    return (
        <div className="container">
            <h1>
                Lottery{" "}
                {win ? (
                    <span className="win-text">
                        Congratulations you won!
                    </span>
                ) : null}
            </h1>

            <div className="ticket">
                Lottery Ticket = <span>{nums}</span>
            </div>

            <div className="buttons">
                <button
                    className="btn-primary"
                    onClick={GenerateNumber}
                >
                    Get New Ticket
                </button>

               
            </div>
        </div>
    );
}

export default Lottery;