
    let a = new Array();
    let number = prompt("díme un número");
    let i=0;
    for(i;i<number;i++){
        a.push(i);
    }
    document.write(a);
    a.push(number);
    document.write("push");
    document.write(a);
    a.shift();

    document.write("pop");
    document.write(a);