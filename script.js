const button = document.getElementById('button');

button.addEventListener('click', function(){
    event.preventDefault();
    const titolo = document.getElementById('titolo').value;
    const url = document.getElementById('url').value;
    const descrizione = document.getElementById('descrizione').value;
    if(!(titolo && url && descrizione))return alert('ehi');
    document.getElementById('titolo').value = "";
    document.getElementById('url').value = "";
    document.getElementById('descrizione').value = "";
    
    console.log(titolo, url, descrizione);

});