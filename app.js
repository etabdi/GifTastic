
       $(document).ready(function(){ 
                 var years =["1920","2018","2017","2016"]
       $("#add-year").on("click",function(event){
            event.preventDefault();
            var year =$("#year-input").val().trim();
            years.push(year);
            renderButtons()
        });
   
         function renderButtons(){
         $("#buttons-view").empty();
   for (var i=0;i<years.length;i++){
         var btn=$("<button>");
         btn.addClass("year");
         btn.attr("data-name",years[i])
         btn.text(years[i]);
         $("#buttons-view").prepend(btn)
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
     for (var i=0;i<years.length;i++){
          var animalDiv=$("<div>");
          var animalImage=$("<img>");
          animalImage.addClass("animalImage")
          animalImage.attr("src",results[i].images.fixed_height.url)
          animalImage.attr("data_state","still")
          animalImage.attr("src",results[i].images.fixed_height_still.url)
          animalDiv.append(animalImage);
            $("#view").prepend(animalDiv);                 
           }

          $("#view").on('click', function() {
            var state = $(this).attr('data-state');
            if (state == 'still') {
                animalImage.attr("src",results[i].images.fixed_height.url)
            } else {
               
                animalImage.attr("src",results[i].images.fixed_height_still.url)
             
                console.log("click worked!");
            }
            });
      
            });
             }
            
           
            renderButtons();
            $(document).on("click",".year",buttonInformation)
            })
                
        