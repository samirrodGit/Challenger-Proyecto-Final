// script.js

document.getElementById("encrypt-button").addEventListener("click", function() {
    var inputText = document.getElementById("input-text").value;
    var encryptedText = encryptText(inputText);

    // Ocultar imagen y mostrar textarea con el mensaje encriptado
    document.getElementById("placeholder-image").style.display = "none";
    document.getElementById("output-title").textContent = "Texto encriptado";
    document.getElementById("output-text").textContent = "";
    
    var resultTextArea = document.getElementById("result-text");
    resultTextArea.style.display = "block";
    resultTextArea.value = encryptedText;

    document.getElementById("copy-button").style.display = "block";
});

// Función de encriptación
function encryptText(text) {
    var encryptionRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.replace(/[eioua]/g, function(match) {
        return encryptionRules[match];
    });
}

// Función para copiar texto al portapapeles
document.getElementById("copy-button").addEventListener("click", function() {
    var resultText = document.getElementById("result-text");
    resultText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

// Aquí puedes agregar también la lógica para desencriptar si lo deseas
// Asegúrate de adaptar el evento de clic del botón de desencriptar

// Función de desencriptación
function decryptText(text) {
    var decryptionRules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Se asume que los patrones de reemplazo no se sobrelapan
    return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return decryptionRules[match];
    });
}

// script.js

document.getElementById("encrypt-button").addEventListener("click", function() {
    var inputText = document.getElementById("input-text").value;
    var encryptedText = encryptText(inputText);

    // Ocultar imagen y mostrar textarea con el mensaje encriptado
    document.getElementById("placeholder-image").style.display = "none";
    document.getElementById("output-title").textContent = "Texto encriptado";
    document.getElementById("output-text").textContent = "";

    var resultTextArea = document.getElementById("result-text");
    resultTextArea.style.display = "block";
    resultTextArea.value = encryptedText;

    document.getElementById("copy-button").style.display = "block";
});

document.getElementById("decrypt-button").addEventListener("click", function() {
    var inputText = document.getElementById("input-text").value;
    var decryptedText = decryptText(inputText);

    // Ocultar imagen y mostrar textarea con el mensaje desencriptado
    document.getElementById("placeholder-image").style.display = "none";
    document.getElementById("output-title").textContent = "Texto desencriptado";
    document.getElementById("output-text").textContent = "";

    var resultTextArea = document.getElementById("result-text");
    resultTextArea.style.display = "block";
    resultTextArea.value = decryptedText;

    document.getElementById("copy-button").style.display = "block";
});

// Función de encriptación
function encryptText(text) {
    var encryptionRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.replace(/[eioua]/g, function(match) {
        return encryptionRules[match];
    });
}

// Función de desencriptación
function decryptText(text) {
    var decryptionRules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Se asume que los patrones de reemplazo no se sobrelapan
    return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return decryptionRules[match];
    });
}

// Función para copiar texto al portapapeles
document.getElementById("copy-button").addEventListener("click", function() {
    var resultText = document.getElementById("result-text");
    resultText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});