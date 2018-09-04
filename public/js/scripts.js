$('.item--generating-btn').on('click', createListItem);
$('#bucket--list-display').on('click', $('.card--delete-btn'), deleteListItem);

async function createListItem(event) {
  event.preventDefault();
  $('#bucket--list-display').append(`
    <article class="bucket--list-card">
      <button class="card--delete-btn">DELETE</button>
      <h1>${$('.input-title').val()}</h1>
      <p>${$('.input-description').val()}
    </article>`);
  const title = $('.input-title').val()
  await postListItem(title);
}

function deleteListItem(event) {
  (event.target).closest('article').remove();
} 

async function postListItem(title) {
  const url = 'http://localhost:3000/api/v1/titles';
  const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({title: $('.input-title').val()}),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    console.log(response)
  const bucketListData = await response.json(); 
  console.log(bucketListData)
}