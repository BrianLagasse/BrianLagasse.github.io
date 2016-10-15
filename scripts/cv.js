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
      _dialogBody += "<tr><td>CompTIA Security+</td><td align='center'>January 2015</td></tr>"
      _dialogBody += "<tr><td>MCTS: SharePoint 2010, Application Development</td><td align='center'>June 2015</td></tr>"
      _dialogBody += "<tr><td>MCPS: Microsoft Certified Professional</td><td align='center'>June 2015</td></tr>"
      _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 300,
          width: 750,
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
   },

showSkills =  function() {
      if (document.getElementById('dialogBody')) {
          var elem = document.getElementById('dialogBody');
          elem.parentNode.removeChild(elem);
      }

      var _dialogBody = "<div id='dialogBody'><b>Skills</b><br><br>";

      _dialogBody += "<table>";
      _dialogBody += "<tr><td span='2'><b>Languages</b></td></tr>"
      _dialogBody += "<tr><td align='center'>JavaScript</td><td align='center'>jQuery</td></tr>"
      _dialogBody += "<tr><td align='center'>C# .Net</td><td align='center'>VB .Net</td></tr>"
      _dialogBody += "<tr><td align='center'>C/C++</td><td align='center'>PL/SQL</td></tr>"
      _dialogBody += "</table>";
      _dialogBody += "<br><table>";
      _dialogBody += "<tr><td span='2'><b>Databases</b></td></tr>"     
      _dialogBody += "<tr><td align='center'>SQL Server</td><td align='center'>       Oracle</td></tr>"
      _dialogBody += "</table>";
      _dialogBody += "<br><table>";
      _dialogBody += "<tr><td span='2'><b>SharePoint</b></td></tr>"     
      _dialogBody += "<tr><td align='center'>2010</td><td align='center'>2013</td></tr>"
      _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 450,
          width: 400,
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
   };

  return {
     showCerts : showCerts,
     showEducation : showEducation,
     showExperience : showExperience,
     showSkills : showSkills,
 };
}());
