chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('what2see.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});