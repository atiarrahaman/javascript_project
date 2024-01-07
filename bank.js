function Deposit_amount(){
    var sum=0;
    var totalAmount=0;
    var deposite =document.getElementById('DepoiteAmount').value;
    var dep_amount=document.getElementById('Deposite').innerText;
    var total=document.getElementById('Toala_amount').innerText;
    var depositeConvert=Convert(deposite);
    var dep_amountConvert=Convert(dep_amount);
    var Total_convert=Convert(total);
    sum=depositeConvert+dep_amountConvert;
    totalAmount=depositeConvert+Total_convert;
    document.getElementById('Deposite').innerText=sum;
    document.getElementById('Toala_amount').innerText=totalAmount;
    
    document.getElementById('DepoiteAmount').value='';
    

}



function Balance(){
    var sum=0;
    var withdraw_input=document.getElementById('withdraw_input').value;
    var w_input=Convert(withdraw_input);
    var withdraw_box=document.getElementById('withdraw_b').innerText;
    var w_box=Convert(withdraw_box);

    var total__=document.getElementById('Toala_amount').innerText;
    var t__=Convert(total__);
    sum=w_input+w_box;
    t__-=w_input;
    document.getElementById('withdraw_b').innerText=sum;
    document.getElementById('Toala_amount').innerText=t__;

    document.getElementById('withdraw_input').value='';

}

function Convert(value){
    return parseFloat(value);
}