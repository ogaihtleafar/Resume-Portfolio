//Function to handle sending messsage

function sendMessage() {
    const messageInput =document.getElementById('message-input');
    const messsage = messageInput.ariaValueMax.trim();
    if (message !=='' ) {
        const chatMessages =document.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value ='';
        chatMessages.scrollTop =chatMessages.scrollHeight;
    }
}

//Event listener

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementsById('message-input').addEventListener ('keydown', (event)=>{
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});