let $updateDesignFormContainer = $('#updateDesignFormContainer');

your_aws_ip = "50.16.186.159";
const baseUrl = 'http://' + your_aws_ip +':5000';

if ($updateDesignFormContainer.length != 0) {
    console.log('Update Design form is detected. Binding event handling logic to form elements.');
    //If the jQuery object which represents the form element exists,
    //the following code will create a method to submit design details
    //to server-side api when the #submitButton element fires the click event.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        //Collect fileId value from the input element, fileIdInput (hidden input element)
        let fileId = $('#fileIdInput').val();
        //Obtain user id from local storage
        let userId = localStorage.getItem('user_id');
        //Collect design title and description input
        let designTitle = $('#designTitleInput').val();
        let designDescription = $('#designDescriptionInput').val();
        //Create a FormData object to build key-value pairs of information before
        //making a PUT http request.
        let webFormData = new FormData();
        tmpToken = localStorage.getItem("token");
        webFormData.append('designTitle', designTitle);
        webFormData.append('designDescription', designDescription);
        webFormData.append('fileId', fileId);
        axios({
                method: 'put',
                url: baseUrl + '/api/user/design/',
                data: webFormData,
                headers: { 'Content-Type': 'multipart/form-data', 'user': userId, authorization: "Bearer " + tmpToken}
            })
            .then(function(response) {
                new Noty({
                    type: 'success',
                    layout: 'topCenter',
                    theme: 'sunset',
                    timeout: '5000',
                    text: 'Updated design information.',
                }).show();
            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    type: 'error',
                    layout: 'topCenter',
                    theme: 'sunset',
                    timeout: '6000',
                    text: response.response.data.message,
                }).show();

            });
    });
    $('#backButton').on("click", function(e) {
        e.preventDefault();
        window.history.back();
    });

    function getOneData() {
        //Get the fileId information from the web browser URL textbox
        let query = window.location.search.substring(1);
        let arrayData = query.split("=");
        let fileId = arrayData[1];
        console.dir('Obtained file id from URL : ', fileId);
        let userId = localStorage.getItem('user_id');
        tmpToken = localStorage.getItem("token");
        axios({
                headers: {
                    'user': userId,
                    authorization: "Bearer " + tmpToken
                },
                method: 'get',
                url: baseUrl + '/api/user/design/' + fileId,
            })
            .then(function(response) {
                //Using the following to inspect the response.data data structure
                //before deciding the code which dynamically populate the elements with data.
                console.dir(response.data);
                const record = response.data.filedata;
                $('#designTitleInput').val(record.design_title).focus();

                $('#fileIdInput').val(record.file_id);
                $('#designDescriptionInput').val(record.design_description).focus();

                $('#designImage').attr('src', record.cloudinary_url).focus();
            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    type: 'error',
                    timeout: '6000',
                    layout: 'topCenter',
                    theme: 'sunset',
                    text: response.response.data.message,
                }).show();
            });

    } //End of getOneData
    //Call getOneData function to do a GET http request on an API to retrieve one user record
    getOneData(); //Call getOneData to begin populating the form input controls with the existing record information.
} //End of checking for $updateDesignFormContainer jQuery object
