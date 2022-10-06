//handle deposit button event
document.getElementById('deposit-button').addEventListener
  ('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount;


    depositTotal.innerText = newDepositTotal
    //update account balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field

    depositInput.value = '';

  });
//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdrow-input');
  const withdrawAmountText = withdrawInput.value;
  const newwithdrawAmount = parseFloat(withdrawAmountText)
  console.log(withdrawAmountText);

  //set withdraw total
  const withdrawTotal = document.getElementById('withdraw-total')
  const previouswithdrowText = withdrawTotal.innerText
  const previouswithdrowTotal = parseFloat(previouswithdrowText);

  const newwithdrowtotal = previouswithdrowTotal + newwithdrawAmount;
  withdrawTotal.innerText = newwithdrowtotal;

  //update balance
  const balanceTotal = document.getElementById('balance-total')
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText)
  const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
  balanceTotal.innerText = newBalanceTotal


  //clear withdrow input 
  withdrawInput.value = '';

})