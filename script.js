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


function hesapla(){
    //Değişkenleri tanımlama adımı
    let sinav,performans,ortalama;

    //Değişkenlere değer aktarma adımı(Alınan değeri sayısala dönüştürdük!)
    sinav=Number(document.getElementById("txtSinav").value);
    performans=Number(document.getElementById("txtPerformans").value);

    //Hesaplama adımı
    ortalama=(sinav+performans)/2;

    //Sonucu yazdırmadan önce şart kontrolü ve sonucu yazdırma adımı
    if(ortalama<50)
    {
        document.getElementById("sonuc").innerHTML="Not ortalamanız: " + ortalama +"<br>"+ "Maalesef KALDINIZ!";
    }
    else
    {
        document.getElementById("sonuc").innerHTML="Not ortalamanız: " + ortalama +"<br>"+ "Tebrikler GEÇTİNİZ";

    }
}

function dortislem(){

    //Değişkenleri girdiler ve çıktılar için tanımlama adımı
    let secim,sayi1,sayi2,sonuc;

    //secim değişkeni içerisine listede gezerek seçili olan değeri aktarma
    for(let i=0;i<document.getElementById("islemler").length;i++)
    {
        if(document.getElementById("islemler").options[i].selected)
        {
            secim=document.getElementById("islemler").options[i].value;
        }   
    }

    //Text kutularına girilen değerleri sayi1 ve sayi2 değişkenlerine aktarma
    sayi1=Number(document.getElementById("txtSayi1").value);
    sayi2=Number(document.getElementById("txtSayi2").value);

    //İşlem seçimine göre şart kontrollü hesaplama yapma adımı
    if(secim=="+")
    {
        sonuc=sayi1+sayi2;
        document.getElementById("sonuc").innerHTML=sonuc;
    }
    else if(secim=="-")
    {
        sonuc=sayi1-sayi2;
        document.getElementById("sonuc").innerHTML=sonuc;
    }
    else if(secim=="*")
    {
        sonuc=sayi1*sayi2;
        document.getElementById("sonuc").innerHTML=sonuc;
    }
    else if(secim=="/")
    {
        sonuc=sayi1/sayi2;
        document.getElementById("sonuc").innerHTML=sonuc;
    }
    else if(secim=="#")
    {    
        document.getElementById("sonuc").innerHTML="Seçim yapmadınız!";
    }

}

function cevir(){
    let para,secim,sonuc;
    const dolar=0.13,euro=0.10;

    para=Number(document.getElementById("txtPara").value);

    for(let i=0;i<document.getElementById("slctDoviz").length;i++)
    {
        if(document.getElementById("slctDoviz").options[i].selected)
        {
            secim=document.getElementById("slctDoviz").options[i].value;
        }  

        //console.log(secim);
    }

    if(secim=="$")
    {
        sonuc=para*dolar;
        document.getElementById("sonuc").innerHTML="Paranızın seçtiğiniz döviz cinsinden karşılığı: "+sonuc+secim;

    }
    else if(secim=="E")
    {
        sonuc=para*euro;
        document.getElementById("sonuc").innerHTML="Paranızın seçtiğiniz döviz cinsinden karşılığı: "+sonuc+secim;

    }
    else if(secim=="#")
    {
        
        document.getElementById("sonuc").innerHTML="Seçim yapmadınız!!!";
    }


}

function taksimetre(){
    let mesafe,odenecekTutar;
    const tarife=3.5;

    mesafe=Number(document.querySelector("#txtMesafe").value);

    odenecekTutar=mesafe*tarife;

    document.querySelectorAll("h3")[0].innerHTML="Gideceğiniz mesafe için ortalama ücret: "+odenecekTutar+" TL'dir";
}

function altinHesapla(){
    
    

    let islemTuru,altinTuru,tutar,miktar,sonuc;
    var i;
    const gramAltin=450,ceyrekAltin=700;

    for(i=0;i<document.getElementsByName("ceviriTuru").length;i++)
    {
        
        if(document.getElementsByName("ceviriTuru")[i].checked)
        {
            islemTuru=document.getElementsByName("ceviriTuru")[i].value;
        }

    }

    console.log(islemTuru);

    let listeAltinTuru=document.getElementById("slctAltinTuru");

    for(i=0;i<listeAltinTuru.length;i++)
    {
        if(listeAltinTuru[i].selected)
        {
            altinTuru=listeAltinTuru[i].value;
        }
    }

    console.log(altinTuru);


}

function altinDonustur(){

    //1.adım --> değişkenleri ve varsa sabitleri tanımlıyoruz.
    let islemCinsi,altinCinsi,paraMiktari,altinMiktari,sonucTutari;
    var i;
    const altinGram=450,altinCeyrek=700;

    
    let elemanSayisi=document.getElementsByName("ceviriTuru").length;
    console.log(elemanSayisi);
    

    //2.adım --> değişkenlere değer aktarıyoruz.(1.listeden seçimi alma)
    for(i=0;i<elemanSayisi;i++)
    {
        if(document.getElementsByName("ceviriTuru")[i].checked)
        {
            islemCinsi=document.getElementsByName("ceviriTuru")[i].value;
        }

        //console.log(i);
    }

    console.log(islemCinsi);


    //2.adım --> değişkenlere değer aktarıyoruz.(2.listeden seçimi alma)
    let listeAltin=document.getElementById("slctAltinTuru");

    for(i=0;i<listeAltin.length;i++)
    {
        if(listeAltin.options[i].selected)
        {
            altinCinsi=listeAltin.options[i].value;
        }    
    }

    console.log(altinCinsi);

    if(islemCinsi=="altindanParaya")
    {
        altinMiktari=Number(document.getElementById("txtMiktarTutar").value);

        if(altinCinsi=="gram")
        {
            sonucTutari=altinMiktari*altinGram;
        }
        else if(altinCinsi=="ceyrek")
        {
            sonucTutari=altinMiktari*altinCeyrek;
        }
        else if(altinCinsi=="yarim")
        {
            sonucTutari=altinMiktari*altinCeyrek*2;
        }
        else if(altinCinsi=="yarim")
        {
            sonucTutari=altinMiktari*altinCeyrek*4;
        }
    }

    else if(islemCinsi=="paradanAltina")
    {
        paraMiktari=Number(document.getElementById("txtMiktarTutar").value);

        if(altinCinsi=="gram")
        {
            sonucTutari=paraMiktari/altinGram;
        }
        else if(altinCinsi=="ceyrek")
        {
            sonucTutari=paraMiktari/altinCeyrek;
        }
        else if(altinCinsi=="yarim")
        {
            sonucTutari=paraMiktari/(altinCeyrek*2);
        }
        else if(altinCinsi=="yarim")
        {
            sonucTutari=paraMiktari/(altinCeyrek*4);
        }
    }

    //Son Adım --> Sonucu yazdırma
    document.getElementById("sonuc").innerHTML="Bulunan sonuç: " + sonucTutari.toFixed(2);
    

}

function tekCiftBul(){
    
}
