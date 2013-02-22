var startApp = function() {
  // alert('started');

};

$(document).ready(function()
                  {
                  $.ajax({
                         type: "GET",
                         url: "http://cv.skill.se/cv/rss.jsp?format=mtrxml&allads=1",
                         dataType: "xml",
                         success: parseXml
                         });
                  
                  function parseXml(xml)
                  {
                  
                  //find every Tutorial and print the author
                  $(xml).find("job").each(function()
                                               {
                                          
                                          var link = $(this).find('applicationMethods link').attr('href');
                                          var img = $(this).find('logo link').attr('href');
                                          var title = $(this).find('title').text();
                                          
                                       
                                          
                                          $('div#content ul#job').append('<li><a href="'+ link + '"><img src="' + img +'"><p>' + title + '</p></a></li>');
                                          
                                          
                                         // $('div#content ul#job').append('<li><a href="'+$(this).find('applicationMethods link').attr('href') + '"><img src="' + $(this).find('logo link').attr('href') +'"><p>' + $(this).find('title').text() + '</p></a></li>');
                                          
                                          // <li><a href="acura.html"><img src="css/images/ajax-loader.gif">Acura</a></li>
                                         
                                          // $('div#content ul#job').append('<li><a href="'+$(this).find('applicationMethods link').attr('href') + '">' + $(this).find('name').text() + '</a></li>');
                                          
                                          
                                               });
                  $('div#content ul#job').listview("refresh");
                  }
                  
                  });

