
function add_user(){
    var name = document.getElementById("user_name").value
    // If Condition here
    localStorage.setItem("name", name)
    window.location = "Let's Chat Room.html"
}