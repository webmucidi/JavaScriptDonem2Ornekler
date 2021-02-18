function renkDegistir(){
   document.getElementById("baslik").style.color="blue"; 
   document.getElementById("baslik").innerHTML="Nasıl değişti ama :)"; 
}

function yasKontrol(){

    document.querySelectorAll('h4').forEach(eleman=>eleman.remove()); 
    document.querySelectorAll('h1').forEach(eleman=>eleman.remove()); 

    let yas;
    yas=document.getElementById("txtYas").value;

    
    if(yas>=18)
    {
        //document.write("Tebrikler. Ehliyet alabilirsiniz...");

        for(let i=0;i<41;i++)
        {
            let baslikSonuc=document.createElement("h4");
            document.body.appendChild(baslikSonuc);
            //console.log(baslikSonuc);
            baslikSonuc.innerHTML="Maşallah,tebrikler. Ehliyet alabilirsiniz...";
            baslikSonuc.style.color="green";
            //console.log(i);
        }

        /*
        document.getElementById("sonuc").innerHTML="Tebrikler. Ehliyet alabilirsiniz...";
        document.getElementById("sonuc").style.color="green";
        */
        
        
    }
    else
    {
        for(let i=0;i<100;i++)
        {
            let baslikSonuc=document.createElement("h1");
            document.body.appendChild(baslikSonuc);
            baslikSonuc.innerHTML="Maalesef ehliyet alma hakkına sahip değilsiniz!";
            baslikSonuc.style.color="red";
        }

        /*document.write("Maalesef ehliyet alma hakkına sahip değilsiniz!")
        document.getElementById("sonuc").innerHTML="Maalesef ehliyet alma hakkına sahip değilsiniz!";
        document.getElementById("sonuc").style.color="red";
        */
    }

}

/*
function temizle(){
    document.getElementById("txtYas").value="";
}
*/

function merhaba(){
    for(let i=0;i<10;i++)
    {
        document.write("Hoşgeldiniz..."+"<br>");
    }
}
