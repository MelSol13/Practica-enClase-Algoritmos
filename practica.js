for(var i=1; i<=100; i++){
    console.log(i);

if (i>95){
    console.log("ya casi llegamos a 100");
}
}       

for(var i=1; i<=50; i++){
    console.log(i);

    if(i>45){
        console.log("ya casi llegamos a 50");
    }
}

for(var i=100; i>=1; i--){
    console.log(i);

    if(i % 2 == 0){
        console.log("ese era par");
    }
}

var numero=5;
function sumatoria(numero){
    var suma=0;

for (var i=1; i<= numero; i++){
    suma += i;
    }
    console.log('La sumatoria es => '+ suma);
}

sumatoria(numero);
sumatoria(10);


