var pozycjaTla = 0;
var przesuniecie = 1018;

function przesunTlo(){
    //złapanie uchwytu do elementu Katuzela
    var element = document.getElementById('karuzela');

    //zmiana wlasności w stylach 
    element.style. backgroundPositionX = (pozycjaTla - przesuniecie)+"px";
    pozycjaTla -= przesuniecie; // pozycjaTla = pozycjaTla - przesuniecie
}
