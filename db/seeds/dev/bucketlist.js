
exports.seed = function(knex, Promise) {
  return knex('list_item_descriptions').del()
    .then(() => knex('bucket_list_titles').del())
    .then(() => {
      return Promise.all([
        knex('bucket_list_titles').insert({
          title: 'Bungee Jumping'
        }, 'id')
        .then(title => {
          return knex('list_item_descriptions').insert([
            {
              description: 'Jump off bridge and hope for the best',
              title_id: title[0]
            }
          ])
        })
        .then(() => console.log('Seeding complete'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
