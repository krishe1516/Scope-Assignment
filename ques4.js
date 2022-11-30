
class Employee
{
    pan; name; tax_income; tax;

    input()
    {
        this.pan=prompt('Enter Your this.pan')
        this.name=prompt('Enter your this.name')
        this.tax_income=parseInt(prompt('Enter your TAX INCOME'))

    }
    display()
    {
        document.write('Pan No. :-' +this.pan +"<br>" )
        document.write( ' Name :-' +this.name +"<br>")
        document.write('Tax-inxome :-'+this.tax_income +"<br>")
        document.write('Tax :-'  +this.tax  +"<br>")
    }
    calc()
    {
        if(this.tax_income<=100000)
        { 
             this.tax=0;
        }

        else if(this.tax_income>100000 && this.tax_income<=150000)
        {
            10/100.0*(this.tax_income-100000);
        }
        else if(this.tax_income>150001 && this.tax_income<=250000)
        {
            tax=5000+20/100.0*(this.tax_income=150000)
        }
        else
        {
            tax=25000+30/100.0*(this.tax_income-250000)
        }
    }

}
let emp=new Employee()
emp.input()
emp.calc()
emp.display()
