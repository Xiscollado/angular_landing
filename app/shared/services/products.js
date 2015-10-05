angular.module('app').service("ProductsService", function() {

    this.heroProduct = function() {
      var heroProduct = {
          image: "hero_glasses.png",
          name: "talk nerdy to me",
          description: "Perfect for long working days at super cool projects. Check our awesome colors",
          link: "#",
          price: "89.90",
          size: "big"
      };
      return heroProduct;
    };

    this.products = function() {
      var products = [ {
          image: "sunglasses.jpg",
          name: "i´m the cool guy",
          description: "i´m looking for some trouble",
          link: "#",
          price: "99.90",
          size: "item-big"
      }, {
          image: "student_glasses.jpg",
          name: "i´m the student",
          description: "I´ll stay here at the library all day long",
          link: "#",
          price: "50.00",
          size: "item-small"
      }, {
          image: "teacher_glasses.jpg",
          name: "i´m the teacher",
          description: "Where is my apple?",
          link: "#",
          price: "55.50",
          size: "item-small"
      }, {
          image: "director_glasses.jpg",
          name: "i´m the director",
          description: "i´m always at the corridor, watching you...",
          link: "#",
          price: "120.00",
          size: "item-small"
      }, {
          image: "her_glasses.jpg",
          name: "i´m her",
          description: "i´m sexy and i know it",
          link: "#",
          price: "199.99",
          size: "item-small"
      },{
          image: "student_glasses.jpg",
          name: "i´m the student",
          description: "I´ll stay here at the library all day long",
          link: "#",
          price: "50.00",
          size: "item-small"
      }, {
          image: "teacher_glasses.jpg",
          name: "i´m the teacher",
          description: "Where is my apple?",
          link: "#",
          price: "55.50",
          size: "item-small"
      }];
      return products;
    };

    this.apparel = function (){
      var products = [{
          image: "hipster_hat.png",
          name: "the hipster´s hat",
          description: "always warm head",
          link: "#",
          price: "25.00",
          size: "item-small"
      } , {
          image: "hipster_bag.png",
          name: "the hipster´s bag",
          description: "For my hipster stuff",
          link: "#",
          price: "30.00",
          size: "item-small"
      } , {
          image: "hipster_shoes.png",
          name: "the hipster´s shoes",
          description: "perfect from the bottom to the top",
          link: "#",
          price: "40.00",
          size: "item-small"
      } , {
          image: "hipster_iphone.png",
          name: "the hipster´s iphone",
          description: "Communication is key",
          link: "#",
          price: "649.00",
          size: "item-small"
      }];
      return products;
    };
    
});