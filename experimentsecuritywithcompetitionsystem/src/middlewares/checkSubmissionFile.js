const { fstatSync, fstat } = require("fs");
var fs = require("fs");
const path = require("path");

module.exports.checkFile = (req, res, next) => {
  console.log("Validation for file type and size started:");
  submittedFile = req.body.file;
  console.log(submittedFile);
  // console.log(req.files);
  // console.log(submittedFile);
  fileName = path.basename(submittedFile.path);
  console.log("Submitted file path: " + submittedFile.path);
  console.log("Path base name :" + path.basename(submittedFile.path));

  var fileExtension = fileName.split(".");
  fileExtension = fileExtension[fileExtension.length - 1];

  var stats = fs.statSync(submittedFile.path);
  var fileSizeInBytes = stats.size;
  console.log("File Size: " + fileSizeInBytes / 1000000 + "MB");
  var validFileSize = false;

  if (fileSizeInBytes < 1000000){
      validFileSize = true;
  }
  else{
    console.log("File size is over 1MB!");
  }

  var validFileType = false;
  switch (fileExtension.toLowerCase()) {
    case "jpg":
      validFileType = true;
      break;
    case "jpeg":
      validFileType = true;
      break;
    case "png":
      validFileType = true;
      break;
    case "gif":
      validFileType = true;
      break;
  }

  if (validFileType == false || validFileSize ==false) {
    console.log("Invalid File Type or File Size sent by User.");
    fs.unlink(submittedFile.path, function (err) {
      if (err) return console.log(err);
      console.log("file deleted successfully");
    });

    let message = "Invalid File Type"
    res.status(400).json({ message: message });
    return;
  }

  console.log("Validation Passed");
  next();
};
