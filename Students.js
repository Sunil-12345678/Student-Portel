

function loan(amount,Interest,ats){
  const Mo = Yr /12/100;
  const emi =(amount*Interest*Math.pow(1+Mo,ats)) /(Math.pow(1+Yr,ats));
  return emi.toFixed(2);

}
document.getElementById('btn').addEventListener('click',function(){

  const amount = praseFloat(documbent.getElementById('amount').value);
  const Interest = praseFloat(documbent.getElementById('Interest').value);
  const ats = praseFloat(documbent.getElementById('ats').value);
  if (isNaN(amount) || isNaN(Interest) || isNaN(alt) || amount <= 0 || Interest <= 0 || als 0) {
      document.getElementById('emiResult').innerText = 'Please enter valid input values.';
      return; 
  
object.geetOnePropertiyNam();

}
const persion ={
  fullName function()

}




//*function loan(principal, annualRate, tenure) {
  //const monthlyRate = annualRate / 12 / 100;
  //const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  //return emi.toFixed(2);
//}
//document.getElementById('calculateButton').addEventListener('click', function() {
  //const principal = parseFloat(document.getElementById('principal').value);
  //const rate = parseFloat(document.getElementById('rate').value);
  //const tenure = parseInt(document.getElementById('tenure').value);

  //if (isNaN(principal) || isNaN(rate) || isNaN(tenure) || principal <= 0 || rate <= 0 || tenure <= 0) {
    //  document.getElementById('emiResult').innerText = 'Please enter valid input values.';
      //return; */
 // }