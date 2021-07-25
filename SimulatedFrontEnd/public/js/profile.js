let $profileContainer = $("#profileContainer");
if ($profileContainer.length != 0) {
  console.log(
    "Profile page is detected. Binding event handling logic to form elements."
  );
  $("#backButton").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });

  function getOneUser() {
    const baseUrl = "http://localhost:5000";
    let userId = localStorage.getItem("user_id");
    tmpToken = localStorage.getItem("token");

    axios({
      headers: { user: userId, authorization: "Bearer " + tmpToken },
      method: "get",
      url: baseUrl + "/api/user/" + userId,
    })
      .then(function (response) {
        //Using the following to inspect the response.data data structure
        //before deciding the code which dynamically populate the elements with data.
        console.dir(response.data);
        const record = response.data.userdata;
        $("#fullNameOutput").text(record.fullname);
        $("#emailOutput").text(record.email);
      })
      .catch(function (response) {
        //Handle error
        console.dir(response);
        new Noty({
          type: "error",
          timeout: "6000",
          layout: "topCenter",
          theme: "sunset",
          text: response.response.data.message,
        }).show();
      });
  } //End of getOneUser
  //Call getOneUser function to do a GET http request on an API to retrieve one user record
  getOneUser();
} //End of checking for $profileContainer jQuery object
