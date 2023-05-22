class Insurance {
    constructor(firstName, lastName, age, phoneNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.phoneNumber = phoneNumber;
    }
  
    formatPhoneNumber() {
        const chunks = this.phoneNumber.match(/.{1,3}/g);
        return chunks.join(' ');
      }
      
  
    toString() {
      const formattedPhoneNumber = this.formatPhoneNumber(this.phoneNumber);
      return `${this.firstName} ${this.lastName} (Věk: ${this.age}, Tel.: ${formattedPhoneNumber})`;
    }
  
    isValidPhoneNumber() {
      return /^\d{9}$/.test(this.phoneNumber);
    }
  
    isAdult() {
      return this.age >= 18;
    }
}
  

/*
*    Třída Insurance:
*    - Slouží k vytváření objektů reprezentujících pojištěné osoby.
*    - Konstruktor přijímá parametry pro inicializaci vlastností objektu (firstName, lastName, age, phoneNumber).
*    - Metoda toString() vrací textovou reprezentaci pojištěné osoby.
*
*    Tento samostatný soubor obsahuje definici třídy Insurance, která je použita v mé aplikaci.
*    Oddělení této funkcionality do samostatného souboru zlepšuje přehlednost, modularitu a udržovatelnost kódu.
*    Využil jsem anglické pojmenovávání proměných v rámci tréningu AJ a praktiky snadného sdílení kódu v s mezinárodními kolegy
*    CELÝ PROGRAM JE PRO ÚČEL VZDĚLÁVÁNÍ V RÁMCI REKVALIFIKACE PROGRAMÁTOR WWW APLIKACÍ JAVASCRIPT A NESLOUŽÍ KE KOMERČNÍMU ČI OSOBNÍMU UŽITÍ
*    programátor Roman Látal / LivegonCZE
*/
