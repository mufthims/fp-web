$( document ).ready(function() {
   

$('.enableOnInput').prop('disabled', true);
$("#registerForm").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
            if (data.status_code == 200) {
                 $("#mailInfo").text(data.data.email);
                 $("#user_id").val(data.data.id)
                 $("#exampleModal1").modal('show');
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});

$("#OTPsubmit").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var actionUrl = form.attr('action');
    var hiddenUrl = $("#hidden_url").val();
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
            if (data.status_code == 200) {
                window.location.href= hiddenUrl;
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});


//reset password 

$("#resetpasswordForm").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
            if (data.status_code == 200) {
                 $("#resetemail").val('');
                 $("#mailInfo").text(data.data.email);
                 $("#user_id").val(data.data.id);
                 $("#password_user_id").val(data.data.id);
                 $("#exampleModal").modal('hide');
                 $("#exampleModal1").modal('show');
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});


$("#resetOTPsubmit").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
            if (data.status_code == 200) {
                $("#exampleModal1").modal('hide');
                $("#exampleModal2").modal('show');
                 $('#resetOTPsubmit')[0].reset();
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});

$("#changepassword").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
            if (data.status_code == 200) {
                $("#exampleModal2").modal('hide');
                $("#exampleModal3").modal('show');
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});


$('#questions').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        "<img src='images/left-arrow.webp' alt='arrow' />",
        "<img src='images/left-arrow.webp' alt='arrow' />"
      ],
      autoplay: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      },
    })


$('#custom-carousel').owlCarousel({
      loop: false,
      margin: 16,
      dots:true,
      nav: false,
      navText: [
        "<img src='images/left-arrow.webp' alt='arrow' />",
        "<img src='images/left-arrow.webp' alt='arrow' />"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3.5
        },
        1000: {
          items: 5.5
        }
      },
    })


// $('.owl-carousel').owlCarousel({
//   loop: false,
//   margin: 10,
//   nav: true,
//   navText: [
//     "<img src='images/left-arrow.webp' alt='arrow' />",
//     "<img src='images/left-arrow.webp' alt='arrow' />"
//   ],
//   autoplay: false,
//   autoplayHoverPause: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 1
//     },
//     1000: {
//       items: 1
//     }
//   },
// })

   
      

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})



$(document).ready(function(){
    $('.yesBtn').on('click', function(){
      var value = $(this).attr('data-id');

      
    });

    $('.noBtn').on('click', function(){
      var value = $(this).attr('data-id');
      var tickboxvalue = $("#tickbox_"+value).val('');
       var grpname = $("#groupname_"+value).val('');
      
    });

    

    $('.videomodal').on('click', function(){
     var value = $(this).attr('data-id');
      var video = $("#video_"+value).val();
      var chapter = $("#chapter_"+value).val();
      $("#exampleModal").modal('show')
      $("#semtopics").text(chapter)
      $('#append_video').attr("src",video);

    });



$('input[name="answers"]').on("click", function() {

       var value = $(this).attr('data-id');
       var answer = $('input[name = "answers"]:checked').val();
       var option = $("#option_"+value).val();
       if (answer == option) {
           $("#score_"+value).val(2);
       }
 });
});

$("#cancelTest").click(function(e) {
     e.preventDefault(); 
    const element = document.getElementById("questionWraper");
    element.innerHTML = '';
});

$("#closeTest").click(function(e) {
         window.location.reload();
});
//semester question
var ENDPOINT = APP_URL;

$("#reportBtn").prop('disabled', true);


//submit test
$('input[name="submit"]').on("click", function() {

    var value = $(this).attr('data-id');
       var answer = $('input[name = "submit"]:checked').val();
       var option = $("#option_"+value).val();
       if (answer == option) {
           $("#score_"+value).val(2);
       }
    
var values = [];
    $("input[name='score[]']").each(function() {
        values.push($(this).val());
    });
      var semester = $("#semester").val();
       var grade = $("#grade").val();
       var chapter = $("#chapter").val();
       var getchapterId = $("#append_chapter_id").val();
       var score = values;
   $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: ENDPOINT+"testsubmit",
        data: { semester : semester , chapter : chapter ,grade : grade ,score : score ,cid : getchapterId },
        success: function(data)
        { 
          if (data.status_code == 200) {
                  
                 $("#exampleModal1").modal('hide');
                 $("#exampleModal2").modal('show');
                 $(".marks").append(data.score+"<sub class='total'>/6</sub>");
                  
                  
             }            
        }
    });

});

$("#leveloneform").submit(function(e) {
     e.preventDefault(); 
    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
           if (data.status_code == 200) {
               document.getElementById('hideResults').style.display = 'none';

               document.getElementById('showResults').style.display = 'block';

           if (data.data.length > 0) {
                callConfetti();
               $("#retestbtn").hide();
               $.each(data.data, function(index, value) {
              $('#ul-list').append('<li>' + value.professional_group + '</li>');

             });
             }else{
               document.getElementById('retestbtn').style.display = 'block';
               document.getElementById('showResults').style.display = 'none';
             
             }
            }
        }
    });
    
});


$("#leveloneformsubmit").click(function(e) {
     e.preventDefault(); 
    var form = $('#leveloneform').serialize();
    var hiddenactionUrl = $("#hiddenlvltwoUrl").val();
    var routeactionUrl = $("#routeactionUrl").val();
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: hiddenactionUrl,
        data: form, 
        success: function(data)
        { 
          if (data.status_code == 200) {
             window.location.href= routeactionUrl;
             }            
        }
    });
    
});

$("#leveloneformskip").click(function(e) {
     e.preventDefault(); 
    var form = $('#leveloneform').serialize();
    var levelonesubmitUrl = $("#levelonesubmitUrl").val();
    var dashboardUrl = $("#dashboardUrl").val();
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: levelonesubmitUrl,
        data: form, 
        success: function(data)
        {
             window.location.href= dashboardUrl;            
        }
    });
    
});

$("#leveltwoform").submit(function(e) {
     e.preventDefault(); 
    var form = $(this);
    var actionUrl = form.attr('action');
    var dashboardUrl = $("#dashboardUrl").val();
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
           if (data.status_code == 200) {
               document.getElementById('hideResults').style.display = 'none';

               document.getElementById('showResults').style.display = 'block';
               callConfetti();
               if (data.data.length > 0) {
                 $.each(data.data, function(index, value) {
                $('#ul-list-leveltwo').append('<li>' + value.professional_group + '</li>');

               });
               }else{
                  $('#hideinterest').html('');

               }
            setInterval(function(){ 
                 window.location.href= dashboardUrl; 
              }, 4000);

            }
        }
    });
    
});

//confetti
function callConfetti(argument) {

  const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const count = 300;
  


const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);
}, 250);


function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}




//feeds save and report
$("#reportBtn").prop('disabled', true);
 $("#reportForm").submit(function(e) {
        e.preventDefault();
       var euid = $(".uid_events").val();
       var epid = $(".pid_events").val();
       var reason = $("#reportvalue").val();
       var message = $("#messages").val()

        $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: ENDPOINT+"report-post",
        data: { uid : euid , pid : epid ,reason : reason,message : message },
        success: function(data)
        { 
          if (data.status_code == 200) {
                 $("#reportModal1").modal('hide');
               // if (action == 1) { 
                $("#saveReport_"+epid).removeClass();
                $("#saveReport_"+epid).addClass("fa-solid fa-flag");
              // }else{
              //   $("#saveReport_"+value).removeClass();
              //   $("#saveReport_"+value).addClass("fa-regular fa-flag");

              // }            
             }
        }
     });
  
    });

//dislike modal
 $('.dislikeModal').click(function(e) {
      var value = $(this).attr('data-id');
      $("#getTitle").val(value);
      var appendtext = $("#getprofessionaltext").text();
      $("#appendprofessiontext").append('Please confirm to remove “'+appendtext+'” from the recommended career guidance list.');
      $("#exampleModal").modal('show');
      
    });
 $('#professionalclose').click(function(e) {
     $("#appendprofessiontext").html('');
  });

//like modal
  $('.likeModal').click(function(e) {
      var value = $(this).attr('data-id');
      $("#getlikeTitle").val(value);
      var appendtext = $("#getprofessionaltext").text();
      $("#appendlikeprofessiontext").append('Please confirm to add “'+appendtext+'” to the recommended career guidance list.');
      $("#likeModal").modal('show');
      
    });
 $('#professionallikeclose').click(function(e) {
     $("#appendlikeprofessiontext").html('');
  });
 
    //  var popup = $('.course-feeds-alert');

    // $(document).click(function(event) {
    //     if (!popup.is(event.target) && !popup.has(event.target).length) {
    //        $("#appendprofessiontext").html('');
    //        $("#appendlikeprofessiontext").html('');
    //     }
    // });


$(document).ready(function(){
    $('#dislikeProf').click(function(e) {

      var value = $("#getTitle").val();
       var puid = $(".puid_"+value).val();
       var subcategory = $(".subcategory_"+value).val();
       var profaction = $(".profaction_"+value).val();
       var hiddenactionUrl = $("#confirmRoute").val();


        $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: hiddenactionUrl,
        data: { uid : puid , subcategory : subcategory ,action : profaction },
        success: function(data)
        { 
          if (data.status_code == 200) {
                   $("#exampleModal").modal('hide');
                   window.location.reload();
                        
             }
        }
     });
  
    });


      $('#likeProf').click(function(e) {
      var value = $("#getlikeTitle").val();
       var puid = $(".puid_"+value).val();
       var subcategory = $(".subcategory_"+value).val();
       var profaction = $(".profactionlike_"+value).val();
        var hiddenactionUrl = $("#confirmlikeRoute").val();

        $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: hiddenactionUrl,
        data: { uid : puid , subcategory : subcategory ,action : profaction },
        success: function(data)
        { 
          if (data.status_code == 200) {
                   $("#likeModal").modal('hide');
                  window.location.reload();
                        
             }
        }
     });
  
    });

});

//professional-info
$("#cancelInfo").click(function(e) {
     e.preventDefault(); 
    const element = document.getElementById("infoWraper");
    element.innerHTML = '';
});



  $('.professionalcategory').click(function(e) {
    
      var value = $(this).attr('data-id');
      const element = document.getElementById("categoryWraper_"+value);
     
      element.innerHTML = '';
       document.getElementById('nodata_'+value).style.display = 'none';
      var category = $("#professionalcategory_"+value).val();
      var subcategory = $("#professionalsubcategory_"+value).val();

        $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: ENDPOINT+"professional-category",
        data: { category : category ,subcategory : subcategory },
        success: function(data)
        { 
          if (data.status_code == 200) {
                  if (data.html) {
                   document.getElementById('autoload_'+value).style.display = 'none';
                   document.getElementById('nodata_'+value).style.display = 'none';
                  $("#categoryWraper_"+value).append(data.html);
                 }
             }
          if (data.status_code == 400) {
             
                document.getElementById('autoload_'+value).style.display = 'none';
               document.getElementById('nodata_'+value).style.display = 'block';
             
          }   
        }
     });
  
    });


  //jobs

   $('.jobsview').click(function(e) {
    
      var value = $(this).attr('data-id');
      const element = document.getElementById("jobsdetails");
      element.innerHTML = '';
       $('#appendedElement').remove();
      var id = value;
        $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: ENDPOINT+"jobsdetails",
        data: { id : id },
        success: function(data)
        { 
          if (data.status_code == 200) {
                if (data.html) {
                  $("#jobsdetails").append(data.html);
                  $("#jobdetailsModal").modal('show');
                 }
             }
        }
     });
  
    });

   $("#canceljobsdetails").click(function(e) {
     e.preventDefault(); 
    $('#appendeddetails').remove();
    $('#appendeddetailsScript').remove();

});

   $(document).ready(function() {
    $('#nav-home-tab').click(function() {
        window.location.href = $("#apprenticeURL").val(); 
       
    });

    $('#nav-profile-tab').click(function() {
        window.location.href = $("#trialURL").val(); 
    });
});

//interest

$('.interestview').click(function(e) {
    
      var value = $(this).attr('data-id');
       $('#appendedinterest').remove();
      var id = value;
        $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: ENDPOINT+"interestdetails",
        data: { id : id },
        success: function(data)
        { 
          if (data.status_code == 200) {
                if (data.html) {
                  $("#interestdetails").append(data.html);
                  $("#interestModal").modal('show');
                 }
             }
        }
     });
  
    });

   $("#cancelinterestdetails").click(function(e) {
     e.preventDefault(); 
    $('#appendedinterest').remove();
    $('#appendedinterestScript').remove();

});

//notification
$('.notification').click(function(e) {
    
      var value = $(this).attr('data-id');
       var jobid = $(this).attr('data-jobid');
       $('#appendedinterest').remove();
      var id = value;
        $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: ENDPOINT+"notification",
        data: { cid : id , jobid : jobid },
        success: function(data)
        { 
          if (data.status_code == 200) {
                if (data.html) {
                  $("#notification").append(data.html);
                  $("#notificationModal").modal('show');
                 }
             }
        }
     });
  
    });

    
$(window).on('load', function () {

  var pathname =  window.location.pathname.split("/").pop();
  var pathnameParts = window.location.pathname.split('/').filter(Boolean);
  var lastPartIndex = pathnameParts.length - 2;
  var lastPart = pathnameParts[lastPartIndex];

   if (pathname == "feeds" || lastPart == "viewpost") {
         leftsideBarDatad();
         rightsideBarDatad();
   }else if(pathname == "course"){
         leftsideBarCoursead();
   }else if(pathname == "school-info" || pathname == "school-infos" || pathname == "school-list" ){
         leftsideBarSchoolad();
   }else if (pathname == "professional-info") {
    leftsideBarProfessionalInfo();
     const element = document.getElementById("infoWraper");
     element.innerHTML = '';
   }else if (pathname == "events" || lastPart == "viewevent") {
     leftsideBareventsad();
     rightsideBareventsad();
   }else if (pathname == "fc-questions-level-one" || pathname == "fc-questions-level-two" || pathname == "getstarted") {
     leftsideBarfuturechecksad();
   }
   else if (pathname == "jobs-apprentice" || pathname == "jobssearch" || pathname == "jobs-trial" || pathname == "trialssearch") {
     leftsideBarjobssad();
   }
   else if (pathname == "interest") {
     leftsideBarinterestsad();
   }

   

 });
//interest
function leftsideBarinterestsad(){

  var ajaxURL = APP_URL+"getinterestleftsidebar";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
     }
    });

}

//jobs
function leftsideBarjobssad(){

  var ajaxURL = APP_URL+"getjobsleftsidebar";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
     }
    });

}

//futurecheck
function leftsideBarfuturechecksad(){

  var ajaxURL = APP_URL+"getfuturecheckleftsidebar";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
     }
    });

}


//events
function leftsideBareventsad(){

  var ajaxURL = APP_URL+"geteventsleftsidebar";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
     }
    });

}


function rightsideBareventsad(){

     var ajaxURL = APP_URL+"geteventsrightsidebar";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-rightside').show();
       },
       success :function (response){
           $('.auto-load-rightside').hide();
           
           $('#Rightsidebar').append(response.html);
     }
    });

}


 //professional Info
 function leftsideBarProfessionalInfo(){

  var ajaxURL = APP_URL+"getprofessionalads";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
     }
    });

} 
   
 //school Ads
 function leftsideBarSchoolad(){

  var ajaxURL = APP_URL+"getschoolads";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
           $('#LeftsidebarInfo').append(response.html);
     }
    });

}  

//course Ads
function leftsideBarCoursead(){

  var ajaxURL = APP_URL+"getcourseads";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
     }
    });

}

//Feeds Ads   
function leftsideBarDatad(){

  var ajaxURL = APP_URL+"getleftsidebar";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-leftside').show();
       },
       success :function (response){
           $('.auto-load-leftside').hide();
           
           $('#Leftsidebar').append(response.html);
     }
    });

}

function rightsideBarDatad(){

     var ajaxURL = APP_URL+"getrightsidebar";

    $.ajax({
       url: ajaxURL,
       headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
       type:'POST',
       beforeSend:function() {
         $('.auto-load-rightside').show();
       },
       success :function (response){
           $('.auto-load-rightside').hide();
           
           $('#Rightsidebar').append(response.html);
     }
    });

}


//My profile details

$("#profileForm").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
            if (data.status_code == 200) {
                 $('#success_message').fadeIn().html('<div class="alert alert-success alert-dismissible" role="alert">'+data.msg+'</div>');
                setTimeout(function() {
                  $('#success_message').fadeOut("slow");
                }, 2000 );
                
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});

$('#file-upload').change(function() {
  var i = $(this).prev('label').clone();
  var file = $('#file-upload')[0].files[0].name;
  $('#file_name').text(file);
});

   //Image preview
$('input[type="file"][name="student_image"]').on('change', function(){
              var img_path = $(this)[0].value;
              var img_holder = $('.img-holder');
              var extension = img_path.substring(img_path.lastIndexOf('.')+1).toLowerCase();


              if(extension == 'jpeg' || extension == 'jpg' || extension == 'png'){
                   if(typeof(FileReader) != 'undefined'){
                        img_holder.empty();
                        var reader = new FileReader();
                        reader.onload = function(e){
                            $('<img/>',{'src':e.target.result,'class':'img-fluid','style':'max-width:100px;margin-bottom:10px;'}).appendTo(img_holder);
                        }
                         var file = $('#file-upload1')[0].files[0].name;
                        $('#file_name').text(file);
                        img_holder.show();
                        reader.readAsDataURL($(this)[0].files[0]);
                   }else{
                       $(img_holder).html('This browser does not support FileReader');
                   }
              }else{
                  $(img_holder).empty();
              }
          });

$("#profileImageForm").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var formdata = this;
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        processData:false,
        dataType:'json',
        contentType:false,
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: new FormData(formdata),
        success: function(data)
        {
            if (data.status_code == 200) {
                 $('#success_message').fadeIn().html('<div class="alert alert-success alert-dismissible" role="alert">'+data.msg+'</div>');
                setTimeout(function() {
                  $('#success_message').fadeOut("slow");
                }, 2000 );
                
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});

$("#resumeuploadForm").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');

    var form = $(this);
    var formdata = this;
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        processData:false,
        dataType:'json',
        contentType:false,
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: new FormData(formdata),
        success: function(data)
        {
            if (data.status_code == 200) {
                 $('#success_message').fadeIn().html('<div class="alert alert-success alert-dismissible" role="alert">'+data.msg+'</div>');
                setTimeout(function() {
                  $('#success_message').fadeOut("slow");
                }, 2000 );
                
            }
            else{
                  validateMsg(data.error);
            }
        }
    });
    
});


$("#userchangepassword").submit(function(e) {
     e.preventDefault(); 
     $(".errortxt").text('');
     $("#error_message").text('');

    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
        url: actionUrl,
        data: form.serialize(), 
        success: function(data)
        {
            if (data.status_code == 200) {
              $('#CheckPasswordMatch').html('');
                $('#success_message').fadeIn().html('<div class="alert alert-success alert-dismissible" role="alert">'+data.msg+'</div>');
                setTimeout(function() {
                  $('#success_message').fadeOut("slow");
                }, 2000 );
            }
            else{
                 if (data.msg && data.status_code == 400) {
                  $('#CheckPasswordMatch').html('');
                $('#error_message').fadeIn().html('<div class="alert alert-danger alert-dismissible" role="alert">'+data.msg+'</div>');

                 }
                  validateMsg(data.error);
            }
        }
    });
    
});

//course 



//school info


$('#changecanton').on('change', function() {
       var value = $("option:selected", this).val();
       var url = "school-infos"+'?canton='+value;
        if (value) {
            location.href = url;
        }
});
$('#listcanton').on('change', function() {
       var value = $("option:selected", this).val();
       var url = "school-list"+'?canton='+value;
        if (value) {
            location.href = url;
        }
});

$('#listfavourite').on('change', function() {
       var value = $("option:selected", this).val();
       var url = "favourite"+'?favourite='+value;
        if (value) {
            location.href = url;
        }
});



//forget Password

$('#confirmpassword').on('keyup', function() {
    var re_password = $('#confirmpassword').val();
    var password = $('#password').val();
    if(re_password!= ""){
        $('#CheckPasswordMatch').css('margin-top', '10px');
        $('#CheckPasswordMatch').html(checkPassword(re_password, password));
    } else {
        $('#CheckPasswordMatch').html('');
    }
});

function checkPassword(repassword, password){
  console.log(password,repassword);
    if(password == repassword){

        $('#CheckPasswordMatch').css({'color': 'green', 'font-weight' : 'bold' ,'font-size' : 'initial' });
         $('.enableOnInput').prop('disabled', false);
        return 'Password Match';
    } else {
        $('#CheckPasswordMatch').css({'color' : 'red' ,'font-weight' : 'bold' ,'font-size' : 'initial' });
         $('.enableOnInput').prop('disabled', true);
        return 'Password doesn\'t match';
    }
}




function validateMsg(argument) {
    $.each(argument, function (key,value) {
        $("#" + key + "_errors").text(value);
     })
       
}


/*$(function(){
    let len = 170;
    let $but = $('<button class="info-more" >Read More</button>')
    $('.show-more-content').each(function(){ 
        const $textDiv = $(".text",this); // container
        let str = $textDiv.text().trim(); // string
        let diff = str.length - len;      // difference in length
        if (diff > 0) {
          $textDiv.text(str.slice(0,len)) // slice if needed
          $(this)
            .append($('<span class="moreSpan" />').text(str.slice(len)))
            .append($but.clone());
        $(".info-more",this).toggle(diff>0); // show more if needed
      }  
    });
    $(".info-more").on("click",function() {
      const $moreSpan = $(this).closest("div").find(".moreSpan")
      $moreSpan.toggle()
      $(this).text($moreSpan.is(":visible")? "Read Less": "Read More")
      
    })
});  */

/*$(function(){
  let len = 170;
  let $but = $('<button class="info-more" >Read More</button>')
  $('.show-more-content').each(function(){ 
      const $textDiv = $(".text",this); // container
      let str = $textDiv.text().trim(); // string
      let diff = str.length - len;      // difference in length
      if (diff > 0) {
        $textDiv.text(str.slice(0,len)) // slice if needed
        $(this)
          .append($('<span class="moreSpan" />').text(str.slice(len)))
          .append($but.clone());
      $(".info-more",this).toggle(diff>0); // show more if needed
    }  
  });
  $(".info-more").on("click",function() {
      event.preventDefault();
      var dots_visibility = $(this).siblings(".text-wrapper").find("span.dots");
      dots_visibility.html(dots_visibility.html() == '...' ? ' ' : '...')
      $('.text-wrapper > p.p1').contents().unwrap();
      $(this).parent().find('.full-text').slideToggle('500');
     $(this).html($(this).html() == 'Read Less' ? 'Read More' : 'Read Less');
    /* $('.info-more').toggleClass('show');
     if($('.info-more').hasClass("show")) {
         $(this).text("Read Less");
          $('.show-more-content').addClass("show");
     } else {
         $(this).text("Read More");
          $('.show-more-content').removeClass("show");
     }*/
    
  /*})
});  */

$(function () {
    
  var maxL = 170;
  
  $('.show-more-content').each(function () {
      
      var text = $(this).text();
      if(text.length > maxL) {
          
          var begin = text.substr(0, maxL),
              end = text.substr(maxL);

          $(this).html(begin)
              .append($('<a class="readmore"/>').attr('href', 'javascript:void(0)').html('Read More'))
              .append($('<div class="hidden" />').html(end));
      }
      
  });
  $(document).on('click', '.readmore', function () {
      // $(this).next('.readmore').fadeOut("400");
      $(this).next('.hidden').toggleClass("active");
      if ($(this).text() == 'Read More')
      $(this).text("Read Less");
      else
      $(this).text("Read More");
  })        
})



// $(document).ready(function() {
//    setTimeout( function(){ 
//   var leftheight = $(".left-section").height();
//   var rightheight = $(".right-section").height();
//   if(leftheight > rightheight){
//     $('#posts_Section').height(leftheight);
//   } else {
//     $('#posts_Section').height(rightheight);
//   }
//   }  , 2000 );
// });

 $(".text-wrapper").each(function() {
         var html = $(this).html().split(" ");
         html = html.slice(0,200).join(" ") + '<span class="dots">...</span><div class="full-text">' + html.slice(200).join(" ");
         $(this).html(html);

         const $textDiv = $(".text-wrapper",this); // container
        let str = $textDiv.text().trim(); // string
        let diff = str.length - len;      // difference in length
        alert(diff)
        if (diff > 0) {
         
        $(".info-more",this).toggle(diff>0); // show more if needed
        }
    });

    $('.full-text').hide();

    $('.readmore-btn').click(function (event) {
        event.preventDefault();
        var dots_visibility = $(this).siblings(".text-wrapper").find("span.dots");
        dots_visibility.html(dots_visibility.html() == '...' ? ' ' : '...')
        $('.text-wrapper > p.p1').contents().unwrap();
        $(this).parent().find('.full-text').slideToggle('500');
        $(this).html($(this).html() == 'Read less' ? 'Read more' : '');
    });

});


    $(window).ready(function(){

    var moretext = "Read more";
    var lesstext = "Read less";
  
  $('.more').click(function(){
    $('.post').toggleClass('reveal');
    $(this).children('.more').toggle();
    $('.more').toggleClass('show');
    if($('.more').hasClass("show")) {
        $(this).text("Read Less");
    } else {
        $(this).text("Read More");
    }
  })


})


//company module

$("#registerForm2").submit(function(e) {

     e.preventDefault(); 
     $(".errortxt").text('');  
    var redurl=$("#url").val();
    var form = $(this);
    var actionUrl = form.attr('action');

    $.ajax({

        type: "POST",

        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },

        url: actionUrl,

        data: form.serialize(), 

        success: function(data)
        {
            if (data.status_code == 200) {

                window.location.href = redurl;

            }

            else{

                validateMsg(data.error);

            }
       }

    });

});


$("#cregisterForm").submit(function(e) {
     e.preventDefault(); 

     $(".errortxt").text('');
    var form = $(this);
    var actionUrl = form.attr('action');

    $.ajax({

        type: "POST",

        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },

        url: actionUrl,

        data: form.serialize(), 

        success: function(data)
        {
            if (data.status_code == 200) {

                 $("#mailInfo").text(data.data.email);

                 $("#user_id").val(data.data.id)

                 $("#exampleModal1").modal('show');
            }

            else{

                  validateMsg(data.error);

            }
        }

    });
  
});


$("#cgregisterForm2").submit(function(e) {

     e.preventDefault(); 

     $(".errortxt").text('');

    var redurl=$("#url2").val();

    var form = $(this);

    var actionUrl = form.attr('action');

    $.ajax({

        type: "POST",

        headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },

        url: actionUrl,

        data: form.serialize(), 

        success: function(data)
        {

            if (data.status_code == 200) {

                window.location.href = redurl;
            }

            else{

                  validateMsg(data.error);
            }

        }

    });

});

function validateMsg(argument) {
    $.each(argument, function (key,value) {
        $("#" + key + "_errors").text(value);
     })
       
}
