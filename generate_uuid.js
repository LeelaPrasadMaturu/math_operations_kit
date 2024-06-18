function generate_uuid(){
    return 'xxxxxxxxxx'.replace(/[x]/g, function() {
        const r = (Math.random() * 36) | 0;
        return r.toString(36);
    });
}

module.exports = generate_uuid;

// why 36 ? , alphabets - 26 + numbers - 10 = 36 , so in total 36 unique charcters , so frist will generate a random number fom 0 to 30 
// and then we will convert to string , frist 0 to 9 numbers and then remianing 26 numbers for charcaters