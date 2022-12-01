
class RailwayTicket
{
    name; coach; mobile; amt;

    accept()
    {
        this.name=prompt("Enter your name")
        this.coach=prompt("Coach Type")
        this.mobile=Number(prompt("Enter Mobile No."))
        this.amt=parseInt(prompt("Enter Ticket Amount"))
    }

    update()
    {
       if(this.coach === "First_AC"){
         this.total=this.amt + 700;
       } 
       else if(this.coach === "Second_AC"){
        this.total=this.amt + 500;
       }
       else if(this.coach === "Third_AC"){
        this.total=this.amt + 250;
       }
       else{
        this.total=this.amt;
       }
    }

    display()
    {
        document.write("Customer Name :-" +this.name +"<br>")
        document.write("Coach Type :-" +this.coach +"<br>")
        document.write("Mobile No. :-" +this.mobile +"<br>")
        document.write("Total Amount :-" +this.total )
    }
}

let ac=new RailwayTicket();
ac.accept();
ac.update();
ac.display()