import { Person } from "./classes/person";
import { Address } from "./classes/address";
import { Email } from "./classes/email";
import { Phone } from "./classes/phone";

// Declaración de array para almacenamiento de registros
let agenda: Person[] = [];

// Creación de objetos de clase Person como nuevos contactos e incorporación de los mismos al array "agenda"
agenda.push(
  new Person(
    "Francisca",
    "González Puerto",
    30,
    "35678842T",
    "31/12/91",
    "verde",
    "mujer",
    new Address("Paseo de las Delicias", 55, 5, "C", 28045, "Madrid", "Madrid"),
    new Email("Personal", "frangonzalezpuerto@mail.com"),
    new Phone("Movil", 632589478),
    "Amiga"
  )
);

agenda.push(
  new Person(
    "Jose",
    "Sanchez Diaz",
    54,
    "25152875T",
    "02/06/67",
    "azul",
    "hombre",
    new Address("Calle M. Guerrero", 4, 6, "B", 28015, "Madrid", "Madrid"),
    new Email("Trabajo", "drsimondiaz@clinica.com"),
    new Phone("Trabajo", 985648875),
    "Medico familiar - Solo contactar en horario laboral o urgencias."
  )
);

agenda.push(
  new Person(
    "Marta",
    "Martinez Palma",
    33,
    "33152875T",
    "12/09/88",
    "violeta",
    "mujer",
    new Address("Calle Urumea", 2, 1, "D", 28002, "Madrid", "Madrid"),
    new Email("Trabajo", "mmpalma@mail.com"),
    new Phone("Trabajo", 651333597),
    "Manicuria a domicilio"
  )
);

// Función para imprimir contactos de agenda por consola
function displayAgenda(agenda: Person[]) {
  console.log(`\n---------------- Imprimiendo contactos\n`);
  for (const contact of agenda) {
    console.log(
      `\n*** Contacto: ${contact.name} ${
        contact.surnames
      }\n${contact.displayContact()}`
    );
  }
}

displayAgenda(agenda);

// Edición de contacto filtrado por DNI, para añadir nueva dirección, nuevo telefono y nuevo email.
let findContact = "25152875T";
agenda
  .filter((contact) => contact.dni === findContact)
  .map((contact) => {
    contact.addAddress(
      new Address("Calle Padilla", 18, 3, "B", 28006, "Madrid", "Madrid")
    );
    contact.addEmail(new Email("Personal", "jsdiaz@mail.com"));
    contact.addPhone(new Phone("Personal", 657842597));

    console.log(
      `\n\n! CONTACTO EDITADO\n✓ El contacto con DNI ${findContact}: '${contact.name} ${contact.surnames}' se ha editado con éxito.\n`
    );
  });

// Mostrar agenda editada
displayAgenda(agenda);
