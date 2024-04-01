class Cookie {
    constructor(id, name, price, ingredients, type) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.ingredients = ingredients;
      this.type = type;
    }
  }
  
  class Chocolate extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet) {
      super(id, name, price, ingredients, type);
      this.isSweet = isSweet;
    }
  }
  
  class Sweet extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet) {
      super(id, name, price, ingredients, type);
      this.isSweet = isSweet;
    }
  }
  class Strawberry extends Cookie {
    constructor(id, name, price, ingredients, type, isSweet) {
      super(id, name, price, ingredients, type);
      this.isSweet = isSweet;
    }
  }

  module.exports= { Chocolate, Sweet, Strawberry,  };