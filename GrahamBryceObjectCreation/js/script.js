
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
        this.petting()
    }
    petting(){
        return document.querySelector("#displayOther").innerHTML = (`wow both of you combined are ${Utils.sum(this.petAge, this.age)} years old!`);
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
        let data = document.querySelectorAll("input")
        if(this.validateForm(data)){
            e.preventDefault(); 
            let animal = document.querySelector("#animal").value;
            let petAge = document.querySelector("#name").value;
            let age = document.querySelector("#age").value;
            let pet = new Pet(animal, petAge, age);
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
        // document.querySelector("#displayAll").innerHTML = this.formData;
        console.log(this.formData);
        let text = "";
        this.formData.forEach(myFunction);
        
        function myFunction(item) {
            console.log(item.animal);
            console.log(item.petAge);
            console.log(item.age);
            
            text  = text  + "<p> Animal Type: "+item.animal+"<br>Pet Age: "+item.petAge+" <br> Owner's Age: "+item.age+"</p>";
        }
        document.querySelector("#displayAll").innerHTML = text;
    };

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






