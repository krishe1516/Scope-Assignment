
class Salary
{
   Name; Address; subSpe; mSal; IT; phone;

   input() 
   {
    this.Name=prompt('Enter your this Name: ')
    this.Address=prompt('Enter your this Address: ')
    this.subSpe=prompt('Enter Subject Specialization: ')
    this.phone=prompt('Enter this.phone No.:')
    this.mSal=parseInt(prompt('Enter monthlt salary: '))

   }

   display()
   {
    document.write('this.Name:-' +this.Name);
    document.write('this.Address:-' +this.Address);
    document.write('Subject Specialization:-' +this.subSpe);
    document.write('this.phone No.:-' +this.phone);
    document.write('Monthly salary:-' +this.mSal)
   }

   calc()
   {
      let aSal;
      aSal=12*this.mSal;

      if(aSal>175000)
      this.IT=5/100.0*(aSal-175000);

      else
      this.IT=0;
   }
}
s1=new Salary();
s1.input();
s1.display();
s1.calc()
