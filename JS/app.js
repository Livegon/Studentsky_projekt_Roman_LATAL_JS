// Globální proměnná pro uchování seznamu pojištěných
let insuranceList = [];

// Funkce pro přidání pojištěného do seznamu
function addInsurance(insurance) {
  insuranceList.push(insurance);
}

// Funkce pro zobrazení seznamu pojištěných
function displayInsuranceList() {
  const tableBody = document.getElementById('insuranceTable');
  tableBody.innerHTML = '';

  insuranceList.forEach(insurance => {
    const row = tableBody.insertRow();
    const nameCell = row.insertCell();
    const ageCell = row.insertCell();
    const phoneNumberCell = row.insertCell();

    nameCell.textContent = insurance.firstName + ' ' + insurance.lastName;
    ageCell.textContent = insurance.age;
    phoneNumberCell.textContent = insurance.formatPhoneNumber();
  });
}

// Zpracování formuláře při odeslání
document.getElementById('insuranceForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = parseInt(document.getElementById('age').value);
  const phoneNumber = document.getElementById('phoneNumber').value;

  const insurance = new Insurance(firstName, lastName, age, phoneNumber);

  // Kontrola věku
  if (!insurance.isAdult()) {
    alert('Osoba musí být plnoletá.');
    return;
  }

  // Kontrola správné délky telefonního čísla
  if (!insurance.isValidPhoneNumber()) {
    alert('Neplatné telefonní číslo. Zadejte 9 číslic.');
    return;
  }

  addInsurance(insurance);
  displayInsuranceList();

  // Resetování formuláře
  document.getElementById('insuranceForm').reset();
});

// Vzoroví uživatelé
const sampleUsers = [
  new Insurance('Jan', 'Novák', 25, '123456789'),
  new Insurance('Petr', 'Svoboda', 35, '987654321'),
  new Insurance('Kateřina', 'Veselá', 42, '456789123'),
  new Insurance('Martin', 'Kovář', 19, '789123456'),
  new Insurance('Lucie', 'Procházková', 28, '321654987')
];

sampleUsers.forEach(user => {
  addInsurance(user);
});

displayInsuranceList();


/* Popis kódu:
*Globální proměnné:
* - `insuranceList`: Pole, které uchovává seznam pojištěných osob.
*
*Funkce:
* - `addInsurance(insurance)`: Přidá pojištěného do seznamu `insuranceList`.
* - `displayInsuranceList()`: Zobrazuje seznam pojištěných osob na stránce.
* - `handleFormSubmit(event)`: Zpracovává hodnoty z formuláře pro přidání nového pojištěného.
*
*Příklady použití:
* - Vytvoření nového pojištěného a jeho přidání do seznamu:
*    const newInsurance = new Insurance(firstName, lastName, age, phoneNumber);
*    addInsurance(newInsurance);
*
* - Zobrazení seznamu pojištěných osob na stránce:
*    displayInsuranceList();
*
*Osobní komentář:
* - Využil jsem anglické pojmenování proměnných v rámci tréninku angličtiny a přípravy na programování v mezijazyčných týmech.
* - Pro účely trvalého ukládání jednoduché a primitivní evidence je možné využít exportu do formátu .xlsx pomocí Node.js a knihovny xlsx-populate.
*   Výhodou tohoto přístupu je, že není nutný samostatný server pro uložení dat.
* - Pro širší evidenci (rozsah pojištění, evidence plnění, apod.) by již byla nutná architektura s relační databází na serveru, jako je například MySQL.
* - CELÝ PROGRAM JE URČEN PRO ÚČEL VZDĚLÁVÁNÍ V RÁMCI REKVALIFIKACE PROGRAMÁTOR WWW APLIKACÍ JAVASCRIPT A NESLOUŽÍ KE KOMERČNÍMU ČI OSOBNÍMU UŽITÍ.
*/
