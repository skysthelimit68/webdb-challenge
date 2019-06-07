
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {description: 'What the app is about, main focus, target market...etc', note: 'What the app is about, main focus, target market...etc', completed: false, project_id: 1},
        {description: 'What the app is about, main focus, target market...etc', note: 'What the app is about, main focus, target market...etc', completed: false, project_id: 2},        
        {description: 'What the app is about, main focus, target market...etc', note: 'What the app is about, main focus, target market...etc', completed: false, project_id: 3},  
        {description: 'Data Modeling', note: 'initial dataflow', completed: false, project_id: 1},  
        {description: 'Data Modeling', note: 'initial dataflow', completed: false, project_id: 2},  
        {description: 'Data Modeling', note: 'initial dataflow', completed: false, project_id: 3},  
        {description: 'Primary Functionality', note: 'what functionalities we want to include, short term, mid term to long term, and mvp', completed: false, project_id: 1},  
        {description: 'Primary Functionality', note: 'what functionalities we want to include, short term, mid term to long term, and mvp', completed: false, project_id: 2},  
        {description: 'Primary Functionality', note: 'what functionalities we want to include, short term, mid term to long term, and mvp', completed: false, project_id: 3},  

      ]);
    });
};
