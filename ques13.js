
class Flight
{
    fl_no; dest; dist; fuel

    calfuel()
    {
        if(this.dist<=1000){
            this.fuel=500;
        }
        else if(this.dist>1000 & this.dist<=2000){
            this.fuel=1100;
        }
        else{
            this.fuel=2200;
        }
    }

    feedinfo()
    {
        this.fl_no=prompt("Enter the flight no :")
        this.dest=prompt("Enter the destination :")
        this.dist=parseInt(prompt("Enter the distance (in km) :"))
        this.calfuel()
    }

    showinfo()
    {
        document.write("Flight no.:" +this.fl_no +"<br>")
        document.write("Destination:" +this.dest +"<br>")
        document.write("Distance:" +this.dist +"<br>")
        document.write("Fuel :" +this.fuel +"<br>")
    }
}

let flight=new Flight();
flight.feedinfo();
flight.showinfo()