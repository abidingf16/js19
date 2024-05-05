class Insan{
    constructor(ad,soyad,yas){
        this.ad = ad
        this.soyad = soyad
        this.yas = yas
    }
        ekran(){
            console.log(this.ad,this.soyad);
        }
        yasGoster(){
            console.log(this.yas);
        }
        yasArtir(){
            console.log(this.yas+20);
        }
    
}

let insan = new Insan("Nergiz","Hesenli","23")


console.log(insan.ekran()); 
console.log(insan.yasGoster());
console.log(insan.yasArtir());