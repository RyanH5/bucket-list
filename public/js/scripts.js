$('.item--generating-btn').on('click', createListItem);

function createListItem(event) {
  event.preventDefault();
  $('#bucket--list-display').append(`
    <article class="bucket--list-card">
      <button class="card--delete-btn">DELETE</button>
      <h1>${$('.input-title').val()}</h1>
      <p>${$('.input-description').val()}
    </article>`)
}