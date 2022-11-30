
class Bank
{ 
    name; acno; type; bal;
    main()
    {
        let bank=new Bank;
        bank.initialise()
        bank.depo(1000);
        bank.withdraw(700)
        bank.print()
    }
    initialise()
    {
     this.name=prompt("Enter Your Name")
     this.acno=parseInt(prompt("Enter Your Account Number"))
     this.type=prompt("Account Type - sav / cur")
     this.bal=parseInt(prompt("Enter the balance amount in the account"))
    }

    depo(a)
    {
        this.depo=a;
       this.bal= this.bal+this.depo;
    }
    withdraw(b)
    {
        this.with=b;
        if(this.bal - this.with < 1000){
            document.write("Minimum Balance should be Rs.1000" +this.bal +"<br>")
        }
        else{
            this.bal=this.bal-this.with;
        }
    }

    print()
    {
        document.write("Name :-" +this.name +"<br>")
        document.write("Account Number :-" +this.acno +"<br>")
        document.write("Type of Account :-" +this.type +"<br>")
        document.write("Balance Amount :-" +this.bal +"<br>")
    }
}

let object=new Bank()
object.main();