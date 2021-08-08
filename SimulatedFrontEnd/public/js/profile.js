let $profileContainer = $("#profileContainer");

your_aws_ip = "50.16.186.159";
const baseUrl = 'http://' + your_aws_ip +':5000';

if ($profileContainer.length != 0) {
  console.log(
    "Profile page is detected. Binding event handling logic to form elements."
  );
  $("#backButton").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });

  function getOneUser() {
    let userId = localStorage.getItem("user_id");
    tmpToken = localStorage.getItem("token");

    axios({
      headers: {authorization: "Bearer " + tmpToken },
      method: "post",
	data: JSON.stringify({user:userId}),
      url: 'https://qqt32wwz8a.execute-api.us-east-1.amazonaws.com/test',
    })
      .then(function (response) {
        //Using the following to inspect the response.data data structure
        //before deciding the code which dynamically populate the elements with data.
        console.log(response.data);
	      console.dir(response.data);
        const record = response.data.userdata;
        $("#fullNameOutput").text(record.fullname);
        $("#emailOutput").text(record.email);
      })
      .catch(function (response) {
        //Handle error
	 console.log(response);
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
