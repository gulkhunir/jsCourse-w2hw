// birden cok sayinin asal olup olmadiginin kontrolu
function asalMi(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let total = 0
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                total = 1
            }
        }
        if (total == 0) {
            console.log(numbers[i] + ' asal sayidir')
        } else {
            console.log(numbers[i] + ' asal sayi degildir')
        }
    }
}
//asalMi(5, 35, 45);
//Parametre olarak girilen iki sayinin arkadas sayi olup olmadigini gosteren program
function arkadasSayiMi(sayi1, sayi2) {
    let total1 = 0
    let total2 = 0
    for (let i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            total1 += i
        }
    }
    for (let i = 1; i < sayi2; i++) {
        if (sayi2 % i == 0) {
            total2 += i
        }
    }
    if (total1 == sayi2 && total2 == sayi1) {
        console.log(`${sayi1} ve ${sayi2} arkadas sayilardir.`)
    } else {
        console.log(`${sayi1} ve ${sayi2} arkadas sayilar degildir.`)
    }
}
//arkadasSayiMi(220, 284)
//1000'e kadar olan mukemmel sayilari bulan program
for(let i=1;i<=1000;i++){
    let total=0
    for(let j=1;j<i;j++){
        if(i%j==0){
            total+=j
        }
    }
    if(total == i){
        console.log(i +' mukemmel sayidir')
    }
}
//1000 e kadar olan asal sayilari yazdiran program
for (let i = 2; i <= 1000; i++) {
   let count=0
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count=1
        }
    }
    if(count!= 1){
        console.log(i + ' asal sayidir')
    }
    }

