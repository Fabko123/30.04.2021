const mess = new Array()

function send() {
    const name = document.getElementById('name').value
    const nazwisko = document.getElementById('nazwisko').value
    const tel = document.getElementById('tel').value
    const text = document.getElementById('text').value

if(name.length > 2 && name.length > 3 && tel.indexOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '0') && text.length > 10){
        mess.push({imie: name, nazwisko: nazwisko, tel: tel, text: text})
        console.log(mess)
    }else{
        alert('Wariat Pominałeś coś')
    }
}

function xd() {
    const wybor = document.getElementById('wybór')
    console.log(wybor)
}