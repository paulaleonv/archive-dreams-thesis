// Menu selection
$(document).ready(function() {

  $("section").not("#login_page").hide();
  // $("section").not( "#archive_page" ).hide();
  // $("section").not("#record_page").hide();
  // $("section").not("#read_page").hide();

  $("#signin_button").click(function() {
    $("section").not("#login_page").hide();
    $("#login_page").show();

    // hide expanded navbar
    $('.navbar-collapse').collapse('hide');
  })

  $("#archive_page_button").click(function() {
    $("section").not("#archive_page").hide();
    $("#archive_page").show();
    gotData();

    // hide expanded navbar
    $('.navbar-collapse').collapse('hide');
  })

  $("#record_page_button").click(function() {

    $("section").not("#record_page").hide();
    $("#record_page").show();

    $("#record_title").val("")
    $("#record_body").val("")
    $("#record_tag").val("")

    // hide expanded navbar
    $('.navbar-collapse').collapse('hide');


  })

  $("#gallery_page_button").click(function() {
    $("section").not("#gallery_page").hide();
    $("#gallery_page").show();

    //gotData();

    // hide expanded navbar
    //$('.navbar-collapse').collapse('hide');
  })

  $("#homeButton_Image").click(function() {
    $("section").not("#gallery_page").hide();
    $("#gallery_page").show();

    //gotData();

    // hide expanded navbar
    //$('.navbar-collapse').collapse('hide');
  })



});


//Button function
$("#saveButton_Image").click(saveDreams);

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCCMRS8jPtvNUy_w5dRqn2xsMZsOmP5SK4",
  authDomain: "dreamarchive-a89e5.firebaseapp.com",
  databaseURL: "https://dreamarchive-a89e5.firebaseio.com",
  projectId: "dreamarchive-a89e5",
  storageBucket: "dreamarchive-a89e5.appspot.com",
  messagingSenderId: "138872739434"
};
firebase.initializeApp(config);
database = firebase.database();
// let ref = database.ref('newUserDreamsDB');
const ref = database.ref('testDB');

// ref.on('value', gotData, errData);

function errData(err) {
  console.log("error!");
  console.log(err);
}

function gotData() {
  // var userId = firebase.auth().currentUser.uid;

  // clear before loading the page
  $("#archive_page_content").children().remove();


  ref.once('value').then(function(snapshot) {
    let value = snapshot.val();
    let key = Object.keys(snapshot.val());

    let tagList = [];
    let titleList = [];
    // Add card element
    key.forEach(function(d) {
      let content = value[d];
      // console.log(content)
      let dt = new Date(content.date);
      let dt_final = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
      //let body = content.body.replace(/^(.{130}[^\s]*).*/, "$1") // show only 130 letters
      let num = Math.min(content.body.length,130);
      let body = content.body;
      //let bodyShort = content.body.substring(0, num);
      let title = content.title;
      let tag = content.tag;


      // put adding tag function here
      for (let i = 0; i < tag.length; i++) {
        tagList.push(tag[i])
         console.log(tag[i])
      }

      // list of title function
        titleList.push(title);
        console.log(titleList)


      $("#archive_page_content").prepend($('<div/>', {
          'class': 'row'
        })
        .append($('<div/>', {
            'class': 'col-lg-7 colum-sizing'
          })
          .append($('<div/>', {
              'class': 'card h-100 custom-card'
            })
            .append($('<div/>', {
                'class': 'card-body'
              })
              .append([
                $('<h4/>', {
                  'class': 'card-title titleFont'
                }).append($('<a/>').text(title).attr("href", "#").click(function() {
//ojo: this is not working
                  readDream(title, body, tag, dt_final);
                })),
                $('<blockquote/>', {
                  'class': 'blockquote'
                }).append($('<footer/>', {
                  'class': 'blockquote-footer'
                }).text(dt_final)),
                $('<p/>', {
                  'class': 'card-text bodyFont'
                    }).text(body).css("color", "#afafaf")
                //}).text(bodyShort).css("color", "#afafaf")
              ])))))
    });


    //  Show all tags
    $("#tagList").children().remove();
    tagList.forEach(function(d) {
        $("#tagList").append($('<p>', {
          'class': 'eachTag'
        }).text(d))
      // console.log(tag[i])
      });



  // Show all titles
  $("#titleList").children().remove();
  titleList.forEach(function(d) {
      $("#titleList").append($('<p>', {
        'class': 'eachTitle'
      }).text(d))
    });


  });

}



// ref.remove();

function saveDreams() {
  let data = {
    title: $("#record_title").val(),
    body: $("#record_body").val()? $("#record_body").val():"",
    tag: $("#record_tag").val().split(" "),
    date: new Date().toString()
  }
  ref.push(data);

  $("#record_title").val('')
  $("#record_body").val('')
  $("#record_tag").val('')

}


function readDream(title, body, tag, date) {
  //

  // clear before loading the page
  $("#read_title").remove();
  $("#read_body").remove();
  $("#read_date").remove();
  $("#read_tag").remove();


  $("#read_page")
    .prepend($('<div/>', {
        'class': 'row justify-content-center'
      })
      .append($('<div/>', {
        'class': 'mt-2 w-75',
        'id': 'read_tag'
      })))
    .prepend($('<div/>', {
        'class': 'row justify-content-center'
      })
      .append($('<div/>', {
        'class': 'mt-2 w-75 read_tag'
      })))
    .prepend($('<div/>', {
        'class': 'row mt-2 justify-content-center'
      })
      .append($('<p/>', {
        'class': 'mt-2 w-75 bodyFont',
        'id': 'read_body'
      }).text(body)))
    .prepend($('<div/>', {
        'class': 'row mt-2 justify-content-center'
      })
      .append($('<p/>', {
        'class': 'mt-2 w-75 bodyFont',
        'id': 'read_date'
      }).text(date)))
    .prepend($('<div/>', {
        'class': 'row justify-content-center'
      })
      .append($('<h1/>', {
        'class': 'mt-4 w-75 titleFont',
        'id': "read_title"
      }).text(title)))

  tag.forEach(function(d) {
    $("#read_tag").append($('<p/>', {
      'class': 'mr-1 bodyFont d-inline-block'
    }).text(d))
  })

  $("section").not("#read_page").hide();
  $("#read_page").show();

}



document.getElementById("searchButtonArchive").addEventListener("click", function() {
  // clear before loading the page
  $("#archive_page_content").children().remove();

  var searchArchiveValue = document.getElementById("searchInputArchive").value
  // console.log(searchArchiveValue)

  ref.once('value').then(function(snapshot) {
    let value = snapshot.val();
    let key = Object.keys(snapshot.val());

    let tagList=[];
    // Add card element
    key.forEach(function(d) {
      let content = value[d];
      // console.log(content)


              let dt = new Date(content.date);
              let dt_final = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
              let body = content.body.replace(/^(.{130}[^\s]*).*/, "$1") // show only 130 letters
              let title = content.title;
              let tag = content.tag;


              // put adding tag function here
              for (let i = 0; i < tag.length; i++) {
                tagList.push(tag[i])
                /console.log(tag[i])
              }

      if (content.body.indexOf(searchArchiveValue) != -1) {



        $("#archive_page_content").prepend($('<div/>', {
            'class': 'row'
          })
          .append($('<div/>', {
              'class': 'col-lg-7 colum-sizing'
            })
            .append($('<div/>', {
                'class': 'card h-100 custom-card'
              })
              .append($('<div/>', {
                  'class': 'card-body'
                })
                .append([
                  $('<h4/>', {
                    'class': 'card-title titleFont'
                  }).append($('<a/>').text(title).attr("href", "#").click(function() {
                    readDream(title, body, tag, dt_final);
                  })),
                  $('<blockquote/>', {
                    'class': 'blockquote'
                  }).append($('<footer/>', {
                    'class': 'blockquote-footer'
                  }).text(dt_final)),
                  $('<p/>', {
                    'class': 'card-text bodyFont'
                  }).text(body).css("color", "#afafaf")
                ])))))
      }
    });
    //  Show all tags
    $("#tagList").children().remove();
    console.log(tagList);
    tagList.forEach(function(d) {
        $("#tagList").append($('<p>', {
          'class': 'eachTag'
        }).text(d))
      })
  });

})
