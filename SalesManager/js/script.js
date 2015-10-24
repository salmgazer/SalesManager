/* u is url */
/* function by Mr Aelaf Dafla */
function sendRequest(u) {
    // Send request to server
    //u a url as a string
    //async is type of request
    var obj = $.ajax({url: u, async: false});
    //Convert the JSON string to object
    var result = $.parseJSON(obj.responseText);
    return result;	//return object
}

$(function () {
  $('#login').submit(function(e) {
    e.preventDefault();
    testingUserLogin();
  });
});


function testingUserLogin(){
    /*username*/
    var testingUserUsername = $("#testingUserUsername").val();
    /*password*/
    var testingUserPassword = $("#testingUserPassword").val();

    /* empty username */
    if(testingUserUsername.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty username<i class="material-icons">close</i></div>';
        return
        }
    if(testingUserPassword.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = "logic/controller.php?testingUserUsername="+testingUserUsername+"&testingUserPassword="+testingUserPassword;
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
    }
    document.getElementById("login_area").innerHTML = '<div class="center"><img src="img/smile.gif" class="login_image" align="middle"/></div><h2 class="center orange-text">Login was Successful!</h2>';
   /*document.getElementById("login_area").innerHTML = '<div class="center"><video width="320" height="240" controls><source src="img/welcome.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>Successful login!</div>';*/
}
