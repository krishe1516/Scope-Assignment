
class movieMagic
{
    year; title; rating;


    accept()
    {
        this.year=parseInt(prompt("Enter the release year of a movie"))
        this.title=prompt("Enter the movie title")
        this.rating=parseInt(prompt("Enter the rating of the movie"))
    }

    display()
   
    {
        if(this.rating>=0 && this.rating<=2){
            document.write("Flop" +this.rating)}
        
        else if(this.rating>=2.1 && this.rating<=3.4){
           document.write("Semi-hit")}

        else if(this.rating>=3.5 && this.rating<=4.5){
            document.write("Hit")}
         
         else if(this.rating>=4.6 && this.rating<=5.0){
            document.write("Super Hit")}
         
    }

}

let p=new movieMagic();
p.accept();
p.display()