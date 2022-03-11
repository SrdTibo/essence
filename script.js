var getHttpRequest = function () {
    var httpRequest = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) { }
        }
    }

    if (!httpRequest) {
        alert('Abandon :( Impossible de créer une instance XMLHTTP');
        return false;
    }

    return httpRequest
}

var xhr = getHttpRequest()
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://donnees.roulez-eco.fr/opendata/instantane', true)
// On envoit un header pour indiquer au serveur que la page est appellée en Ajax
xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest')
// On lance la requête
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            xhr.responseText // contient le résultat de la page
        } else {
            // Le serveur a renvoyé un status d'erreur
        }
    }
}