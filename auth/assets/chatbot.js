const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;

// Cria elemento da mensagem
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    const chatContent = className === "outgoing"
        ? `<p></p>`
        : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
};

// Busca mensagens anteriores
const loadUserMessages = async () => {
    try {
        const res = await fetch("/api/message", {
            method: "GET",
            credentials: "include"
        });

        const { data, ok } = await res.json();
        if (!ok) throw new Error("Erro ao buscar mensagens");

        data.forEach(msg => {
            const className = msg.sent ? "outgoing" : "incoming";
            const messageEl = createChatLi(msg.content, className);
            chatbox.appendChild(messageEl);
        });

        chatbox.scrollTo(0, chatbox.scrollHeight);
    } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
    }
};

// Envia mensagem do usuário e recebe resposta
const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");

    fetch("/api/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ content: userMessage })
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            messageElement.textContent = data.answer;
        } else {
            throw new Error("Resposta inválida");
        }
    })
    .catch((error) => {
        console.error(error);
        messageElement.classList.add("Erro");
        messageElement.textContent = "Opa! Algo não funcionou. Por favor tente novamente.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

// Manipula o envio da mensagem
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Mostra a mensagem do usuário
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Pensando...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
};

// Ajusta a altura do input
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// Enter envia se for desktop
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// Carrega as mensagens anteriores ao iniciar
window.addEventListener("DOMContentLoaded", loadUserMessages);
