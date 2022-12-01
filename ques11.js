
class Fruitjuice
{
    pCode=1234;
    pType="xlx";
    pSize=123;
    pPrice=1234;
    flavour="choco";

    input()
    {
       this.pCode=parseInt(prompt("Enter the Product Code :")) 
       this.flavour=prompt("Enter the Flavour (Orange/Apple,etc): ")
       this.pType=prompt("Enter the Pack Type (TetraPack/Bottle,etc) : ")
       this.pSize=parseInt(prompt("Enter the Pack Size (200ml/500ml/1L) :"))
       this.pPrice=parseInt(prompt("Enter the product Price : "))
    }

    discount()
    {
        this.pPrice-=10;
    }
    
    display()
    {
        document.write("Product Code :" +this.pCode +"<br>")
        document.write("Flavour :" +this.flavour  +"<br>")
        document.write("Pack Type:" +this.pType  +"<br>")
        document.write("Pack Size:" +this.pSize  +"<br>")
        document.write("Product Price:" +this.pPrice  +"<br>")
        document.write("Discount:" +this.pPrice  +"<br>")
    }
}

let fruitjuice=new Fruitjuice();
fruitjuice.input();
fruitjuice.discount();
fruitjuice.display()