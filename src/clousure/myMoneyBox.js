function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.group(`Money: $${saveCoins}`)
    }
    return countCoins;
}

const myMoney = moneyBox();
myMoney(5);
myMoney(5);
myMoney(15);

const anasMoney = moneyBox();
anasMoney(10)
anasMoney(10)
anasMoney(30)
