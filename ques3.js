
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
        document.write('Name:' +this.name);
        document.write('Marks:' +this.m1+ ',' +this.m2+ 'and' +this.m3);
        document.write('Maximum Marks:' +this.max);
        document.write('Average:' +this.avg)
    }

    compute()
    {
       max=Math.max(Math.max(this.m1,m2),this.m3);
       this.avg=((this.m1+this.m2+this.m3)/3);

     
    }


}
obj=new Student();
obj.input();
obj.display();
obj.compute();
