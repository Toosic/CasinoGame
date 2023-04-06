function start(){
    var slider = document.getElementById('slider');
    var display = document.getElementById('display');
    var img = document.querySelector('.first-pic img')
    
    var load = document.getElementById('load')
    let int = setInterval(()=>{
        if (load.innerText == "Loading")
        {
            load.innerText = "Loading."
        }
        else if(load.innerText == "Loading.")
        {
            load.innerText = "Loading.."
        }
        else if(load.innerText == "Loading..")
        {
            load.innerText = "Loading..."
        }
        else
        {
            load.innerText = "Loading"
        }
    },300)

    slider.value = 0
    let interval = setInterval(() => {
       slider.value++;
       display.innerText = slider.value; 
       if(slider.value==100)
       {
        document.querySelector('.first-pic').style.display = "none";
        document.querySelector('.content').style.display = "block";   
       }
    }, 50);

    shuffleDeck()

    for(let i = 0; i < tr.length; i++)
        {
            document.getElementById(tr[i]).innerText = Math.floor(Math.random() * numbers.length);
        }
}

document.querySelector('#img-first-menu').addEventListener("click",()=>{

    var menu = document.querySelector('.first-menu');

    if(menu.style.display == "block")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "block";
    }

    if(menu.style.display = "block")
    {
        let interval = setInterval(()=>{
            menu.style.display = "none";
        },3000)
    }
    else
    {
        clearInterval(interval);
    }
    
})

document.querySelector('#img-second-menu').addEventListener("click",()=>{

    var menu = document.querySelector('.second-menu');
    

    if(menu.style.display == "block")
    {
        menu.style.display = "none";
    }
    else
    {
        menu.style.display = "block";
    }

    if(menu.style.display = "block")
    {
        let interval = setInterval(()=>{
            menu.style.display = "none";
        },3000)
    }
    else
    {
        clearInterval(interval);
    }
})

let money = 0;
let suma = 100;

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let brojaci = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let bonus1 = [1.10, 1.20, 1.30, 1.40, 1.50, 1.60, 1.70, 1.80, 1.90];
let bonus2 = [2.10, 2.20, 2.30, 2.40, 2.50, 2.60, 2.70, 2.80, 2.90];
let bonus3 = [3.10, 3.20, 3.30, 3.40, 3.50, 3.60, 3.70, 3.80, 3.90];
let bonus4 = [100, 150, 200, 250, 300, 350, 400, 450, 500];

let innerNumbers;
let tr = ['jedan', 'dva', 'tri', 'cetri', 'pet', 'sest', 'sedam', 'osam', 'devet', 'deset', 'jedanaest', 'dvanaest', 'trinaest', 'cetrnaest', 'petnaest']
let bet;
let credits = document.getElementById('credits');
//credits = parseInt(credits);

var canHit = true;

function hit()
{
    //console.log(numbers)
    console.log(canHit)
    if(bet == undefined)
    {
        return;
    }  
    if(canHit == true)
    {
        return;
    }

    if(parseInt(credits.innerText) <= 0)
    {
        return
    }
    
    if(parseInt(credits.innerText) < bet)
    {
        return
    }
    shuffleDeck()
    
    for(let i = 0; i < tr.length; i++)
        {
           document.getElementById(tr[i]).innerText = Math.floor(Math.random() * numbers.length);
        }
        //console.log(numbers)
        //console.log(bet)
    
        innerNumbers = [];
    
        for(let i = 0; i < tr.length; i++)
        {
            innerNumbers[i] = document.getElementById(tr[i]).innerText;
            //console.log(innerNumbers[i]);
        }

        for(let i = 0; i < tr.length; i++)
        {
            brojaci[i] = 0;
        }

        for(let i = 0; i < tr.length; i++)
        {
            if(innerNumbers[i] == 0)
            {
                brojaci[0]++;
            }
            if(innerNumbers[i] == 1)
            {
                brojaci[1]++;
            }
            if(innerNumbers[i] == 2)
            {
                brojaci[2]++;
            }
            if(innerNumbers[i] == 3)
            {
                brojaci[3]++;
            }if(innerNumbers[i] == 4)
            {
                brojaci[4]++;
            }if(innerNumbers[i] == 5)
            {
                brojaci[5]++;
            }if(innerNumbers[i] == 6)
            {
                brojaci[6]++;
            }if(innerNumbers[i] == 7)
            {
                brojaci[7]++;
            }if(innerNumbers[i] == 8)
            {
                brojaci[8]++;
            }if(innerNumbers[i] == 9)
            {
                brojaci[9]++;
            }if(innerNumbers[i] == 10)
            {
                brojaci[10]++;
            }if(innerNumbers[i] == 11)
            {
                brojaci[11]++;
            }if(innerNumbers[i] == 12)
            {
                brojaci[12]++;
            }if(innerNumbers[i] == 13)
            {
                brojaci[13]++;
            }
            if(innerNumbers[i] == 14)
            {
                brojaci[14]++;
            }if(innerNumbers[i] == 15)
            {
                brojaci[15]++;
            }
        }
    
        let picNumber = 0;
    
        document.getElementById('bonus').innerText = "";
    
        for(let i = 0; i < tr.length; i++)
            {
                document.getElementById(tr[i]).style.color = "aqua";
            }
    
            money = 0;

            if(brojaci[0] > 4 || brojaci[1] > 4 || brojaci[2] > 4 || brojaci[3] > 4 || brojaci[5] > 4 || brojaci[6] > 4 || brojaci[7] > 4 || brojaci[8] > 4 || brojaci[9] > 4 || brojaci[10] > 4 || brojaci[11] > 4 || brojaci[12] > 4 || brojaci[13] > 4 || brojaci[14] > 4 || brojaci[15] > 4)
            {
    
                picNumber = Math.floor(Math.random() * bonus3.length)
                money = bet * bonus3[picNumber];
                
                document.getElementById('bonus'). innerText = bonus3[picNumber];
    
                let br = 0;
                for(let j = 0; j < brojaci.length; j++)
                {
                    if(brojaci[j] > 4)
                    {
                        for(let i = 0; i < tr.length; i++)
                        {
                            if(document.getElementById(tr[i]).innerText == br)
                            {
                                document.getElementById(tr[i]).style.color = "red";
                            }
                        }
                    }
                    br++;
                }
            }   
            else if(brojaci[0] == 4 || brojaci[1] == 4 || brojaci[2] == 4 || brojaci[3] == 4 || brojaci[5] == 4 || brojaci[6] == 4 || brojaci[7] == 4 || brojaci[8] == 4 || brojaci[9] == 4 || brojaci[10] == 4 || brojaci[11] == 4 || brojaci[12] == 4 || brojaci[13] == 4 || brojaci[14] == 4 || brojaci[15] == 4)
            {
                
                picNumber = Math.floor(Math.random() * bonus2.length)
                money = bet * bonus2[picNumber];
    
                document.getElementById('bonus'). innerText = bonus2[picNumber];
    
                let br = 0;
                for(let j = 0; j < brojaci.length; j++)
                {
                    if(brojaci[j] == 4)
                    {
                        for(let i = 0; i < tr.length; i++)
                        {
                            if(document.getElementById(tr[i]).innerText == br)
                            {
                                document.getElementById(tr[i]).style.color = "red";
                            }
                        }
                    }
                    br++;
                }
            }
            else if(brojaci[0] == 3 || brojaci[1] == 3 || brojaci[2] == 3 || brojaci[3] == 3 || brojaci[5] == 3 || brojaci[6] == 3 || brojaci[7] == 3 || brojaci[8] == 3 || brojaci[9] == 3 || brojaci[10] == 3 || brojaci[11] == 3 || brojaci[12] == 3 || brojaci[13] == 3 || brojaci[14] == 3 || brojaci[15] == 3)
            {
                
                picNumber = Math.floor(Math.random() * bonus1.length)
                money = bet * bonus1[picNumber];
    
                document.getElementById('bonus'). innerText = bonus1[picNumber];
    
                let br = 0;
                for(let j = 0; j < brojaci.length; j++)
                {
                    if(brojaci[j] == 3)
                    {
                        for(let i = 0; i < tr.length; i++)
                        {
                            if(document.getElementById(tr[i]).innerText == br)
                            {
                                document.getElementById(tr[i]).style.color = "red";
                            }
                        }
                    }
                    br++;
                }
            }
       
            credits.innerText -= bet;
            suma -= bet;
            //picNumber = 0;
            color = "";
    
        if(money != 0)
        {
            //alert("Bonus is " + money + "$")
            opneModal1();
    
            //credits.innerText = parseFloat(credits.innerText) + parseFloat(money)
            document.getElementById('money').innerText = money;
        }    
}

function shuffleDeck()
{
    for(let i = 0; i < numbers.length; i++)
    {
       let j = Math.floor(Math.random() * numbers.length);
       let temp = numbers[i];
       numbers[i] = numbers[j];
       numbers[j] = temp;
    }
}


function takeValue(dugme)
{
    let dollar = dugme.innerText;
    let value = dollar.split('$')

    console.log(value[0]);
    console.log(credits.innerText)


    if(value[0] <= parseInt(credits.innerText))
    {
        if(parseInt(credits.innerText) > 0)
        {
            canHit = false;

            bet = value[0];
    
            return bet;
        }
    }
    else
    {
        canHit = true;
    }    
}

document.getElementById('quit').addEventListener("click",()=>{
    document.querySelector('.header').style.display = "none";
    document.querySelector('.tabla').style.display = "none";
    document.querySelector('.buttons').style.display = "none";
    document.querySelector('.bott').style.display = "none";

    var img = document.querySelector('.first-pic img')
    img.style.display = "block";
})

function opneModal1(){
    let modalWidonw = document.querySelector('.popup-modal1');
    let overlay = document.querySelector('.overlay');

    modalWidonw.style.display = "block";
    overlay.style.display = "block";

    buildDeck()
    shuffleDeck1()
    startGame()

    console.log(color)
}

function closeModal1(){
    let modalWidonw = document.querySelector('.popup-modal1');
    let overlay = document.querySelector('.overlay');

    modalWidonw.style.display = "none";
    overlay.style.display = "none";
}

var hidden;
var deck;
var deckR;
var deckB;

function buildDeck()
{
    let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let types = ["C","D","H","S",];
    deck = [];

    for(let i = 0; i < types.length; i++)
    {
        for(let j = 0; j < values.length; j++)
        {
            deck.push(values[j] + "-" + types[i]);
        }
    }

    let valuesR = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let typesR = ["D","H"];
    deckR = [];

    for(let i = 0; i < typesR.length; i++)
    {
        for(let j = 0; j < valuesR.length; j++)
        {
            deckR.push(valuesR[j] + "-" + typesR[i]);
        }
    }

    let valuesB = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let typesB = ["C","S",];
    deckB = [];
    let color;

    for(let i = 0; i < typesB.length; i++)
    {
        for(let j = 0; j < valuesB.length; j++)
        {
            deckB.push(valuesB[j] + "-" + typesB[i]);
        }
    }
}

function shuffleDeck1()
{
    for(let i = 0; i < deck.length; i++)
    {
       let j = Math.floor(Math.random() * deck.length);
       let temp = deck[i];
       deck[i] = deck[j];
       deck[j] = temp;
    }
}

function startGame()
{
    hidden = deck.pop();

    console.log(hidden)

    for(let j = 0; j < deck.length; j++)
    {
        if(hidden == deckB[j])
        {
            color = "black";
        }
        else if(hidden == deckR[j])
        {
            color = "red";
        }
    }
}

let bText;
function btnText(dugme)
{
    bText = dugme.innerText;
    console.log(bText)
}

document.getElementById("inst").addEventListener("click", ()=>{
    let modalWidonw = document.querySelector('.instruction-popup-modal');
    let overlay = document.querySelector('.overlay');

        modalWidonw.style.display = "block";
        overlay.style.display = "block";

        document.querySelector(".instruction-popup-modal #closeModal").addEventListener("click",()=>{
            modalWidonw.style.display = "none";
            overlay.style.display = "none";
        })
})

document.getElementById("claim").addEventListener("click", ()=>{
    let modalWidonw = document.querySelector('.claim-popup-modal');
    let overlay = document.querySelector('.overlay');

        modalWidonw.style.display = "block";
        overlay.style.display = "block";

        document.querySelector(".claim-popup-modal #closeModal").addEventListener("click",()=>{
            modalWidonw.style.display = "none";
            overlay.style.display = "none";
        })
})
var canHitBtn = true;

document.querySelector(".butt").addEventListener("click", ()=>{
    

    if(canHitBtn == true)
    {
        let video = document.querySelector(".video");
        video.style.display = "none";

        let img = document.querySelector(".claim-popup-modal .picc");
        img.style.display = "block";

        let timer = 29;
        let interval = setInterval(()=>{
            document.querySelector("#closeImg").addEventListener("click", ()=>{
                clearInterval(interval);
        
                video.style.display = "flex";
                img.style.display = "none";
            })

            document.getElementById("timer").innerText = timer;
            console.log(timer);
            timer = timer - 1;
            if(timer == -1)
            {
                video.style.display = "flex";
                img.style.display = "none";
                clearInterval(interval);
                canHitBtn = false;

                document.querySelector(".butt").style.opacity = 0.6;
                document.querySelector(".text").style.opacity = 0.6;

                credits.innerText = parseInt(credits.innerText) + parseInt(50);
            }
        },1000)
    }
})

var canHitBtn1 = true;

document.querySelector(".butt1").addEventListener("click", ()=>{
    
    if(canHitBtn1 == true)
    {
        let video = document.querySelector(".video");
        video.style.display = "none";

        let img = document.querySelector(".claim-popup-modal .picc1");
        img.style.display = "block";

        let timer = 29;
        let interval = setInterval(()=>{

            document.querySelector("#closeIMG").addEventListener("click", ()=>{
                clearInterval(interval);
        
                video.style.display = "flex";
                img.style.display = "none";
            })

            document.getElementById("timer1").innerText = timer;
            console.log(timer);
            timer = timer - 1;
            if(timer == -1)
            {
                video.style.display = "flex";
                img.style.display = "none";
                clearInterval(interval);
                canHitBtn1 = false;

                document.querySelector(".butt1").style.opacity = 0.6;
                document.querySelector(".text1").style.opacity = 0.6;

                credits.innerText = parseInt(credits.innerText) + parseInt(50);
            }
        },1000)
    }
})

document.getElementById("buy").addEventListener("click", ()=>{
    let modalWidonw = document.querySelector('.buy-popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWidonw.style.display = "block";
    overlay.style.display = "block";

    document.querySelector(".buy-popup-modal #closeModal").addEventListener("click",()=>{
        modalWidonw.style.display = "none";
        overlay.style.display = "none";
    })
})

document.getElementById("submit").addEventListener("click",()=>{

    let modalWidonw = document.querySelector('.buy-popup-modal');
    let overlay = document.querySelector('.overlay');

    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    let address = document.getElementById("address").value
    let number = document.getElementById("card").value

    if(name.length > 2)
    {
        if(lastName.length > 4)
        {
            if(address.length > 6)
            {
                if(number.length == 16)
                {
                    if(novac == 50 || novac == 100 || novac == 500)
                    {
                        alert("You have succesfully purchased credits!")

                        credits.innerText = parseInt(credits.innerText) + parseInt(novac)
                        
                        modalWidonw.style.display = "none";
                        overlay.style.display = "none";
                    }
                    else
                    {
                        alert("You have not purchased credits! Please fill out the form to purchase a credits!")
                    }
                }
                else
                {
                    alert("You have not purchased credits! Please fill out the form to purchase a credits!")
                }
            }
            else
            {
                alert("You have not purchased credits! Please fill out the form to purchase a credits!")
            }
        }
        else
        {
            alert("You have not purchased credits! Please fill out the form to purchase a credits!")
        }
    }
    else
    {
        alert("You have not purchased credits! Please fill out the form to purchase a credits!")
    }
})

let novac;
function getValue(dugme)
{
    let dollar = dugme.innerText;
    let value = dollar.split('$')

    novac = value[0];
    
    return novac;
}


function doubleBlack()
{
    if(color == "black")
    {
        console.log(parseInt(suma))
        console.log(parseInt(money))
        console.log(parseInt(suma) + parseInt(money) * 2)

        suma = suma + money * 2;

        credits.innerText = parseInt(credits.innerText) + money * 2;

        document.getElementById('money').innerText = parseInt(money) * 2;
        document.getElementById("hidden").src = "./cards/" + hidden + ".png";

        let interval = setTimeout(()=>{

            document.getElementById("hidden").src = "./cards/BACK.png";

            closeModal1()
        },2000)
    }
    else
    {
        credits.innerText = parseInt(credits.innerText) + parseInt(0);

        closeModal1()
    }

}

function doubleRed()
{
    if(color == "red")
    {
        console.log(parseInt(suma))
        console.log(parseInt(money))
        console.log( parseInt(suma) + parseInt(money) * 2)

        suma = suma + money * 2;

        credits.innerText = parseInt(credits.innerText) + parseInt(money) * 2;

        document.getElementById('money').innerText = parseInt(money) * 2;
        document.getElementById("hidden").src = "./cards/" + hidden + ".png";

        let interval1 = setTimeout(()=>{

            document.getElementById("hidden").src = "./cards/BACK.png";

            closeModal1()
        },2000)
    }
    else
    {
        credits.innerText = parseInt(credits.innerText) + parseInt(0);

        closeModal1()
    }
}

function stay()
{
    credits.innerText = parseInt(credits.innerText) + parseInt(money);
    
    closeModal1()
}