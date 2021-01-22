//https://github.com/akteratikofficial/assignment.js

// ---------- kilometerToMeter ----------

function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}
var resultMeter = kilometerToMeter(1);

console.log(resultMeter);


//---------- budgetCalculator ----------

function budgetCalculator( clock, mobile, laptop) {
    var clockCost = clock * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var getTotalCost = clockCost + mobileCost + laptopCost;
    return getTotalCost;
}

var budgetResult = budgetCalculator(1, 2, 3);

console.log(budgetResult);


// ---------- hotelCost ----------

function hotelCost(dayCount) {
    var totalCost = 0;
    if (dayCount <= 10) {
        totalCost= dayCount * 100;
    } else if (dayCount <= 20) {
        var tenDaysCost  = 10 * 100;
        var remainingDays = dayCount - 10;
        // cost per day after first 10 days is 80.
        var remainingDaysCost = remainingDays * 80;
        var totalCost = tenDaysCost  + remainingDaysCost;
    } else {
        var tenDaysCost  = 10 * 100;
        var remainingDaysCost = 10 * 80;
        var twentyDays = dayCount - 20;
        // cost per day after first twenty days is 50.
        var twentyDaysCost = twentyDays * 50;
        var totalCost = tenDaysCost  + remainingDaysCost + twentyDaysCost ;
    }
    return totalCost;
}

var getHotelCost = hotelCost(21);

console.log(getHotelCost);


// ---------- megaFriend ----------

function megaFriend(friendsName) {
    var largestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (largestName.length < friendsName[i].length) {
            largestName = friendsName[i];
        }
    }
    return largestName;
}

// -----------------friendsName -------------------
var getMegaFriend = megaFriend(['Mahdi Hasan', 'Hafiz Sajid Abdullah', 'Sarwar Ahmed',]);

console.log(getMegaFriend);