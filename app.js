class Contact{ // Contact Class
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){ // Initializing Details
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

class addressBook{ // Address Book Class
    constructor(){
        this.list = [] //Initializing Empty List 
    }
    addContact(x){
        this.list = [...this.list,x] // Adding Contact
    }
    printAllContacts(){ // Displaying All Contact Information
        for(let i of this.list){
            console.log("Name -> " + i.firstName+" "+i.lastName);
            console.log("Address ->" + i.address);
            console.log("City ->" + i.city);
            console.log("State ->" + i.state);
            console.log("Zip ->" + i.zip);
            console.log("Phone No. ->" + i.phoneNumber);
            console.log("Email ->" + i.email);
            console.log();
        }
    }
}

let book = new addressBook(); // Creating Instance of AddressBook

let contact1 = new Contact("Prakhar","Gupta","ldiuug hdfl hsdfl hsdhlhgd d","agra","UP",282003,8218748718,"skdjfoise@gmail.com")
let contact2 =new Contact("Karan","Gupta","ldiuug hdfl hsdflbkldnfknbdf hsdhlhgd d","agra","UP",282001,8217748718,"dtsnskdjfoise@gmail.com")
let contact3 = new Contact("Rahul","Kumar","ldiuug hdfl hsdfl hsdhlhgdlfiobnlfknbd d","agra","UP",282004,8214748718,"skdtnertnerjfoise@gmail.com")
let contact4 = new Contact("Raj","Gupta","ldiuug hdfl hsdfl lkdfb;jdfbfhsdhlhgd d","agra","UP",282005,82121748718,"skdjfoisetrnrte@gmail.com")

// Adding Contacts to address book
book.addContact(contact1) 
book.addContact(contact2)
book.addContact(contact3)
book.addContact(contact4)

// printing contact info
book.printAllContacts()