
class Electric_Bill
{
    name; unit; bill;

    accept()
    {
        this.name=prompt("Enter your name")
        this.unit=parseInt(prompt("Enter the number of units consumed"))
        this.bill=parseInt(prompt("Amount to paid"))
    }

    calc()
    {
        if(this.unit<=100){
          this.bill=this.unit * 2  
        }
        else if(this.unit>100 && this.unit<=200){
            this.bill=this.unit * 3
        }
        else if(this.unit>200 && this.unit<=300){
            this.charged=this.unit * (2.5/100);
            this.bill = 5 * this.unit + this.charged;
        }
    }

        display()
        {
            document.write("Name of Customer :-" +this.name +"<br>")
            document.write("Number of Units Consumed:-" +this.unit +"<br>")
            document.write("Bill Amount :-" +this.bill )
        }
    
}

let B=new Electric_Bill();
B.accept();
B.calc();
B.display();