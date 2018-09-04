
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('bucket_list_titles', function(table) {
      table.increments('id').primary();
      table.string('title');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('list_item_descriptions', function(table) {
      table.increments('id').primary();
      table.string('description');
      table.integer('title_id').unsigned();
      table.foreign('title_id')
        .references('bucket_list_titles.id');

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('bucket_list_titles'),
    knex.schema.dropTable('list_item_descriptions')
  ])
};
