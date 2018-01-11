const user = {
    name: 'bruno',
    cities: ['Kampala', 'Gulu', 'Nairobi'],
    printPlacedLived() {
        return this.cities.map((city) => this.name + ' has lived in '+ city);
    }
};
console.log(user.printPlacedLived());

//challange area

const multiplier ={
  num: 2,
  multi: [2,4,6,8],
  multiply (){
      return this.multi.map((sharp) => this.num * sharp );
  }
};
console.log(multiplier.multiply());
