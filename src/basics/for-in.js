const salaries = {
    John: 100,
    Ann: -20000,
    Pete: 130
  }
  
  let sum = 0;
  
  for(person in salaries) {
      if(salaries[person] > 0) {
          sum += salaries[person];
      }
  }
  
  console.log(`the sum of salaries is ${sum}`);