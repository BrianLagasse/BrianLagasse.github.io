var BML = BML || {};
BML.$ = jQuery.noConflict();

cv = (function () {
   "use strict";

   var showSection1 =  function() {
      if (document.getElementById('dialogBody')) {
          var elem = document.getElementById('dialogBody');
          elem.parentNode.removeChild(elem);
      }

      var _dialogBody = "<div id='dialogBody'><b>Section 1</b><br><br>";

     _dialogBody += "This is section 1 </div>";

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
