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

function listAllInitials(returnInitials){
    return listOfNames.map(function(obj){
        return returnInitials(obj.firstName,obj.lastName);
    });
}
const listOfInitials = listAllInitials(returnInitials);

listOfInitials.forEach(function(el){
    console.log(el);
});