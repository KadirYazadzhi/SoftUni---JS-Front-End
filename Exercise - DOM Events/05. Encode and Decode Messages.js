function encodeAndDecodeMessages() {
    const encodeButton = document.querySelectorAll('#main button')[0];
    const decodeButton = document.querySelectorAll('#main button')[1];
    const senderTextarea = document.querySelectorAll('#main textarea')[0];
    const receiverTextarea = document.querySelectorAll('#main textarea')[1];

    encodeButton.addEventListener('click', () => {
        let message = senderTextarea.value;
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }
        receiverTextarea.value = encodedMessage;
        senderTextarea.value = '';
    });

    decodeButton.addEventListener('click', () => {
        let encodedMessage = receiverTextarea.value;
        let decodedMessage = '';
        for (let i = 0; i < encodedMessage.length; i++) {
            decodedMessage += String.fromCharCode(encodedMessage.charCodeAt(i) - 1);
        }
        receiverTextarea.value = decodedMessage;
    });
}