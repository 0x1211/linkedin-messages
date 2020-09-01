// TODO: export to a Message class
function sanitizeMessage(message) {
  if (!message) {
    throw new Error('No message found', message);
  }

  const msg = message;

  if (!msg.TO) {
    msg.TO = 'LinkedIn User';
  } else if (!message.FROM) {
    msg.FROM = 'LinkedIn User';
  }

  return msg;
}

// TODO: export to a Message class
function getMessageEmitter(message) {
  if (!message) {
    throw new Error('No message found', message);
  }
  return message.FROM;
}

// TODO: export to a Messages class
function getUniqueMessagesEmitters(messages) {
  return new Set(messages.map(getMessageEmitter));
}

// TODO: Turn into a module
function getMapFromMessages(messages) {
  if (!messages) {
    throw new Error('No messages found', messages);
  }

  // Identifies unique emitters
  const emitters = getUniqueMessagesEmitters(messages);

  const mappedMessages = new Map();

  // Map messages to its emitter
  emitters.forEach((emitterName) => {
    mappedMessages.set(
      emitterName,
      messages.filter(
        (msg) => (msg.FROM === emitterName || msg.TO === emitterName),
      ),
    );
  });

  // Order messages by date
  mappedMessages.forEach((value) => {
    // value is an array of messages we must sort by Date
    // we sort them using milliseconds value for precision concerns
    value.sort((a, b) => Date.parse(b.DATE) - Date.parse(a.DATE));
    // we somehow must reverse the array because doing b - a does not give current
    // sort order for very time-close messages
    value.reverse();
  });

  return mappedMessages;
}

module.exports = {
  getMessageEmitter,
  getUniqueMessagesEmitters,
  sanitizeMessage,
  getMapFromMessages,
};
