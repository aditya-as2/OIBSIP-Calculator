function getH() {
    return document.getElementById("hv").innerText;
}

function printH(num) {
    document.getElementById("hv").innerText=num;
}
function getO() {
    return document.getElementById("ov").innerText;
}

function printO(num) {
    if(num=="") {
        document.getElementById("ov").innerText=num;
    } else {
        document.getElementById("ov").innerText=getFN(num);
    }         
} 

function getFN(num) {
    if(num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function revNF(num) {
    return Number(num.replace(/,/g,''));
}

var number = document.querySelectorAll(".b");
for(var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        var output = revNF(getO());
        if(output != NaN) {
            output = output + this.id;
            printO(output);
        }
    });
}
var operator = document.querySelectorAll(".op");
for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        if(this.id == "clr") {
            printH("");
            printO("0");
        }
        else if(this.id == "bs") {
            var output = revNF(getO()).toString();
            if(output) {
                output = output.substring(0,output.length-1);
                if(output==""){
                    printO("0");
                }
                else{
                    printO(output);
                }
            }
        }
        else {
            var output = getO();
            var history = getH();
            if(output == "" && history != "") {
                if(isNaN(history[history.length-1])) {
                    history = history.substring(0, history.length-1);
                }
            }
            if(output != "" || history != "") {
                output = output == ""?
                output:revNF(output);
                history = history+output;
                if(this.id == "=") {
                    var result = eval(history);
                    printO(result);
                    printH("");
                } else {
                    history = history + this.id;
                    printH(history);
                    printO("");
                }
            }
        }
    });
}
