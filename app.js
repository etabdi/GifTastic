
      
            // documen ready function
      $(document).ready(function(){ 
          //creating cars array
                         var cars =["Audi R8"," Corvette","Ferrari","Benz","Porsche","Chevrolet"]
                         
                         //sets up a click listener on add-car to cars array
            $("#add-car").on("click",function(event){
                        event.preventDefault();
                        var car =$("#car-input").val().trim();
                        cars.push(car);
                        renderButtons()
                        }
                    );
            //add cars buttons
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
                    }
                ).then(function(response) {
                       
                    var results =response.data;          
                        for (var i=0;i<cars.length;i++){
                                var carDiv=$("<div>");
                                var carImage=$("<img>");
                                carImage.addClass("carImage")
                                carImage.attr("src",results[i].images.fixed_height_still.url)
                                carImage.attr("data-state","still")
                                carImage.attr("data-still",results[i].images.fixed_height_still.url)
                                carImage.attr("data-animate",results[i].images.fixed_height.url)
                                carDiv.append(carImage);
                        $("#view").prepend(carDiv);                 
                    };
                    
              });
        };                        
                            renderButtons();

               $(document).on("click",".car",buttonInformation)

                $("#view").on('click',(".carImage") ,function() {
                        
                            var state = $(this).attr('data-state');
                            if (state == 'still') {
                            $(this).attr("src",$(this).attr("data-animate"));
                           $(this).attr("data-state","animate");

                            } 
                            
                    else {
                            
                                $(this).attr("src",$(this).attr("data-still"));
                                $(this).attr("data-state","still");
                                                       
                     }
                            console.log("click worked!");
             });
          
            })
                
        
