  var user_ip;
  var user_region;

  $.get("https://ipinfo.io", function(response) {
      user_ip = response.ip;
      user_region = response.region
      console.log(user_ip, user_region);
  }, "jsonp");

  $('form').submit(function(e){
    var cpap_machine_used = document.getElementById("cpap_machine_used").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("phone_number").value;
    var date= new Date();
    var date_time = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+new Date().toLocaleTimeString([], {hour12: false,});

    var data = JSON.stringify({
      "campaign_id":"1119",
      "full_name": first_name+' '+last_name,
      "phone":phone_number,
      "email":email,
      "date":date_time,
      "questions":{
        "consent":"yes",
        "Business Name":cpap_machine_used,
        "State":user_region,
        "User IP":user_ip,
        "Partner_Id":"test"
      }
    });
    
    console.log("data", data);
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://pcdialer.camginc.com/api/leads/");
    xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxOSIsImp0aSI6IjgwMGQxY2VkY2ViNjRmZTIwY2M4YTY1YTVlMjUxMWJkZjczOWJmZGM5NmY0NThhNDAyYTdlY2YzOGJlZmI2NDY5NTg1Yjc3ZGZhMzNmMWM5IiwiaWF0IjoxNjU3OTAzNTk3LjU3MzgyLCJuYmYiOjE2NTc5MDM1OTcuNTczODI0LCJleHAiOjQ4MTM1NzcxOTcuNTY4OTcyLCJzdWIiOiIyMyIsInNjb3BlcyI6W119.jyce1MDs0DOuN-KiTG3NceP8NuNoyk0yVmQXHXVJI33ireO_DlrYI5ThQxPmV9hA7pjiXtCstxr_WAIQ6KQyGwuRwyCE0X2zNkKmnwPPZ1jno7xvNu42jRlWWa5oXCaITn9TFkciKAHSVlQzQ8gLs8IX9407aVCxr2p3D1UanVTWE5_cHqjHa5NGQWrzwgwh3a9aIsBFbVz9Neha8JJ47IfSgP0cRKM0PP3Jx3YEIWFMDCinW4YgkTJkr62usbZsGutRTecLPt__asy3NkXSasBzHL-nBxNwYfs7Vt6J652T4M8Nv4K7bDBmlfH3UtVMFoJV9gjK71i5Vcz5hV_6MtMSxLmHsTfo8Z3K6cFxMDdPChMEsPebyhFQcSmlWhq7KIk05WDnYmuOVCoNm4WhBTbHC0W2Q4hYh8s838vYWtezI6nbCCHbIsFEo7V-8zFiPqYI7Zw8EIK2GVKBbaIXhcMcJLu1-G6Gy8qSaZtFuhluM10TRD5ELm_5kKBZnKSWmCOZkIHx39-VC54uZ2T2RnPZXih3TW0-RWRf0BNIGYPN5xEvx7_5RBsVVKvC0Ja9zrpy3VpU2n6RgvcTRggnfFRgKLXV0fho0BIvTL2dq8-eS9vb2wu3t1xNCBpf2auUEKEa9g7aVRqkFEZDty0ekQM4TW3iJenxvoBOWGwd6Ao");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data); 
  });


    
