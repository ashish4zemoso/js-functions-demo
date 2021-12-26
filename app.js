const listOfNames = [
    {firstName: 'Ashish',
     lastName: 'Dahiya'
    },
    {firstName: 'Ravi',
     lastName: 'Singh'
    },
    {firstName: 'Chetan',
     lastName: 'Kalra'
    },
    {firstName: 'Narsingh',
     lastName: 'Choudhary'
    },
    {firstName: 'Jitin',
     lastName: 'Bahri'
    }
];

const returnInitials = (firstName,lastName) => firstName.charAt(0)+lastName.charAt(0);

function displayAllInitials(returnInitials){
    return listOfNames.map(function(obj){
        return obj.firstName.charAt(0)+obj.lastName.charAt(0);
    });
}

const listOfInitials = displayAllInitials(returnInitials);

listOfInitials.forEach(function(el){
    console.log(el);
});