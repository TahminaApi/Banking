document.getElementById('deposit-button').addEventListener('click',function() {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    
   //deposit-total
    const depositTotal = document.getElementById('deposit-total');
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositTotal = parseFloat(priviousDepositText)

    const newDepositTotal = priviousDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //balance update 
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmount = parseFloat(balanceTotalText);

    const newBalanceTotal = priviousBalanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear value
    depositInput.value = ''


   
})

//withdraw by clicking button
document.getElementById('withdra-button').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const WithdrawInputAmount = parseFloat(withdrawInputText);

   //withdeaw Total
   const withdrawTotal = document.getElementById('withdraw-total');
   const newWithdrayTotalText = withdrawTotal.innerText;
   const newWithdrawTotalAmount = parseFloat(newWithdrayTotalText);

   const newWithdrawTotal = newWithdrawTotalAmount + WithdrawInputAmount;
   withdrawTotal.innerText = newWithdrawTotal; 

   
    //balance update for withdraw
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = priviousBalanceTotalAmount - WithdrawInputAmount;
    balanceTotal.innerText = newBalanceTotal; 

   //clear value
    withdrawInput.value = ''



})