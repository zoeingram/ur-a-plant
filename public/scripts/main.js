$(document).ready(function() {
    $('#startModal').dialog({show: 'fade', });

  getFile()


});

function getFile() {
  if (window.File && window.FileReader && window.FormData) {
      var inputFile = $('#file');
      // STARTS EVERYTHING
      inputFile.on('change', function(e) { //do delay and call functions in here
          var file = e.target.files[0];

          if (file) {
              if (/^image\//i.test(file.type)) {
                var circle = new ProgressBar.Circle('#progress', {
                    color: '#318953',
                    duration: 5000,
                    easing: 'easeInOut'
                });

                circle.animate(1);
                setTimeout(function() {
                  $('#progress').hide()
                  readFile(file);
                }, 5500);
              } else {
                  alert('Not a valid image!');
              }
          }
      });
  } else {
      alert("File upload is not supported!");
  }

}


function readFile(file) {
    var reader = new FileReader();
    reader.onloadend = function() {
        processFile(reader.result, file.type);
    }
    reader.onerror = function() {
        alert('There was an error reading the file!');
    }
    reader.readAsDataURL(file);
}



function processFile(dataURL, fileType) {
    var maxWidth = 300;
    var maxHeight = 300;
    var image = new Image();
    image.src = dataURL;
    image.onload = function() {
        var width = image.width;
        var height = image.height;
        var shouldResize = (width > maxWidth) || (height > maxHeight);

        var newWidth;
        var newHeight;

        if (width > height) {
            newHeight = height * (maxWidth / width);
            newWidth = maxWidth;
        } else {
            newWidth = width * (maxHeight / height);
            newHeight = maxHeight;
        }

        var canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;
        var context = canvas.getContext('2d');
        context.drawImage(this, 0, 0, newWidth, newHeight);

        dataURL = canvas.toDataURL(fileType);

        $('#space').append(canvas);
        $('#file').hide();
    };
    image.onerror = function() {
        alert('There was an error processing your file!');
    };
}
