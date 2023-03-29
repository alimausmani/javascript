
// class calculator():
//     def _init_(self,num1,num2):
//         self.num1=num1
//         self.num2=num2
//     def add(self):
//         return(self.num1+self.num2)
//     def sub(self):
//         return(self.num1-self.num2)
//     def multi(self):
//         return(self.num1*self.num2) 
//     def div(self):
//         return(self.num1/self.num2)           
// num1=int(input("enter the num1:"))
// num2=int(input("enter the num2:"))        
// obj=calculator(num1,num2)
// x=('1.Add \n2.sub \n3.mult \n4.div')
// print(x)
// ope=int(input("Enter the Operator:"))
// if ope==1:
//     print(obj.add())
// elif ope==2:
//     print(obj.sub())  
// elif ope==3:
//     print(obj.multi())
// elif ope==4:
//     print(obj.div())
// else:
//     print("Enter the validation")



class calculator():
    constructor(self,num1,num2);
        self.num1=num1
        self.num2=num2
     add(self);
        return(self.num1+self.num2)
     sub(self);
        return(self.num1-self.num2)
     multi(self);
        return(self.num1*self.num2) 
     div(self);
        return(self.num1/self.num2)           
num1=int(input("enter the num1:"))
num2=int(input("enter the num2:"))        
obj=calculator(num1,num2)
x=('1.Add \n2.sub \n3.mult \n4.div')
console.log(x)
ope=int(input("Enter the Operator:"))
if (ope==1){
    console.log(obj.add())
}
else if (ope==2){
    console.log(obj.sub())
}
else if (ope==3){
    console.log(obj.multi())
}
else if (ope==4){
    console.log(obj.div())
}
else{
    console.log("Enter the validation")
}