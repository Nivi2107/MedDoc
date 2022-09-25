// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
$(document).ready(function(){

    //Fires the GET API defined in the function on page load
	// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
    $.ajax({
        type: 'GET',
          url: '/server/meddoc/pillremainder', //Ensure that 'to_do_list_function' is the package name of your function
          async: false,
        success: function(html){
            //Appends the items to the HTML from the server on success
            $(".task_list").append(html);
        }
    });

    //Fires the POST API defined in the function
	// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
    $('#remainderform').on('submit', function(){
        console.log("dfvsd");
        var pillval= $("#pill").val();
        var doseval= $("#dose").val();
        var timeval= $("#time").val();
        var remainder= {pill:pillval, dose:doseval, time:timeval};
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            url: '/server/meddoc/pillremainder', //Ensure that 'to_do_list_function' is the package name of your function
            data: JSON.stringify(remainder),
            success: function(data){
                location.reload(); //Reloads the page on success
            }
        });
        return false;
    });

    //Fires the DELETE API on the delete button's click
	// All URLs to the Advanced I/O function will be of the pattern: /server/{function_name}/{url_path}
    $(document).on("click",".task_list li",function()
    {
        var itemRowId = $(this).attr("value"); //The item is deleted using the attribute "value" which indicates the ROWID of the record in the Data Store
		$.ajax({
		  type: 'DELETE',
		  url: '/server/meddoc/pillremainder' + itemRowId, //Appends the ROWID along with the URL 
		//Ensure that 'to_do_list_function' is the package name of your function
		  success: function(data){
              location.reload(); //Reloads the page on success
		  }
        });
        return false;
	});
  });