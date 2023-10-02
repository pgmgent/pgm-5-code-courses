function validateTs() {
    var age = document.getElementById('age').value;
    var name = document.getElementById('name').value;
    var calculatedAge = age * 7;
    if (typeof age !== 'number') {
        throw new Error('age is not a number');
    }
}
