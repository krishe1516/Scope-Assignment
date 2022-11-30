
class Library
{
    intacc_num; string_title; string_author
main(){
    let data=new Library()
    data.input()
    data.compute()
    data.display()
}

    input()
    {
        this.intacc_num=parseInt(prompt("Number of Books"))
        this.string_title=prompt("Enter Title of Book")
        this.string_author=prompt(" Enter Name of author")
    }

    compute()
    {
        let days=prompt("Enter No. of Days Late")
        
        this.rate= this.days * 2;
    }

    display()
    {
        document.write("Accession number :-" +this.intacc_num +"<br>")
        document.write("Title :-" +this.string_title +"<br>")
        document.write("Author :-" +this.string_author +"<br>")
    }
}
let print=new Library()

print.main();