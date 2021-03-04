//Marco Polo

let num = 1;
while (num < 101) {
 
    if (num % 3 === 0 && num % 5 === 0) {
        console.log (num + " - Marco Polo");
    }
    else if (num % 3 === 0) { 
        console.log (num + " - Marco");
    }
    else if (num % 5 === 0) { 
        console.log (num + " - Polo");
    }
    num++;
}
 


