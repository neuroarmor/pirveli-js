let navigacia =["მთავარი", "გალერია", "ჩვენს შესახებ", "კონტაქტი"]
let linkebi=["index.html","gallery.html", "about.html", "contact.html" ]
let navigaciaItems ='<ul>';
for(n=0; n < navigacia.length; n++){
    navigaciaItems+='<li>'+ '<a href="'+ linkebi[n]+'" target="_self">'+navigacia[n]+'</a>' +'</li>'
}
navigaciaItems+='</ul>';
console.log(navigaciaItems);
document.getElementById("navigacia").innerHTML=navigaciaItems
