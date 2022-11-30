
class Mobike
{
    bno;pho;name;days;charge

    input()
    {
        this.bno=parseInt(prompt('Enter bike number '))
        this.pho=parseInt(prompt('Enter phone number'))
        this.name=prompt('Enter your name')
        this.days=prompt('Enter No. of days')
        this.charge=parseInt(prompt('Charge is'))
    }

    display()
    {
        document.write('Bike No. :-' +this.bno +"<br>")
        document.write('Phone No. :-' +this.pho +"<br>"  ) 
        document.write('Name :-'  +this.name +"<br>" )  
        document.write( 'No. of days :-' +this.days +"<br>" )  
        document.write( 'Charge :-' +this.charge  +"<br>")

    }
    compute()
    {
        if(this.days<=5)
        {
           this.charge=500*this.days; 
        }
        else if(this.days<=100)
        {
            this.charge=500*5 + (this.days-5) * 400;
        }
        else if(this.days>10)
        {
            this.charge=500*5 + 400*5 +(days-10)*200;
        }

    }
}
let emp=new Mobike()
emp.input()
emp.compute()
emp.display()