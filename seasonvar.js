console.log("personal extension content script for seasonvar loaded.")
var left_banner = document.querySelector('.td-for-left-block')
if(left_banner){
  //left_banner.parentNode.removeChild(bottom_right_banner)
  //console.log("bottom_right_banner was removed.")
  //left_banner.style.display='none'
  //left_banner.style.visibility = 'hidden'
  //console.log('left_banner hided.')
}

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes) {
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        var appended_node = mutation.addedNodes[i];
        if(!appended_node) continue
        if(!appended_node.querySelector) continue
        
        var bottom_right_banner = appended_node.querySelector('#b_sl_51')
        if(bottom_right_banner){
          bottom_right_banner.parentNode.removeChild(bottom_right_banner)
          console.log("bottom_right_banner removed.")
          observer.disconnect()
        }
      }
    }
  });
});

observer.observe(document, {
  childList: true,
  attributes: false,
  characterData: false,
  subtree: true
});