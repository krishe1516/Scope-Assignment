
class ParkingLot
{
    vno; hours; bill;

    input()
    {
        this.vno=parseInt(prompt("Enter Vehicle Number"))
        this.hours=parseInt(prompt("Enter the no. of hours the vehicle is parked"))
        this.bill=parseInt(prompt("Enter the Bill Amount")) 
    }

    calc()
    {
        if(this.hours===1){
            this.bill=this.hours * 3;
        }
        else if(this.hours>1){
            this.bill=(this.hours -1) * 1.50 +3;
        }

    }

    display()
    {
        document.write("Vehicle Number :-" +this.vno +"<br>")
        document.write("Vehicle parking Bill :-"  +this.bill +"<br>" )
         document.write("Number of hours vehicle is parked :-" +this.hours);

    }
}
let park=new ParkingLot();
park.input();
park.calc();
park.display()