(function(){
  var options = INSTALL_OPTIONS;
  var element;
  var embed = function(){
    element = Eager.createElement(options.element, element);

    var script = document.createElement('script');
    var src = '//ph-profile-embed.herokuapp.com/user/' + options.user;
    src += "?ref=" + encodeURIComponent(window.location.href);
    script.src = src;
    script.id = "embeddable-ph-" + options.user;

    element.appendChild(script);
  }

  embed();

  INSTALL_SCOPE = {
    setOptions: function(opts){
      options = opts;

      embed();
    }
  };

})();
