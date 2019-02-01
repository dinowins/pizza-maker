// business logic
function Pizza() {
  this.size = ""; //$2 for small $4 for medium $6 for large $8 for x-large
  this.proteins = []; //$2 each
  this.vegetables = []; //$1 each
  this.cheese = []; //$1 each
  this.sauce = [];
  this.dough = "";
  this.price = 0;
}

Pizza.prototype.getPriceForSize = function() {
  if (this.size === "Small") {
    this.price += 2;
  } else if (this.size === "Medium") {
    this.price += 4;
  } else if (this.size === "Large") {
    this.price += 6;
  } else if (this.size === "Extra-Large") {
    this.price += 8;
  }
}

Pizza.prototype.getPriceForToppings = function() {
  for (var i = 0; i < this.proteins.length; i++) {
    if (this.proteins[i]) {
      this.price += 2;
    }
  }
  for (var i = 0; i < this.vegetables.length; i++) {
    if (this.vegetables[i]) {
      this.price += 1;
    }
  }
  for (var i = 0; i < this.cheese.length; i++) {
    if (this.cheese[i]) {
      this.price += 1;
    }
  }
}

Pizza.prototype.getTotalPrice = function() {
  return "$ " + this.price.toFixed(2);
}

// user interface
$(function() {


  $("#pizza-maker").submit(function(event){
    var newPizza = new Pizza();
    var pizzaSize = $("#pizza-size").val();
    var dough = $("#pizza-dough").val();
    var proteins = $("input:checkbox[name=proteins]:checked");
    var vegetables = $("input:checkbox[name=vegetables]:checked");
    var cheese = $("input:checkbox[name=cheese]:checked");
    var sauce = $("input:checkbox[name=sauce]:checked");
    newPizza.size = pizzaSize;
    proteins.each(function() {
      newPizza.proteins.push($(this).val());
    });
    vegetables.each(function() {
      newPizza.vegetables.push($(this).val());
    });
    cheese.each(function() {
      newPizza.cheese.push($(this).val());
    });
    sauce.each(function() {
      newPizza.sauce.push($(this).val());
    });
    newPizza.dough = dough;
    newPizza.getPriceForSize();
    newPizza.getPriceForToppings();
    $("#pizza-price").text(newPizza.getTotalPrice());
    console.log(newPizza.price);
    event.preventDefault();
  });
});
