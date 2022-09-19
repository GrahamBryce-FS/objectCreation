
// 3 classes (counting utility class)

// class has 3 properties and 1 method
//// JS FORM STORAGE
// must store form instances in an array
// separate method called "display()" is called when the user clicks the display all button


class Pet{

    constructor(animal, petAge, age){
        console.log("pet created");
        this.animal = animal; 
        this.petAge = petAge; 
        this.age = age; 

    }
    petting(){
        return document.querySelector("#displayOther").innerHTML = (`wow both of you combined are ${Utils(petAge, age)} years old`);
    }
};

class Main{
    constructor(){
        console.log("demo started");
        this.formData = [];
        document.querySelector("#submit").addEventListener("click", e=>this.add(e));
        document.querySelector("#displayBTN").addEventListener("click", e=>this.display(e));
        
    }
    add(e){
        // this saves all the text fields into "data"
        const data = document.querySelectorAll("input")
        if(this.validateForm(data)){
            // this stops the submit button from refreshing
            e.preventDefault(); 
            let animal = document.querySelector("#animal").value;
            let petAge = document.querySelector("#name").value;
            let age = document.querySelector("#age").value;
            const pet = new Pet(animal, petAge, age);
            this.formData.push(pet);
            

            console.log(this.formData);

            console.log("form is validated");
            document.querySelector("#addedConfirm").innerHTML = `Your Pet has been Added!`;
        }else{
            console.log("form is not valid");
        }
    };

    display(e){
        e.preventDefault(); 
        document.querySelector("#displayAll").innerHTML = this.formData;
        console.log(this.formData);
    }
// currently display button only prints object

    validateForm(formData){
        let validate = true;
        formData.forEach(e=>{
            if(!e.checkValidity()){
                validate=false;
            }
        })
        return validate;
    }
};

(()=>{
    const main = new Main();
})();






