const apple= {
  name:"apple",
  display: function (){
    console.log(`${this.name}: π`)   //κ°μ²΄ μμμ μκΈ°μμ μ μμ±μ μ κ·Όν λλ this λΆμ΄κΈ°
  },
};
console.log(apple);
apple.display();