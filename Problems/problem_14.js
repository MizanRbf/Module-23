// How much money remained after buying some groceries?

function bazarHisab(money){
  const morich = 100;
  const fish = 200;
  const vegetable = 50;
  let cost = morich + fish + vegetable;
  let remainingMoney = money - cost;
  return remainingMoney;
}
let totalRemained = bazarHisab(500);
console.log(totalRemained);

