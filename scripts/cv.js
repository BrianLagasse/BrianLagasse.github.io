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
      _dialogBody += "<tr><td align='center'>CompTIA Security+</td></tr>"
      _dialogBody += "<tr><td align='center'>MCPS: Microsoft Certified Professional</td></tr>"
      _dialogBody += "<tr><td align='center'>MCTS: SharePoint 2010, Application Development</td></tr>"
      _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 300,
          width: 450,
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
          height: 325,
          width: 450,
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
      _dialogBody += "<td><b>2015 - current</b></td><td><b>Senior Developer</b></td><td><b>Science Applications International Corporation</b></td></tr>";
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
      _dialogBody += "<td><b>2014 - 2015</b></td><td><b>Senior Developer</b></td><td><b>Dynetics Technical Services</b></td></tr>";
      _dialogBody += "<tr><td colspan='3'>Developed a customized SharePoint 2013 site for NASA customers. This site ";
      _dialogBody += "automated phone record searches on a data set of over 27 million records.  Results were returned";
      _dialogBody += " in less than a minute even for search result sets of more than 10,000 records. The existing manual";
      _dialogBody += " process required multiple days of effort to complete. Development was performed using JavaScript,";
      _dialogBody += " jQuery and a REpresentational State Transfer  (REST) architecture.</td></tr>"; 
      _dialogBody += "</table><br>";
      
      _dialogBody += "<table><tr>";
      _dialogBody += "<td><b>2013 - 2014</b></td><td><b>Associate</b></td><td><b>Booz Allen Hamilton</b></td></tr>";
      _dialogBody += "<tr><td colspan='3'>Technical team lead for a SharePoint project that was highly customized to meet";
      _dialogBody += " client needs.  Customizations were made using VB.Net and C#.Net.  Assumed maintenance activities to";
      _dialogBody += " The site that had become non-functional after being migrated from a non-classified site to a SIPR";
      _dialogBody += " environment.  I corrected the major defects to the system and provided additional system enhancements.";
      _dialogBody += "Tasks included creating and deploying SharePoint web parts, customizing and implementing a Forms Based";
      _dialogBody += " Authentication solution, rewriting external interfaces from Access and Excel that had become incompatible";
      _dialogBody += " with the SharePoint site, creating a data audit capability,  performing SQL Server DBA activities and";
      _dialogBody += " Windows Server system administration. </td></tr>"; 
      _dialogBody += "</table><br>";

      _dialogBody += "<table><tr>";
      _dialogBody += "<td><b>2010 - 2013</b></td><td><b>Senior Programmer</b></td><td><b>Kratos</b></td></tr>";
      _dialogBody += "<tr><td colspan='3'>Application Developer for the Missile Defense Data Center's (MDDC) Data Management";
      _dialogBody += " System. Using Visual Studio 2008 C# .Net, Microsoft SQL Server and NHibernate as the Object-Relational";
      _dialogBody += " Mapper (ORM) tool, I developed both Web Forms for front end systems and Windows Forms for Windows";
      _dialogBody += " applications.  The Windows application was used in a classified environment and was developed using";
      _dialogBody += " a Model-View-Controller (MVC) architecture.</td></tr>"; 
      _dialogBody += "</table><br>";

      _dialogBody += "<table><tr>";
      _dialogBody += "<td><b>2003 - 2010</b></td><td><b>Senior Programmer</b></td><td><b>Jacobs Engineering</b></td></tr>";
      _dialogBody += "<tr><td colspan='3'>Lead Application Developer for several applications developed and maintained for";
      _dialogBody += " the U.S. Army’s Aviation and Missile Command (AMCOM).  Developed these applications using Visual Basic";
      _dialogBody += " .NET, Oracle Forms & Reports, PL/SQL, PSP, and Pro*C and integrated them with Oracle & SQL Server";
      _dialogBody += " databases, email servers, Active Directory, and Microsoft Office products.  Additional duties";
      _dialogBody += " included database administration, writing Design documents, optimizing applications, assigning work";
      _dialogBody += " to developers and reviewing developers’ code.  </td></tr>"; 
      _dialogBody += "</table><br>";

      _dialogBody += "<table><tr>";
      _dialogBody += "<td><b>1996 - 2003</b></td><td><b>Senior Consultant</b></td><td><b>CSC Consulting</b></td></tr>";
      _dialogBody += "<tr><td colspan='3'>Lead Technical Consultant for PeopleSoft implementations. Primary responsibilities";
      _dialogBody += " were performing system customizations and optimizations by using PeopleTools, PeopleCode, SQR, Crystal";
      _dialogBody += " Reports, HTML, and Unix scripts.  The customizations of the PeopleSoft application provided clients";
      _dialogBody += " the functionality required by government pay regulations, company policies, and union time reporting";
      _dialogBody += " regulations.   </td></tr>"; 
      _dialogBody += "</table><br>";

      _dialogBody += "<table><tr>";
      _dialogBody += "<td><b>3 years</b></td><td><b>Senior Computer Scientist</b></td><td><b>Computer Sciences Corporation</b></td></tr>";
      _dialogBody += "<tr><td colspan='3'>Developed several client-server applications using Visual Basic and C++.  These ";
      _dialogBody += "applications are used in support of the missions of NASA at Marshall Space Flight Center and include ";
      _dialogBody += "the Centerwide Action Item Tracking System (CAITS), the Business Procurement  Request System (BPRS), ";
      _dialogBody += "and the Travel Request System (TRS).</td></tr>"; 
      _dialogBody += "</table><br>";

      _dialogBody += "<table><tr>";
      _dialogBody += "<td><b>5 years</b></td><td><b>Senior Computer Systems Analyst</b></td><td><b>Unisys</b></td></tr>";
      _dialogBody += "<tr><td colspan='3'>Senior staff member on several major software development projects servicing the ";
      _dialogBody += "United States Army and National Guard. Responsibilities included system analysis, design, C programming, ";
      _dialogBody += "database design, data loading from existing Unix and DOS systems, customer training and maintenance.  ";
      _dialogBody += "The projects were developed on a Unix platform using Oracle, SQL*Forms, C, and Unix shell programs.</td></tr>"; 
      _dialogBody += "</table><br>";

      _dialogBody += "</div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 800,
          width: 1000,
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
      _dialogBody += "<tr><td><b>Languages</b></td><td></td><td></td></tr>"
      _dialogBody += "<tr><td></td><td align='center'>JavaScript</td><td align='center'>jQuery</td></tr>"
      _dialogBody += "<tr><td></td><td align='center'>C# .Net</td><td align='center'>VB .Net</td></tr>"
      _dialogBody += "<tr><td></td><td align='center'>C/C++</td><td align='center'>PL/SQL</td></tr>"
      _dialogBody += "</table>";
      _dialogBody += "<br><table>";
      _dialogBody += "<tr><td><b>Databases</b></td><td></td><td></td></tr>"     
      _dialogBody += "<tr><td align='center'>Oracle</td><td align='center'>SQL Server</td></tr>"
      _dialogBody += "</table>";
      _dialogBody += "<br><table>";
      _dialogBody += "<tr><td><b>SharePoint</b></td><td></td><td></td></tr>"     
      _dialogBody += "<tr><td></td><td align='center'>2010</td><td align='center'>2013</td></tr>"
      _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 500,
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
