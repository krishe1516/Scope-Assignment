
class Student
{
    name; hindi; english; maths; computer; average; grade

    accept()
    {
        this.name=prompt("Enter your name")
        this.hindi=parseInt(prompt("Marks in Hindi"))
        this.english=parseInt(prompt("Marks in English"))
        this.maths=parseInt(prompt("Marks in Maths"))
        this.computer=parseInt(prompt("Marks in Computer"))
    }

    calcavg()
    {
        this.average=(this.hindi + this.english + this.maths + this.computer )/4;
        document.write("Average :-" +this.average +"<br>");

        if(this.average>=90){
            document.write("Grade A++" );
        }
        else if(this.average>=75 && this.average<=89)
        {
            document.write("Grade A"  +"<br>")
        }
    }

    display()
    {
        document.write("Name :-" +this.name +"<br>")
    }

}

let stu=new Student()
stu.accept()
stu.calcavg()
stu.display()
