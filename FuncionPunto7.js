let arr = [1,2,3,4,5,6]

let suma=0;

function sumar(arr){
    for (let i=0; i<arr.length; i++){
        suma+=arr[i];
    }
    console.log(suma)
}
sumar(arr);
