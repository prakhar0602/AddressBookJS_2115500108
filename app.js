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
        this.list = [...this.list,x] // Adding Contact in Address Book
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
}

try{

    let book = new addressBook(); // Creating Instance of AddressBook
    
    let contact1 = new Contact("Prakhar","Gupta","ldiuug hdfl hsdfl hsdhlhgd d","agra","Uttar Pradesh",282003,8218748718,"skdjfoise@gmail.com")
    let contact2 =new Contact("Karan","Gupta","ldiuug hdfl hsdflbkldnfknbdf hsdhlhgd d","agra","Uttar Pradesh",282001,8217748718,"dtsnskdjfoise@gmail.com")
    let contact3 = new Contact("Rahul","Kumar","ldiuug hdfl hsdfl hsdhlhgdlfiobnlfknbd d","agra","Uttar Pradesh",282004,8214748718,"skdtnertnerjfoise@gmail.com")
    let contact4 = new Contact("Raj","Gupta","ldiuug hdfl hsdfl lkdfb;jdfbfhsdhlhgd ","agra","Uttar Pradesh",282005,8212222718,"skdjfoisetrnrte@gmail.com")
    
    // Adding Contacts to address book
    book.addContact(contact1) 
    book.addContact(contact2)
    book.addContact(contact3)
    book.addContact(contact4)
    
    // printing contact info
    book.printAllContacts()
    
    let editedContact = new Contact("Saakar", "Talwar","jdgsgfsefsfheskef f hskf skf ","mathura","Uttar Pradesh",284005,7362426490,"abc@gmail.com");// Edited Contact details
    book.findAndEdit("Saakar Talwar",editedContact); // Invalid Contact instance
    book.findAndEdit("Raj Gupta",editedContact); // Valid edit instance
    
    // printing edited contact infos
    book.printAllContacts()

    book.findAndDelete("Saakar Talwar"); // Deleting Contact based on full name
    book.printAllContacts() // Displaying all Contacts
}
catch(e){
    console.log(e);
}