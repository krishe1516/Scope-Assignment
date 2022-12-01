
class Book
{
    BOOK_NO; book_title; PRICE;

    input()
    {
        this.BOOK_NO=prompt("Enter the book no.");
        this.book_title=prompt("Enter the book title :")
        this.PRICE=parseInt(prompt("Enter the this.PRICE :"))
    }
    total_cost(n)
    {
        let tcost;
        tcost = this.PRICE * this.n;
        document.write("Total Cost :" +tcost)
    }
    purchase()
    {
        this.n=parseInt(prompt("Enter the no.of copies to purchase :"))
        this.total_cost(this.n);
    }


}
let obj=new Book();
obj.input();
obj.purchase()