        
//School Prefect Code...it is very inefficient but I don't know how to fix that yet :)
        
        let submit1 = document.getElementById("sch-pref-pop-up-link");
        let popUpBox1 = document.getElementById("sch-pref-pop-up");
        let popUpText1 = document.getElementsByClassName("pop-up-text1")[0];
        let closed1 = document.getElementsByClassName("close1")[0];

        //code to display the pop up
        function popUp1(){
            //if the validation is true, trigger this pop up
            popUpBox1.setAttribute("class", "show1");
            popUpBox1.appendChild(popUpText1);

            //if you click on the pop up, the show class and text should disappear
            if(popUpBox1.className == "show1"){

                closed1.onclick = function (){
                popUpBox1.removeAttribute("class", "show1");
                popUpBox1.removeChild(popUpText1);
                }
            } 
        }

        //code to validate the form
        submit1.onclick = function(e){
            e.preventDefault();
            popUp1();
        }

        function schResetForm(){
            var candidateVotes1 = document.getElementsByClassName("sch-pref-votes");

            candidateVotes1[0].innerHTML = "";
            voteCounter1 = 0;

            candidateVotes1[1].innerHTML = "";
            voteCounter2 = 0;

            candidateVotes1[2].innerHTML = "";
            voteCounter3 = 0;

            candidateVotes1[3].innerHTML = "";
            voteCounter4 = 0;

            candidateVotes1[4].innerHTML = "";
            voteCounter5 = 0;

            candidateVotes1[5].innerHTML = "";
            voteCounter6 = 0;

        }


        //code to count the votes
        var candidate1Votes = document.getElementById("candidate1-votes");
        voteCounter1 = 0;

        var candidate2Votes = document.getElementById("candidate2-votes");
        voteCounter2 = 0;

        var candidate3Votes = document.getElementById("candidate3-votes");
        voteCounter3 = 0;

        var candidate4Votes = document.getElementById("candidate4-votes");
        voteCounter4 = 0;

        var candidate5Votes = document.getElementById("candidate5-votes");
        voteCounter5 = 0;

        var candidate6Votes = document.getElementById("candidate6-votes");
        voteCounter6 = 0;
        
        //counter for results
        var totalVotes1 = 19; //I think this was the total number of students who would vote


        function schAddVote1(){
            voteCounter1++;
            candidate1Votes.innerHTML = voteCounter1 + " vote(s)";
            totalVotes1--;

            if(totalVotes1 == 0){
                alert("No more votes");
            }
        }
        
        function schAddVote2(){
            voteCounter2++;
            candidate2Votes.innerHTML = voteCounter2 + " vote(s)";
            totalVotes1--;

            if(totalVotes1 == 0){
                alert("No more votes");
            }
        }

        function schAddVote3(){
            voteCounter3++;
            candidate3Votes.innerHTML = voteCounter3 + " vote(s)";
            totalVotes1--;

            if(totalVotes1 == 0){
                alert("No more votes");
            }
        }

        function schAddVote4(){
            voteCounter4++;
            candidate4Votes.innerHTML = voteCounter4 + " vote(s)";
            totalVotes1--;

            if(totalVotes1 == 0){
                alert("No more votes");
            }
        }

        function schAddVote5(){
            voteCounter5++;
            candidate5Votes.innerHTML = voteCounter5 + " vote(s)";
            totalVotes1--;

            if(totalVotes1 == 0){
                alert("No more votes");
            }
        }

        function schAddVote6(){
            voteCounter6++;
            candidate6Votes.innerHTML = voteCounter6 + " vote(s)";
            totalVotes1--;

            if(totalVotes1 == 0){
                alert("No more votes");
            }
        }



//Health Prefect Code



let submit2 = document.getElementById("health-pref-pop-up-link");
let popUpBox2 = document.getElementById("health-pref-pop-up");
let popUpText2 = document.getElementsByClassName("pop-up-text2")[0];
let closed2 = document.getElementsByClassName("close2")[0];

//code to display the pop up
function popUp2(){
    //if the validation is true, trigger this pop up
    popUpBox2.setAttribute("class", "show2");
    popUpBox2.appendChild(popUpText2);

    //if you click on the pop up, the show class and text should disappear
    if(popUpBox2.className == "show2"){

        closed2.onclick = function (){
        popUpBox2.removeAttribute("class", "show2");
        popUpBox2.removeChild(popUpText2);
        }
    } 
}

//code to validate the form
submit2.onclick = function(e){
    e.preventDefault();
    popUp2();
}

function healthResetForm(){
    var candidateVotes2 = document.getElementsByClassName("health-pref-votes");

    candidateVotes2[0].innerHTML = "";
    voteCounter7 = 0;

    candidateVotes2[1].innerHTML = "";
    voteCounter8 = 0;

    candidateVotes2[2].innerHTML = "";
    voteCounter9 = 0;

    candidateVotes2[3].innerHTML = "";
    voteCounter10 = 0;

    candidateVotes2[4].innerHTML = "";
    voteCounter11 = 0;

    candidateVotes2[5].innerHTML = "";
    voteCounter12 = 0;

}


//code to count the votes
var candidate7Votes = document.getElementById("candidate7-votes");
voteCounter7 = 0;

var candidate8Votes = document.getElementById("candidate8-votes");
voteCounter8 = 0;

var candidate9Votes = document.getElementById("candidate9-votes");
voteCounter9 = 0;

var candidate10Votes = document.getElementById("candidate10-votes");
voteCounter10 = 0;

var candidate11Votes = document.getElementById("candidate11-votes");
voteCounter11 = 0;

var candidate12Votes = document.getElementById("candidate12-votes");
voteCounter12 = 0;

//counter for results
var totalVotes2 = 19; //I think this was the total number of students who would vote

function healthAddVote7(){
    voteCounter7++;
    candidate7Votes.innerHTML = voteCounter7 + " vote(s)";
    totalVotes2--;

        if(totalVotes2 == 0){
            alert("No more votes");
        }
}

function healthAddVote8(){
    voteCounter8++;
    candidate8Votes.innerHTML = voteCounter8 + " vote(s)";
    totalVotes2--;

        if(totalVotes2 == 0){
            alert("No more votes");
        }
}

function healthAddVote9(){
    voteCounter9++;
    candidate9Votes.innerHTML = voteCounter9 + " vote(s)";
    totalVotes2--;

        if(totalVotes2 == 0){
            alert("No more votes");
        }
}

function healthAddVote10(){
    voteCounter10++;
    candidate10Votes.innerHTML = voteCounter10 + " vote(s)";
    totalVotes2--;

        if(totalVotes2 == 0){
            alert("No more votes");
        }
}

function healthAddVote11(){
    voteCounter11++;
    candidate11Votes.innerHTML = voteCounter11 + " vote(s)";
    totalVotes2--;

        if(totalVotes2 == 0){
            alert("No more votes");
        }
}
function healthAddVote12(){
    voteCounter12++;
    candidate12Votes.innerHTML = voteCounter12 + " vote(s)";
    totalVotes2--;

        if(totalVotes2 == 0){
            alert("No more votes");
        }
}






//Sports Prefect Code

let submit3 = document.getElementById("sports-pref-pop-up-link");
let popUpBox3 = document.getElementById("sports-pref-pop-up");
let popUpText3 = document.getElementsByClassName("pop-up-text3")[0];
let closed3 = document.getElementsByClassName("close3")[0];

//code to display the pop up
function popUp3(){
    //if the validation is true, trigger this pop up
    popUpBox3.setAttribute("class", "show3");
    popUpBox3.appendChild(popUpText3);

    //if you click on the pop up, the show class and text should disappear
    if(popUpBox3.className == "show3"){

        closed3.onclick = function (){
        popUpBox3.removeAttribute("class", "show3");
        popUpBox3.removeChild(popUpText3);
        }
    } 
}

//code to validate the form
submit3.onclick = function(e){
    e.preventDefault();
    popUp3();
}

function sportResetForm(){
    var candidateVotes3 = document.getElementsByClassName("sports-pref-votes");

    candidateVotes3[0].innerHTML = "";
    voteCounter13 = 0;

    candidateVotes3[1].innerHTML = "";
    voteCounter14 = 0;

    candidateVotes3[2].innerHTML = "";
    voteCounter15 = 0;

    candidateVotes3[3].innerHTML = "";
    voteCounter16 = 0;

    candidateVotes3[4].innerHTML = "";
    voteCounter17 = 0;

    candidateVotes3[5].innerHTML = "";
    voteCounter18 = 0;

}


//code to count the votes
var candidate13Votes = document.getElementById("candidate13-votes");
voteCounter13 = 0;

var candidate14Votes = document.getElementById("candidate14-votes");
voteCounter14 = 0;

var candidate15Votes = document.getElementById("candidate15-votes");
voteCounter15 = 0;

var candidate16Votes = document.getElementById("candidate16-votes");
voteCounter16 = 0;

var candidate17Votes = document.getElementById("candidate17-votes");
voteCounter17 = 0;

var candidate18Votes = document.getElementById("candidate18-votes");
voteCounter18 = 0;

//counter for results
var totalVotes3 = 19; //I think this was the total number of students who would vote


function sportAddVote13(){
    voteCounter13++;
    candidate13Votes.innerHTML = voteCounter13 + " vote(s)";
    totalVotes3--;

        if(totalVotes3 == 0){
            alert("No more votes");
        }
}

function sportAddVote14(){
    voteCounter14++;
    candidate14Votes.innerHTML = voteCounter14 + " vote(s)";
    totalVotes3--;

        if(totalVotes3 == 0){
            alert("No more votes");
        }
}

function sportAddVote15(){
    voteCounter15++;
    candidate15Votes.innerHTML = voteCounter15+ " vote(s)";
    totalVotes3--;

        if(totalVotes3 == 0){
            alert("No more votes");
        }
}

function sportAddVote16(){
    voteCounter16++;
    candidate16Votes.innerHTML = voteCounter16 + " vote(s)";
    totalVotes3--;

        if(totalVotes3 == 0){
            alert("No more votes");
        }
}

function sportAddVote17(){
    voteCounter17++;
    candidate17Votes.innerHTML = voteCounter17 + " vote(s)";
    totalVotes3--;

        if(totalVotes3 == 0){
            alert("No more votes");
        }
}

function sportAddVote18(){
    voteCounter18++;
    candidate18Votes.innerHTML = voteCounter18 + " vote(s)";
    totalVotes3--;

        if(totalVotes3 == 0){
            alert("No more votes");
        }
}





//Library Prefect Code

let submit4 = document.getElementById("library-pref-pop-up-link");
let popUpBox4 = document.getElementById("library-pref-pop-up");
let popUpText4 = document.getElementsByClassName("pop-up-text4")[0];
let closed4 = document.getElementsByClassName("close4")[0];

//code to display the pop up
function popUp4(){
    //if the validation is true, trigger this pop up
    popUpBox4.setAttribute("class", "show4");
    popUpBox4.appendChild(popUpText4);

    //if you click on the pop up, the show class and text should disappear
    if(popUpBox4.className == "show4"){

        closed4.onclick = function (){
        popUpBox4.removeAttribute("class", "show4");
        popUpBox4.removeChild(popUpText4);
        }
    } 
}

//code to validate the form
submit4.onclick = function(e){
    e.preventDefault();
    popUp4();
}

function libraryResetForm(){
    var candidateVotes4 = document.getElementsByClassName("library-pref-votes");

    candidateVotes4[0].innerHTML = "";
    voteCounter19 = 0;

    candidateVotes4[1].innerHTML = "";
    voteCounter20 = 0;

    candidateVotes4[1].innerHTML = "";
    voteCounter21 = 0;

    candidateVotes4[1].innerHTML = "";
    voteCounter22 = 0;

    candidateVotes4[1].innerHTML = "";
    voteCounter23 = 0;

    candidateVotes4[1].innerHTML = "";
    voteCounter24 = 0;
}


//code to count the votes
var candidate19Votes = document.getElementById("candidate19-votes");
voteCounter19 = 0;

var candidate20Votes = document.getElementById("candidate20-votes");
voteCounter20 = 0;

var candidate21Votes = document.getElementById("candidate21-votes");
voteCounter21 = 0;

var candidate22Votes = document.getElementById("candidate22-votes");
voteCounter22 = 0;

var candidate23Votes = document.getElementById("candidate23-votes");
voteCounter23 = 0;

var candidate24Votes = document.getElementById("candidate24-votes");
voteCounter24 = 0;

//counter for results
var totalVotes4 = 19; //I think this was the total number of students who would vote


function libraryAddVote19(){
    voteCounter19++;
    candidate19Votes.innerHTML = voteCounter19 + " vote(s)";
    totalVotes4--;

        if(totalVotes4 == 0){
            alert("No more votes");
        }
}

function libraryAddVote20(){
    voteCounter20++;
    candidate20Votes.innerHTML = voteCounter20 + " vote(s)";
    totalVotes4--;

        if(totalVotes4 == 0){
            alert("No more votes");
        }
}

function libraryAddVote21(){
    voteCounter21++;
    candidate21Votes.innerHTML = voteCounter21 + " vote(s)";
    totalVotes4--;

        if(totalVotes4 == 0){
            alert("No more votes");
        }
}

function libraryAddVote22(){
    voteCounter22++;
    candidate22Votes.innerHTML = voteCounter22 + " vote(s)";
    totalVotes4--;

        if(totalVotes4 == 0){
            alert("No more votes");
        }
}

function libraryAddVote23(){
    voteCounter23++;
    candidate23Votes.innerHTML = voteCounter23 + " vote(s)";
    totalVotes4--;

        if(totalVotes4 == 0){
            alert("No more votes");
        }
}

function libraryAddVote24(){
    voteCounter24++;
    candidate24Votes.innerHTML = voteCounter24 + " vote(s)";
    totalVotes4--;

        if(totalVotes4 == 0){
            alert("No more votes");
        }
}
