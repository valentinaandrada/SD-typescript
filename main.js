"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./classes/person");
const address_1 = require("./classes/address");
const email_1 = require("./classes/email");
const phone_1 = require("./classes/phone");
// Declaración de array de clase Person
let agenda = [];
// Creación de objetos de clase Person como registro de nuevos contactos e incorporación de los mismos al array "agenda"
agenda.push(new person_1.Person("Francisca", "González Puerto", 30, "35678842T", "31/12/91", "verde", "mujer", new address_1.Address("Paseo de las Delicias", 55, 5, "C", 28045, "Madrid", "Madrid"), new email_1.Email("Personal", "frangonzalezpuerto@mail.com"), new phone_1.Phone("Movil", 632589478), "Amiga"));
agenda.push(new person_1.Person("Jose", "Sanchez Diaz", 54, "25152875T", "02/06/67", "azul", "hombre", new address_1.Address("Calle M. Guerrero", 4, 6, "B", 28015, "Madrid", "Madrid"), new email_1.Email("Trabajo", "drsimondiaz@clinica.com"), new phone_1.Phone("Trabajo", 985648875), "Medico familiar - Solo contactar en horario laboral o urgencias."));
agenda.push(new person_1.Person("Marta", "Martinez Palma", 33, "33152875T", "12/09/88", "violeta", "mujer", new address_1.Address("Calle Urumea", 2, 1, "D", 28002, "Madrid", "Madrid"), new email_1.Email("Trabajo", "mmpalma@mail.com"), new phone_1.Phone("Trabajo", 651333597), "Manicuria a domicilio"));
// Función para imprimir agenda por consola
function displayAgenda(agenda) {
    console.log(`\n---------------- Imprimiendo contactos\n`);
    for (const contact of agenda) {
        console.log(`\n*** Contacto: ${contact.name} ${contact.surnames}\n${contact.displayContact()}`);
    }
}
displayAgenda(agenda);
// Edición de contacto filtrado por DNI para añadir nueva dirección, nuevo telefono y nuevo email.
let findContact = "25152875T";
agenda
    .filter((contact) => contact.dni === findContact)
    .map((contact) => {
    contact.addAddress(new address_1.Address("Calle Padilla", 18, 3, "B", 28006, "Madrid", "Madrid"));
    contact.addEmail(new email_1.Email("Personal", "jsdiaz@mail.com"));
    contact.addPhone(new phone_1.Phone("Personal", 657842597));
    console.log(`\n\n! CONTACTO EDITADO\n✓ El contacto con DNI ${findContact}: '${contact.name} ${contact.surnames}' se ha editado con éxito.\n`);
});
// Mostrar agenda editada
displayAgenda(agenda);
