
function checkAdminRole() {

  
your_aws_ip = "localhost";
const baseUrl = 'http://' + your_aws_ip +':5000';

const frontEndUrl = 'http://' + your_aws_ip +':3001';
  tmpToken = localStorage.getItem("token");
  userId = localStorage.getItem("user_id");
  axios({
    headers: {
      user: userId,
      authorization: "Bearer " + tmpToken,
    },
    method: "get",
    url: baseUrl + "/api/getRole/",
  })
    .then(function (response) {
      console.log(response);
      console.log(response.data);
      if (response.data.role == "user") {
        window.location.assign(
          frontEndUrl  + "/user/manage_submission.html"
        );
      } else if (response.data.role != "admin") {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("role_name");
        window.location.assign( frontEndUrl + "/login.html");
      }
    })
    .catch(function (response) {
      //Handle error
      console.dir(response);
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("role_name");
      window.location.assign( frontEndUrl + "/login.html");
    });
}
checkAdminRole();
