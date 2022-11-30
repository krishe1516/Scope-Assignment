
class Bill
{
    name; consumerno; unitconsumed;bill 

    datainput()
    {
        this.name=prompt("Enter Your Name")
        this.consumerno=prompt("Enter the consumer number ")
        this.unitconsumed=prompt("Enter the unit consumed")
    }

    compute()
    {
        if(this.unitconsumed>=100){
            this.bill=this.unitconsumed * 1.20;
        }
        else if(this.unitconsumed>100 && this.unitconsumed<=200){
           this.bill=this.unitconsumed * 2.20;
        }
        else if(this.unitconsumed>200 && this.unitconsumed<=300){
            this.bill= this.unitconsumed * 3.20;
        }
        else if(this.unitconsumed>300){
            this.bill=this.unitconsumed * 4.00;
        }
    }

        display()
        {
            document.write("Name  :-" +this.name +"<br>")
            document.write("Consumer No. :-" +this.consumerno +"<br>")
            document.write("Unit Consumed :-" +this.unitconsumed +"<br>")
            document.write("Bill Amount :-" +this.bill +"<br>")
        }
    
}

let member=new Bill();
member.datainput();
member.compute();
member.display()