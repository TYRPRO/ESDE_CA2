function checkAdminRole() {
  const baseUrl = "https://localhost:5000";
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
          "https://localhost:3001/user/manage_submission.html"
        );
      } else if (response.data.role != "admin") {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("role_name");
        window.location.assign("https://localhost:3001/login.html");
      }
    })
    .catch(function (response) {
      //Handle error
      console.dir(response);
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("role_name");
      window.location.assign("https://localhost:3001/login.html");
    });
}
checkAdminRole();
