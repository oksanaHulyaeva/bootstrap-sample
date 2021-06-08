const modal = document.getElementById('exampleModal');
const inputName = document.getElementById('input-name');

modal.addEventListener('shown.bs.modal', function () {
  inputName.focus()
});
