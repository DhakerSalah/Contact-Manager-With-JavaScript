class Contact {
    constructor(firstname, lastname, phone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone
    }
}

const contact1 = new Contact("Dhaker","Salah","123456789");
const contact2 = new Contact("Meline", "Folo","12345678");

const contacts = [contact1, contact2];


const option = ["1 - Contact list","2 - Add a contact","0 - Exit"];

console.log ("Welcome to the contact manager !");
  
while (choix !== 0) {
    for (var i = 0; i < option.length; i++) {
        console.log(option[i]);
    };
    var choix = Number(prompt("Choose an option :"));
    switch (choix) {
  
        case 1:
            for (var i = 0; i < contacts.length; i++) {
            console.log(contacts[i]);
            };
            break;
        case 2:
            var newFirstName = prompt("Enter First Name");
            var newLastName = prompt("Enter Last Name");
            var newPhone = prompt("Enter phone number")
            var newContact = new Contact(newFirstName, newLastName, newPhone);
            contacts.push(newContact);
            console.log("The contact has been successfully added !");
            break;
        case 0:
            console.log("Bye !");
    }
}