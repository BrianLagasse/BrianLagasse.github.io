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
      _dialogBody += "<tr><td>CompTIA Security+</td></tr>"
      _dialogBody += "<tr><td>MCTS: SharePoint 2010, Application Development</td></tr>"
      _dialogBody += "<tr><td>MCPS: Microsoft Certified Professional</td></tr>"
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
     _dialogBody += "<td>2015 - current</td><td>Senior Developer</td><td>SAIC</td></tr>";
     _dialogBody += "<tr><td colspan='3'>Redesigned multiple applications from an Oracle Collaboration Services (OCS)";
     _dialogBody += " environment and deployed these into a SharePoint 2010 portal for the Army Materiel Command.  ";
     _dialogBody += "Applications were developed using JavaScript along with several jQuery libraries and REST methods";
     _dialogBody += " for data management. Developed Nintex workflows, branding and permissions management to customize";
     _dialogBody += "the applications to meet customer needs.</td></tr><tr></tr>"; 

     _dialogBody += "<tr><td colspan='3'>Fulfilled customer needs by creating a PowerShell script to synchronize user accounts across";
     _dialogBody += " multiple SharePoint site collections.  This script automated a manual process of synchronizing over";
     _dialogBody += " 5,000 user account accounts saving approximately 20 hours of SharePoint admin hours per month.</td></tr>";
     _dialogBody += "</table><br>";
      
     _dialogBody += "<table><tr>";
     _dialogBody += "<td>2014 - 2015</td><td>Senior Developer</td><td>Dynetics Technical Services</td></tr>";
     _dialogBody += "<tr><td colspan='3'>Develop a customized SharePoint 2013 site for NASA customers. This site ";
     _dialogBody += "automated phone record searches on a data set of over 27 million records.  Results were returned";
     _dialogBody += " in less than a minute even for search result sets of more than 10,000 records. The existing manual";
     _dialogBody += " process required multiple days of effort to complete. Development was performed using JavaScript,";
     _dialogBody += "jQuery and a REpresentational State Transfer  (REST) architecture.</td></tr><tr></tr>"; 
     _dialogBody += "</table><br>";
      
     _dialogBody += "</div>";

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
      _dialogBody += "<tr><td align='center'>Oracle</td><td align='center'>SQL Server</td></tr>"
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
