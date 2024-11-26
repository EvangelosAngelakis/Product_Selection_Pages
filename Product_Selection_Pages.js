const links = [
    {text:'', href:'', src:''},
    {text:'', href:'', src:''},
    {text:'', href:'', src:''},
    {text:'', href:'', src:''},
    {text:'', href:'', src:''},
    {text:'', href:'', src:''},
    {text:'', href:'', src:''},
    {text:'', href:'', src:''},
];

let linkIndex = 0;

document.getElementById('dButton').addEventListener('click', function(){
linkIndex = (linkIndex + 1) % links.length;
});

function resetPage(){
    location.reload();
}

