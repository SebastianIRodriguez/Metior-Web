var fs = require('fs');
var FtpClient = require('ftp-deploy');

console.log("Inside ftpUpload.js");
if (process === null) {
    console.log("process is null");
}
else {
    uploadToFTP(getFiles(".. ../DOCE",[]));
}
function getFiles(dir, files_) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        console.log('pusheando archivos' + i);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push({ full_path: name, rel_path: files[i] });
        }
    }
    return files_;
}

function uploadToFTP(files) {
    var ftp = new FtpClient();
    var ftpConfig = getConfiguration();
    console.log("DIRECTORIO: " + process.cwd());

    console.log("ftp.host =" + ftpConfig.host);
    console.log("ftp.username =" + ftpConfig.username);
    console.log("ftp.password length =" + ftpConfig.password.length);
    console.log("ftp.localRoot =" + ftpConfig.localRoot);
    console.log("ftp.remoteRoot =" + ftpConfig.remoteRoot);
    console.log("ftp.port =" + ftpConfig.port);

    ftp.deploy(ftpConfig, function (err, fileName) {
        if (err) {
            console.log("error " + err);
        }
        else {
            console.log("Completed uploading");
        }
    });
}
function getConfiguration() {
    return {
        host: process.env.ftp_host,
        port: 21,
        username: process.env.ftp_user,
        password: process.env.ftp_password,
        localRoot: __dirname,
        remoteRoot: process.env.ftp_remotePath
    };
}
