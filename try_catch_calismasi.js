/* --hackerrank calismasi.--
Complete the reverseString function; it has one parameter, s. You must perform the following actions:

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's message on a new line.
Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
*/

function reverseString(s) {
    try{
    let newArray= s.split("");
    newArray.reverse();
    let result=newArray.join("") //join ile arrayden string haline cevirdik.
    console.log(result);
    }catch(error){
        console.log(error.message);
        console.log(s)
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}

/*
input:
Number(1234)
output:
s.split is not a function
1234
------
input:
"1234"
output:
4321
*/
