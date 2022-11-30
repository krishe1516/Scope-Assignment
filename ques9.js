
class Empl
{
    Emp_No; Name; Basic; DA; HRA; TA; PF; Gross

    main()
    {
        let data=new Empl();
        data.get()
        data.calcu()
        data.display()
    }

    get()
    {
        this.Emp_No=parseInt(prompt("Enter Employee No."))
        this.Name=prompt("Enter Your Name")
        this.Basic=prompt("Enter your salary")
    }

    calcu()
    {
        if(this.Basic>=20000){
         this.DA=0.53 * this.Basic;
         this.TA=0.12 * this.Basic
         this.HRA=0.10 * this.Basic;
         this.PF=0.08 * this.Basic
        }
       else if(this.Basic>=10000 && this.Basic<20000){
            this.DA=0.45 * this.Basic;
            this.TA=0.10 * this.Basic
            this.HRA=0.12 * this.Basic;
            this.PF=0.075* this.Basic
           }
          else if(this.Basic<10000){
            this.DA=0.40 * this.Basic;
            this.TA=0.08 * this.Basic
            this.HRA=0.14 * this.Basic;
            this.PF=0.07 * this.Basic
           }
           this.Gross =(parseInt((this.Basic) + (this.DA) - (this.HRA) ) - (this.PF))
    }

    display()
    {
        document.write("Employee No.:-" +this.Emp_No +"<br>")
        document.write("Name :-" +this.Name +"<br>")
        document.write("Gross Salary:-" +this.Gross +"<br>")
        document.write("PF :-" +this.PF +"<br>")
    }
}

let print=new Empl()
print.main();