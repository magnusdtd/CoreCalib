document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.copy-bibtex');
  if (!button) return;
  button.addEventListener('click', function() {
    var text = document.getElementById('bibtex').textContent;
    var label = button.querySelector('.copy-label');
    navigator.clipboard.writeText(text).then(function() {
      label.textContent = 'Copied';
      setTimeout(function() { label.textContent = 'Copy'; }, 1500);
    });
  });
});
