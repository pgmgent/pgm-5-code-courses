function validateTs() {
  let age = document.getElementById('age').value;
  let name = document.getElementById('name').value;
  let calculatedAge = age * 7;
  if(typeof age !== 'number') {
      throw new Error('age is not a number')
  }
}