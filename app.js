/**
 * Created by kriz_dev on 22-12-2021.
 */

var rdApp = angular.module("rdApp", ["ngRoute"]);

// configure our routes
rdApp.config(function ($routeProvider) {
  $routeProvider

    // route for the theme page
    .when("/", {
      title: "Home - Rahuldas R",
      description: "",
      templateUrl: "pages/home.html",
      controller: "mainController",
    })

    // route for the home page
    .when("/home", {
      title: "Home - Rahuldas R",
      description: "",
      templateUrl: "pages/home.html",
      controller: "mainController",
    })
    // route for the landscape page
    .when("/works", {
      title: "Works - Rahuldas R",
      description: "",
      templateUrl: "pages/works.html",
      controller: "mainController",
    })
    // route for the culture page
    .when("/profile", {
      title: "Profile - Rahuldas R",
      description: "",
      templateUrl: "pages/profile.html",
      controller: "mainController",
    })
    // route for the trending page
    .when("/contact", {
      title: "Contact - Rahuldas R",
      description: "",
      templateUrl: "pages/contact.html",
      controller: "mainController",
    });
});

rdApp.run([
  "$rootScope",
  "$route",
  function ($rootScope, $route) {
    // $rootScope.$on('$viewContentLoaded', function () {
    //     $templateCache.removeAll();
    // });

    $rootScope.$on("$routeChangeSuccess", function () {
      document.title = $route.current.title;
    });

    $rootScope.langChange = false;
    $rootScope.myLang = "ENGLISH";
    $rootScope.engdata = {};
  },
]);

rdApp.controller("mainController", function ($rootScope, $scope) {
  //Menu Toggle

  $rootScope.toggleMenu = function ($event) {
    const button = document.querySelector(".menuRemoteButton");
    const menu = document.querySelector(".headerExpand");

    button.classList.toggle("menu-active");
    menu.classList.toggle("active");
  };

  //Video
  const videor = document.querySelector("#myVideo");
  // var btn = document.getElementById("myBtn");
  videor.play();

  // function myFunction() {
  //   if (videor.paused) {
  //     videor.play();
  //     // btn.innerHTML = "Pause";
  //   } else {
  //     videor.pause();
  //     // btn.innerHTML = "Play";
  //   }
  // }
});
