// * For Amount row
$("#tBody").delegate('.amount','keyup',function (){
    // for total
    let amount = $(this).val();
    let quantity = $(this).parent('.amount-row').siblings('.quantity-row').children('.quantity').val();
    console.log(quantity);
    let total = amount * quantity;
    console.log(total);
    $(this).parentsUntil('#tBody').children('.total').html(total);
    totalCalc();
})

// * For Quantity row
$("#tBody").delegate('.quantity','keyup',function (){
    // for total
    let amount = $(this).parent('.quantity-row').siblings('.amount-row').children('.amount').val();
    console.log(amount);
    let quantity = $(this).val();
    console.log(quantity);
    let total = amount * quantity;
    console.log(total);
    $(this).parent(".quantity-row").siblings('.total').html(total);
    totalCalc();
})

// For creating new list
let count = 1;
$(".new-list").on('click',function (){
    count+=1;
    $('#tBody').append(`
        <tr class="t-row">
            <td>${count}</td>
            <td style="width: 300px;" class="p-0 name-row"><input type="text" class="form-control name-input" autofocus required placeholder="Enter the item name"></td>
            <td style="width: 200px;" class="p-0 amount-row"><input type="number" min="100" class="form-control amount" required placeholder="Enter the amount"></td>
            <td style="width: 200px;" class="p-0 quantity-row"><input type="number" min="1" max="100" value="1" class="form-control quantity" required placeholder="Enter the quantity"></td>
            <td class="total">0</td>
        </tr>
    `);

});

// All total calculation
function totalCalc(){
    let totalList = [];
    let totalArr = $("#tBody").children().children('.total');
    console.log(totalArr);
    for (const t of totalArr) {
        totalList.push(Number(t.innerHTML));
    }
    let totalCal = totalList.reduce((x,y)=>x+y);
    $(".total-calc").html(totalCal);
}

