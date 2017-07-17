console.log('JS sourced');

var myApp = angular.module('myApp', []);

//gallery controller function beginning
myApp.controller('GalleryController', function() {
  var gallery = this;
  console.log(this);

//array of picture objects for gallery
    gallery.picture = [
      {
        src: '/images/Cinderella-castle.jpg',
        description: "Cinderella's Castle",
        likes: 0,
        display: true
      },
      {
        src: '/images/epcot.jpg',
        description: "Epcot at night",
        likes: 0,
        display: true
      },
      {
        src: '/images/toystoreride.jpg',
        description: "Toystory ride",
        likes: 0,
        display: true
      },
      {
        src: '/images/mainstreet.jpg',
        description: "Main Street decorated for Christmas",
        likes: 0,
        display: true
      },
      {
        src: '/images/magicband.jpg',
        description: "Magic Band with Color By Amber Jewelry",
        likes: 0,
        display: true
      },
      {
        src: '/images/stitch.jpg',
        description: "Stitch!!",
        likes: 0,
        display: true
      }
    ];

      console.log(gallery.picture);

// on click of picture, the description will show.
    gallery.changeDisplay = function(picture) {
      picture.display = !picture.display;
    };

    gallery.likeButton = function(picture) {
      picture.likes +=1;
    };
}); //gallery controller function end
