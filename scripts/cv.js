var BML = BML || {};
BML.$ = jQuery.noConflict();

BML.cv = (function () {
   "use strict";

   var showSection1 =  function() {
      if (document.getElementById('dialogBody')) {
          var elem = document.getElementById('dialogBody');
          elem.parentNode.removeChild(elem);
      }

      var _dialogBody = "<div id='dialogBody'><b>Section 1</b><br><br>";

     _dialogBody += "<table><tr>";
     _dialogBody += "<td>2015 - current</td><td>Position</td><td>Company</td></tr>";
     _dialogBody += "<tr><td colspan='3'>I didthis and that.</td></tr>"
     _dialogBody += "</table></div>";

      BML.$("#dialog-div").dialog({
          modal: true,
          draggable: false,
          resizable: false,
          show: 'blind',
          hide: 'blind',
          height: 200,
          width: 300,
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
     showSection1 : showSection1
 };
}());
