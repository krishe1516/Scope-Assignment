
class Student
{
    name;age; m1; m2; m3; max; avg;

    input()
    {
        this.name=prompt('Enter your Name ')
        this.age=parseInt(prompt('Enter age'))
        this.m1=parseInt(prompt('Enter M1'))
        this.m2=parseInt(prompt('Enter M2'))
        this.m3=parseInt(prompt('Enter M3'))
    }

    display()
    {
        _proto_:this.compute();
        document.write('Name:' +this.name +"<br>");
        document.write('Marks:' +this.m1+ ',' +this.m2+ 'and' +this.m3 +"<br>");
        document.write('Maximum Marks:' +this.max +"<br>");
        document.write('Average:' +this.avg +"<br>")
    }

    compute()
    {
       this.max=Math.max(Math.max(this.m1,this.m2),this.m3);
       this.avg=((this.m1+this.m2+this.m3)/3);

     
    }


}
obj=new Student();
obj.input();
obj.display();
obj.compute();
