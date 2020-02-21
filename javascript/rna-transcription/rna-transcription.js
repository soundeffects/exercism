export const toRna = string => {
    var rnaString = '';
    string.toLowerCase().split('').forEach(char => {
        switch(char) {
            case 'g':
                rnaString += 'C';
                break;
            case 'c':
                rnaString += 'G';
                break;
            case 't':
                rnaString += 'A';
                break;
            case 'a':
                rnaString += 'U';
                break;
        }
    });
    return rnaString;
};
