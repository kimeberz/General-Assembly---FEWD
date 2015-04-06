 $.getJSON("assets/blob.json", function(data) {
    $("#content-template").html(tmpl({objects:data}));
 });