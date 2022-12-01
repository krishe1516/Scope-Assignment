
class BookFair
{
    book; price;

    input()
    {
        this.book=prompt("Enter book name")
        this.price=prompt("Enter book price")
    } 

    calc()
    {
      if(this.price<=1000){
        this.discount=2;
      }  
      else if(this.price>=1000 && this.price<=3000){
        this.discount=10;
      }
      else if(this.price>=3000){
        this.discount=15;
      }

      this.discount=(this.price/100) * this.discount;
      this.price=this.price - this.discount;

    }
 display()
 {
    document.write("Book Name :-" +this.book +"<br>");
    document.write("Book Price :-" +this.price +"<br>")
 }

}
let B=new BookFair();
B.input();
B.calc();
B.display()