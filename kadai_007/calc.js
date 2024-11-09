//代入
let num=10;
//AND条件
if(num % 3 === 0 && num % 5=== 0){
    console.log('3と5の倍数です')
//ANDをみたさないとき（３の倍数）
}else if(num % 3 === 0){
    console.log('3の倍数です')
//5の倍数
}else if(num % 5 === 0){
    console.log('5の倍数です')
//どれにも該当しないとき
}else (console.log(num));
