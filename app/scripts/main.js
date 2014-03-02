(function () {

  // DOM
  var panelTitles = $(".panel-title");

  // Event handler
  var toggleOpenClass = function toggleOpenClass() {
    var self = $(this);
    self.toggleClass("-open");
    panelTitles.not(self).removeClass("-open");
  }

  // Events
  panelTitles.on("click", toggleOpenClass);
})();

