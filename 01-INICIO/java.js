document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById("chatContainer");
    const chatBody = document.getElementById("chatBody");
    const openChatButton = document.getElementById("openChat");
    const closeChatButton = document.getElementById("closeChat");
    const mainQuestion = document.getElementById("main-question")
    const mainAnsware = document.getElementById("main-answare")

    // Si los elementos no se encuentran, mostrar un error en consola
    if (!chatContainer || !chatBody || !openChatButton || !closeChatButton) {
        console.error("❌ ERROR: Uno o más elementos del chat no fueron encontrados. Verifica los ID en HTML.");
        return;
    }

    //  Mostrar el chat al hacer clic en "Solicitar Asesoría"
    openChatButton.addEventListener("click", function (event) {
        event.preventDefault();  // Evita redirecciones
        event.stopPropagation(); // Evita eventos inesperados
        console.log("✅ Botón clickeado - Abriendo chat");
        chatContainer.classList.add("active");
    });

    //  Cerrar el chat al hacer clic en la "X"
    closeChatButton.addEventListener("click", function () {
        console.log(" Cerrando chat");
        chatContainer.classList.remove("active");
    });
    



    window.sendQuestion = function (question) {
        const response = getResponse(question);
    
        // Limpiar solo las preguntas previas, sin afectar el chat general
        mainQuestion.classList.add("active")
    
        //  Crear y agregar la pregunta del usuario al chat
        const questionElement = document.createElement("div");
        questionElement.classList.add("chat-message", "user-message");
        questionElement.innerHTML = `<p><strong>Tú:</strong> ${question}</p>`;
        mainAnsware.appendChild(questionElement);
    
        //  Crear y agregar la respuesta del asesor al chat
        const responseElement = document.createElement("div");
        responseElement.classList.add("chat-message", "bot-message");
        responseElement.innerHTML = `<p><strong>Asesor:</strong> ${response}</p>`;
        mainAnsware.appendChild(responseElement);
    
        //  Crear el botón "↩ Volver"
        const backButton = document.createElement("button");
        backButton.innerText = "↩ Volver";
        backButton.classList.add("back-button"); // ✅ Usa la nueva clase para que sea verde
        backButton.onclick = volver;
    
        //  Agregar el botón al chat
        mainAnsware.appendChild(backButton);
    
        // Hacer scroll hacia abajo para mostrar todo el contenido nuevo
        chatBody.scrollTop = chatBody.scrollHeight;
    };
    
    

    function getResponse(question) {
        const responses = {
            "¿Cómo funciona la calculadora?": "Nuestra calculadora te ayuda a gestionar tu presupuesto ingresando tus ingresos y gastos.",
            "¿Cuáles son los beneficios de asesorarse con ustedes?": "Te ayudamos a mejorar tus finanzas con asesorías especializadas.",
            "¿Cómo puedo contactarlos?": "Puedes contactarnos en la sección de contacto o escribiéndonos a nuestro correo."
        };
        return responses[question] || "Lo siento, no tengo información sobre eso.";
    }

    //  Función para agregar el botón "Volver" después de mostrar una respuesta
    function volver() {
        const mainQuestion = document.getElementById("main-question")
        mainQuestion.classList.remove("active")
        console.log("hola")
        mainAnsware.innerHTML = ""
    }
});


