class User {
    constructor(ad, soyad, dogumTarihi) {
        this.ad = ad;
        this.soyad = soyad;
        this.dogumTarihi = dogumTarihi;
    }

    yasHesapla() {
        let indi = new Date();
        let insaninTevelludu = new Date(this.dogumTarihi)
        let yas = (indi.getTime() - insaninTevelludu.getTime()/1000/60/60/24)
        console.log(yas);
    }

    static Check() {
        console.log('men User clasinin funksiyasiyam');
    }
}

let user1 = new User("Abidin", "Cavadzade", '2010-05-15');
console.log(user1.yasHesapla());
User.Check();
