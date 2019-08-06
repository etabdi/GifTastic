
       $(document).ready(function(){ 
<<<<<<< HEAD
                 var cars =["Ford ","Audi R8","Ferrari ","Benz","Porsche","Chevrolet "]
       $("#add-car").on("click",function(event){
=======
                 var years =["2050","1902","2019","1800"]
       $("#add-year").on("click",function(event){
>>>>>>> d6d9689096ea3519e1469703b2f0e98b4efaf74f
            event.preventDefault();
            var car =$("#car-input").val().trim();
            cars.push(car);
            renderButtons()
        });
   
         function renderButtons(){
         $("#buttons-view").empty();
   for (var i=0;i<cars.length;i++){
         var btn=$("<button>");
         btn.addClass("car");
         btn.attr("data-name",cars[i])
         btn.text(cars[i]);
         $("#buttons-view").append(btn)
             console.log(btn)
         }
         }    
        function buttonInformation(){
            var name = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q="+name+"&api_key=3uVRFQRuRUmIUrn0Hus64PFffbVunbCw";
            $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL)
          var results =response.data;          
     for (var i=0;i<cars.length;i++){
          var carDiv=$("<div>");
          var carImage=$("<img>");
          carImage.addClass("carImage")
          carImage.attr("src",results[i].images.fixed_height.url)
          carImage.attr("data_state","still")
          carImage.attr("src",results[i].images.fixed_height.url)
          carDiv.append(carImage);
            $("#view").prepend(carDiv);                 
           }

          $("#view").on('click', function() {
            var state = $(this).attr('data-state');
            if (state == 'still') {
                carImage.attr("src",results[i].images.fixed_height.url)
            } else {
               
                carImage.attr("src",results[i].images.fixed_height_still.url)
             
                console.log("click worked!");
            }
            });
      
            });
             }
            
           
            renderButtons();
            $(document).on("click",".car",buttonInformation)
            })
                
        
