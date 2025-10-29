// DECORATOR PATTERN - Solução para problemDecorator.js
// Adicionando funcionalidades à Message

class Message {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

// Decorator Base
class MessageDecorator {
  constructor(message) {
    this.message = message;
  }

  getText() {
    return this.message.getText();
  }
}

// Decorator que transforma texto em maiúsculas
class UpperCaseDecorator extends MessageDecorator {
  getText() {
    return this.message.getText().toUpperCase();
  }
}

// Decorator que adiciona emojis
class EmojiDecorator extends MessageDecorator {
  getText() {
    return `😊 ${this.message.getText()} 😊`;
  }
}

// Decorator que adiciona exclamação
class ExclamationDecorator extends MessageDecorator {
  getText() {
    return `${this.message.getText()}!!!`;
  }
}

// Cliente
console.log("=== Mensagem Original ===");
const msg = new Message("hoje o dia está horrível");
console.log(msg.getText());

console.log("\n=== Mensagem com UpperCase ===");
const upperMsg = new UpperCaseDecorator(msg);
console.log(upperMsg.getText());

console.log("\n=== Mensagem com Emoji ===");
const emojiMsg = new EmojiDecorator(msg);
console.log(emojiMsg.getText());

console.log("\n=== Mensagem com Exclamação ===");
const exclamationMsg = new ExclamationDecorator(msg);
console.log(exclamationMsg.getText());

console.log("\n=== Mensagem com Múltiplos Decorators ===");
const decoratedMsg = new EmojiDecorator(new UpperCaseDecorator(new ExclamationDecorator(msg)));
console.log(decoratedMsg.getText());