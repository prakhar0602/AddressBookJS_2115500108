class RegexException{ // Class for Regex Exception Handling
    static checkDetails(firstName,lastName,address,city,state,zip,phoneNumber,email){
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Regex for first and Last Name
        const locationRegex = /^.{4,}$/; // Regex for City, State and Address
        const zipRegex = /^[0-9]{6,}$/;  // Regex for ZIP Code
        const phoneNumberRegex = /^[1-9][0-9]{9,}$/; // Regex for phone Number
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex for Email
       
        if(!nameRegex.test(firstName)){     // Testing FirstName
            throw "First Name is Invalid";
        }
        if(!nameRegex.test(lastName)){      // Testing LastName
            throw "Last Name is Invalid";
        }
        if(!locationRegex.test(address)){   // Testing Address
            throw "Address should contain atleast 4 charcaters";
        }
        if(!locationRegex.test(city)){      // Testing City
            throw "City should contain atleast 4 charcaters";
        }
        if(!locationRegex.test(state)){     // Testing State
            throw "State should contain atleast 4 charcaters";
        }
        if(!zipRegex.test(zip)){            // Testing ZIP Code
            throw "Zip Code is Invaid";
        }
        if(!phoneNumberRegex.test(phoneNumber)){    // Testing Phone Number
            throw "Phone Number is Invalid";
        }
        if(!emailRegex.test(email)){        //Testing Email
            throw "Email is Invalid";
        }
    }
}

class Contact{ // Contact Class
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){ // Initializing Details
        RegexException.checkDetails(firstName,lastName,address,city,state,zip,phoneNumber,email); // Handling Regex Exception
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
        
        // For checking Duplicate we will be comparing both name and address of Contact
        let existingContacts = this.list.filter((contact)=>(contact.firstName==x.firstName && contact.lastName==x.lastName && contact.address==x.address))
        if(existingContacts.length>0){
            console.log("Contact Already Exists");
            return;
        }
        this.list = [...this.list,x] // Adding Contact in Address Book
        console.log("Contact Added\n");
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
    findAndEdit(name,edited){ // function to find and edit Contact
        for(let i of this.list){ //traversing over all Contacts
            RegexException.checkDetails(edited.firstName,edited.lastName,edited.address,edited.city,edited.state,edited.zip,edited.phoneNumber,edited.email); //Validating New Details 
            if((i.firstName+" "+i.lastName) == name){ // Comparing Full name of each Contact
                
                //Updating Values
                i.firstName = edited.firstName
                i.lastName = edited.lastName
                i.address = edited.address
                i.city = edited.city
                i.state = edited.state
                i.zip = edited.zip
                i.phoneNumber = edited.phoneNumber
                i.email = edited.email
                console.log("Contact Edited\n"); //Acknowledgement of edit
                return;
            }
        }
        console.log("Contact Not Found\n"); // Contact Not Found Case Handling
    }
    findAndDelete(name){ // function to find and delete Contact
            this.list = this.list.filter(i=>(i.firstName+" "+i.lastName) != name);
        console.log("Contact Deleted\n");
    }

    numberOfContacts(){ // Calculating No of Contacts
        const length = this.list.reduce((size, num) => size + 1, 0); // Using reduce function
        console.log("Number of Contacts -> "+length+"\n");
    }

    searchByCity(city){ // function to search Contacts by City
        let contacts = this.list.filter(contact=>contact.city==city)
        console.log("Following Contacts are in "+city);
        for(let i of contacts){
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
    searchByState(state){ // function to search Contacts By State
        let contacts = this.list.filter(contact=>contact.state==state)
        console.log("Following Contacts are in "+state);
        for(let i of contacts){
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
    countByCity(city){ // function to count Contacts by City
        let contacts = this.list.filter(contact=>contact.city==city)
        const length = contacts.reduce((size, num) => size + 1, 0); // Using reduce function
        console.log("Number of Contacts in "+city+"-> "+length);
    }
    countByState(state){ // function to count Contacts By State
        let contacts = this.list.filter(contact=>contact.state==state)
        const length = contacts.reduce((size, num) => size + 1, 0); // Using reduce function
        console.log("Number of Contacts in "+state+"-> "+length);
    }
}

try{

    let book = new addressBook(); // Creating Instance of AddressBook
    
    let contact1 = new Contact("Prakhar","Gupta","ldiuug hdfl hsdfl hsdhlhgd d","agra","Uttar Pradesh",282003,8218748718,"skdjfoise@gmail.com")
    let contact2 =new Contact("Karan","Gupta","ldiuug hdfl hsdflbkldnfknbdf hsdhlhgd d","agra","Uttar Pradesh",282001,8217748718,"dtsnskdjfoise@gmail.com")
    let contact3 = new Contact("Rahul","Kumar","ldiuug hdfl hsdfl hsdhlhgdlfiobnlfknbd d","agra","Uttar Pradesh",282004,8214748718,"skdtnertnerjfoise@gmail.com")
    let contact4 = new Contact("Raj","Gupta","ldiuug hdfl hsdfl lkdfb;jdfbfhsdhlhgd ","agra","Uttar Pradesh",282005,8212222718,"skdjfoisetrnrte@gmail.com")
    let contact5 =new Contact("Karan","Gupta","ldiuug hdfl hsdflbkldnfknbdf hsdhlhgd d","agra","Uttar Pradesh",282001,8217748718,"dtsnskdjfoise@gmail.com")
    
    // Adding Contacts to address book
    book.addContact(contact1) 
    book.addContact(contact2)
    book.addContact(contact3)
    book.addContact(contact4)
    
    // printing contact info
    book.printAllContacts()
    
    let editedContact = new Contact("Saakar", "Talwar","jdgsgfsefsfheskef f hskf skf ","Indore","Madhya Pradesh",284005,7362426490,"abc@gmail.com");// Edited Contact details
    book.findAndEdit("Saakar Talwar",editedContact); // Invalid Contact instance
    book.findAndEdit("Raj Gupta",editedContact); // Valid edit instance
    
    // printing edited contact infos
    book.printAllContacts()

    book.findAndDelete("Saakar Talwar"); // Deleting Contact based on full name
    book.printAllContacts() // Displaying all Contacts

    book.numberOfContacts() // Calculating Number of Contacts

    book.addContact(contact5); // Adding Existing Contact instance
    book.addContact(editedContact);
    book.searchByCity("Indore"); // Searching By City
    book.searchByState("Uttar Pradesh"); // Searching By State

    book.countByCity("Indore") //Count By City
    book.countByState("Uttar Pradesh") //Count By State
}
catch(e){
    console.log(e);
}