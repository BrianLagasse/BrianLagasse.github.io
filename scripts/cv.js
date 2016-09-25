var BML = BML || {};
BML.$ = jQuery.noConflict();

BML.cv = (function () {
   "use strict";

   var showCerts =  function() {
      if (document.getElementById('dialogBody')) {
          var elem = document.getElementById('dialogBody');
          elem.parentNode.removeChild(elem);
      }

      var _dialogBody = "<div id='dialogBody'><b>Certifications</b><br><br>";

     _dialogBody += "<table>";
     _dialogBody += "<tr><td>CompTIA Security+  ce</td><td>January 2015</td></tr>"
     _dialogBody += "<tr><td>MCTS: SharePoint 2010, Application Development</td><td>June 2015</td></tr>"
     _dialogBody += "<tr><td>MCPS: Microsoft Certified Professional</td><td>June 2015</td></tr>"
     _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 300,
          width: 900,
          open: function () {
             BML.$("#dialog-div").append(_dialogBody );
          },
          buttons: [

           {
               text: "Close",
               click: function () {
                   BML.$("#dialog-div").dialog("close");

               }
           }
          ]
      });
   },
   
   showEducation =  function() {
      if (document.getElementById('dialogBody')) {
          var elem = document.getElementById('dialogBody');
          elem.parentNode.removeChild(elem);
      }

      var _dialogBody = "<div id='dialogBody'><b>Education</b><br><br>";

     _dialogBody += "<table><tr>";
     _dialogBody += "<td><img src='/images/RPICrest.jpg' width='125' height='113'/></td>";
     _dialogBody += "<td><table>";
     _dialogBody += "<tr><td>Rensselaer Polytechnic Institute</td></tr>"
     _dialogBody += "<tr><td>Bachelor of Science</td></tr>"
     _dialogBody += "<tr><td>Mathematics/Computer Science</td></tr></table></td></tr>"
     _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 300,
          width: 500,
          open: function () {
             BML.$("#dialog-div").append(_dialogBody );
          },
          buttons: [

           {
               text: "Close",
               click: function () {
                   BML.$("#dialog-div").dialog("close");

               }
           }
          ]
      });
   },
   
   showExperience =  function() {
      if (document.getElementById('dialogBody')) {
          var elem = document.getElementById('dialogBody');
          elem.parentNode.removeChild(elem);
      }

      var _dialogBody = "<div id='dialogBody'><b>Experience</b><br><br>";

     _dialogBody += "<table><tr>";
     _dialogBody += "<td>2015 - current</td><td>Position</td><td>Company</td></tr>";
     _dialogBody += "<tr><td colspan='3'>I did this and that.</td></tr>"
     _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 800,
          width: 600,
          open: function () {
             BML.$("#dialog-div").append(_dialogBody );
          },
          buttons: [

           {
               text: "Close",
               click: function () {
                   BML.$("#dialog-div").dialog("close");

               }
           }
          ]
      });
   };;

  return {
     showCerts : showCerts,
     showEducation : showEducation,
     showExperience : showExperience
 };
}());
