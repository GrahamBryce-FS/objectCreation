
// 3 classes (counting utility class)

// class has 3 properties and 1 method
//// JS FORM STORAGE
// must store form instances in an array
// ^^^This is done so everything is displayed clearly when when you click the display button
// separate method "add()" in Main classis called when the user clicks the add btn
// separate method called "display()" is called when the user clicks the display all button


class Pet{
    constructor(animal, name, age){
        this.animal = animal; 
        this.name = name;
        this.age = age;
        // this.animal = formData[0]; 
        // this.name = formData[1];
        // this.age = formData[2];
    }
};

class Main{
    constructor(){
        console.log("demo started");
        let pet = new Pet();
        this.formData = [];
        document.querySelector("#submit").addEventListener("click", e=>this.add(e));
        document.querySelector("#displayBTN").addEventListener("click", e=>this.display(e));
        
    }
    add(e){
        // this saves all the text fields into "data"
        const data = document.querySelectorAll("input")
        console.log(data);
        if(this.validateForm(data)){
            e.preventDefault(); 
            // this pushes all input fields from data into the array above in main
            data.forEach(e=>{
                this.formData.push(e.value);
            });
            console.log(this.formData);
            console.log("form is validated");
            document.querySelector("#addedConfirm").innerHTML = `Your Pet ${this.formData[1]} has been Added!`;
        }else{
            console.log("form is not valid");
        }
    };

    display(e){
        // idk what if statement goes here
        // all pets need to be displayed 
        document.querySelector("#displayAll").innerHTML = Pet;
    }

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



