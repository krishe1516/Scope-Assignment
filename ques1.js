
class Employee
{
    constructor(b)
    {
        this.basic=b;
    }
    calc()
    {
        let pf,gp,np,hra,da;
        da=25/100.0*this.basic;
        hra=15/100.0*this.basic;
        pf=8.33/100*this.basic;
        np=this.basic+da+hra;
        gp=np-pf;

        console.log("Gross Pay=" +gp);
    }
}
e1 =new Employee(200000);
e1.calc();