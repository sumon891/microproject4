let string = "";
let str2 = '';
let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

buttons.forEach((button) => {
    button.addEventListener('click', showSummary)
})

function showSummary(e) {
    if (e.target.innerHTML == '=') {
        if (string.length != 0) {
            if (countbrakets(string) != countbrakets2(string)) {
                let b = countbrakets(string) - countbrakets2(string);
                string = complete(string, b);
            }
            console.log(string);
            let check = 0;
            try {
                eval(string);
            }
            catch (error) {
                check++;
            }
            if (check == 0) {
                string = eval(string);
                str2 = string.toString();
                if (str2.indexOf('.') > 0) {
                    if ((str2.length - 1) - str2.indexOf('.') > 3) {
                        string = string.toFixed(3);
                    }
                    input.value = string;
                    string = string.toString();
                    str2 = string;
                    console.log(string);
                }
                else if (string == 'Infinity' || string == '-Infinity') {
                    input.value = string;
                    string = '';
                    str2 = '';
                    console.log(string);
                }
                else {
                    input.value = string;
                    string = string.toString();
                    str2 = string;
                    console.log(string);
                }
            }
            else {
                input.value = "Invalid Input";
                console.log(string);
                string = '';
                str2 = '';
            }

        }
    }
    else if (e.target.innerHTML == "RESET") {
        string = "";
        str2 = '';
        input.value = str2;
    }
    else if (e.target.innerHTML == "DEL") {
        let a = string.length - 1;
        while (string.charAt(a) == '(' || string.charAt(a) == ')') {
            string = string.slice(0, -1);
            a--;
        }
        string = string.slice(0, -1);
        let b = string.length - 1;
        while (string.charAt(b) == '(' || string.charAt(b) == ')') {
            string = string.slice(0, -1);
            b--;
        }
        str2 = str2.slice(0, -1);
        input.value = str2;
        // console.log(string);
    }
    else if (e.target.innerHTML == 'x') {
        if (!isNaN(string.charAt(string.length - 1))) {
            if (countbrakets(string) != countbrakets2(string)) {
                let b = countbrakets(string) - countbrakets2(string);
                string = complete(string, b);
            }
        }
        if (isNaN(string.charAt(string.length - 1)) && (string.charAt(string.length - 1) != '(') && (string.charAt(string.length - 1) != ')')) {
            string = string + '(' + '*';
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
        else if (string.length >= 1) {
            string = string + '*';
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
    }
    else if (e.target.innerHTML == '/') {
        if (!isNaN(string.charAt(string.length - 1))) {
            if (countbrakets(string) != countbrakets2(string)) {
                let b = countbrakets(string) - countbrakets2(string);
                string = complete(string, b);
            }
        }
        if (isNaN(string.charAt(string.length - 1)) && (string.charAt(string.length - 1) != '(') && (string.charAt(string.length - 1) != ')')) {
            string = string + '(' + e.target.innerHTML;
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
        else if (string.length >= 1) {
            string = string + e.target.innerHTML;
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
    }
    else if ((e.target.innerHTML == '+')) {
        if (!isNaN(string.charAt(string.length - 1))) {
            if (countbrakets(string) != countbrakets2(string)) {
                let b = countbrakets(string) - countbrakets2(string);
                string = complete(string, b);
            }
        }
        if (isNaN(string.charAt(string.length - 1)) && (string.charAt(string.length - 1) != '(') && (string.charAt(string.length - 1) != ')')) {
            string = string + '(' + e.target.innerHTML;
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
        else if (string.length >= 1) {
            string = string + e.target.innerHTML;
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
    }
    else if (e.target.innerHTML == '-') {
        if (!isNaN(string.charAt(string.length - 1))) {
            if (countbrakets(string) != countbrakets2(string)) {
                let b = countbrakets(string) - countbrakets2(string);
                string = complete(string, b);
            }
        }
        if (isNaN(string.charAt(string.length - 1)) && (string.charAt(string.length - 1) != '(') && (string.charAt(string.length - 1) != ')')) {
            string = string + '(' + e.target.innerHTML;
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
        else {
            string = string + e.target.innerHTML;
            str2 = str2 + e.target.innerHTML;
            input.value = str2;
        }
    }
    else {
        str2 = str2 + e.target.innerHTML;
        string = string + e.target.innerHTML;
        input.value = str2;

    }
    // console.log(e.target.innerHTML);

    function countbrakets(sample) {
        let count = 0;
        for (let i = 0; i < sample.length; i++) {
            if (sample.charAt(i) == '(') {
                count++;
            }
        }
        return count;
    }
    function countbrakets2(sample) {
        let count = 0;
        for (let i = 0; i < sample.length; i++) {
            if (sample.charAt(i) == ')') {
                count++;
            }
        }
        return count;
    }

    function complete(newstring, count) {
        for (let i = 0; i < count; i++) {
            newstring = newstring + ')';
        }
        return newstring;
    }
}
