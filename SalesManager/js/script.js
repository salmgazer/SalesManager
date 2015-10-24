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
    Login();
  });
});


function Login(){
    /*username*/
    var testingUserUsername = $("#username").val();
    /*password*/
    var testingUserassword = $("#password").val();

    /* empty username */
    if(username.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty username<i class="material-icons">close</i></div>';
        return
        }
    if(password.length == 0){
        document.getElementById("error_area").innerHTML = '<div class="chip red white-text">Empty password<i class="material-icons">close</i></div>';
        return;
    }
    var strUrl = "logic/controller.php?testingUserUsername="+username+"&testingUserPassword="+password;
    var objResult = sendRequest(strUrl);
    var errorArea = document.getElementById("error_area");
    document.getElementById("error_area").innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
    if(objResult.result == 0) {
    document.getElementById("error_area").innerHTML = '<div class="chip red white-text">'+objResult.message+'<i class="material-icons">close</i></div>';
    return;
    }
    window.location.href="home.html";
   /*document.getElementById("login_area").innerHTML = '<div class="center"><video width="320" height="240" controls><source src="img/welcome.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>Successful login!</div>';*/
}
