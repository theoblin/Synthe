     function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(195)
                    .height(195);
            };

            $('.file-upload').hide();
            reader.readAsDataURL(input.files[0]);
        }
    }
 
    $(document).ready(function() { 

        $('#blah')
            .attr('src', "./default-placeholder.png")
            .width(195)
            .height(195);
            $('.file-upload').hide();


             // Get the modal
     var modal = document.getElementById("myModal");

     // Get the button that opens the modal
     var btn = document.getElementById("myBtn");
 
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
 
     // When the user clicks on the button, open the modal
     btn.onclick = function () {
       modal.style.display = "block";
     };
 
     // When the user clicks on <span> (x), close the modal
     span.onclick = function () {
       modal.style.display = "none";
     };
    
    });
 


    