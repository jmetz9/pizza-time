$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate()
{

    let people = parseFloat( $("#amountOfPeople").val() );

    let pizzas = parseFloat( $("#pizzas").val() );

    let toppings = parseFloat( $("#toppings").val() );

    let totalPizzaCost = (15 * pizzas) + (1.25 * toppings);

    let costPerPerson = totalPizzaCost/people;


    $("span#totalPizzaCost").text(totalPizzaCost.toFixed(2));

    $("span#costPerPerson").text(costPerPerson.toFixed(2));

    $(".output").show();
}