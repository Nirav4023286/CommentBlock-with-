var myapp = angular.module("myapp", [])
myapp.controller("commentController", function($scope) {
  $scope.comment;
  $scope.users = [];
  var user = {}
  $scope.commentList=[];
  $scope.userList=[];

  $scope.submit = function() {
    var complexElement=document.getElementsByClassName("fr-element fr-view")[0].innerHTML;
    var numberOfUsers=document.getElementsByClassName("atwho-inserted").length;
    var comment=complexElement.split("</span>");
    for(var i=0;i<numberOfUsers;i++){

      comment.shift();
      console.log(comment);
      var actualComment=comment[0].split("</p>");
      var atUser=document.getElementsByClassName("atwho-inserted")[i].innerHTML;
      var user=atUser.replace("@", "")
      if(i==(numberOfUsers-1)){
        var lastComment=actualComment[0];
        var res =lastComment.replace("&nbsp;", "");
        actualComment[0]=res;
      }
      console.log(actualComment[0]);
      $scope.commentList.push(actualComment[0]);
      $scope.userList.push(user);
      $scope.users.push({
        email:user,
        comment:actualComment[0]
      });


      console.log($scope.userList);
      console.log($scope.commentList);
    }

    console.log($scope.userList);
    console.log(numberOfUsers);


  }

});