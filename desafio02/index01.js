// ADAPTER PATTERN - Solução para problemAdapter.js
// Adaptando o ModernPaymentAPI para funcionar com o PaymentProcessor

class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

// ADAPTER: Adapta a interface moderna para funcionar com o sistema legado
class ModernPaymentAdapter {
  constructor(modernAPI) {
    this.modernAPI = modernAPI;
  }

  makePayment(amount) {
    // Converte o valor em reais para centavos
    const amountInCents = amount * 100;
    this.modernAPI.process(amountInCents);
  }
}

class PaymentProcessor {
  constructor(system) {
    this.system = system;
  }

  pay(amount) {
    this.system.makePayment(amount);
  }
}

// Cliente usando sistema legado
console.log("=== Usando Sistema Legado ===");
const legacy = new LegacyPaymentSystem();
const processor1 = new PaymentProcessor(legacy);
processor1.pay(100);

// Cliente usando API moderna através do Adapter
console.log("\n=== Usando API Moderna com Adapter ===");
const modernAPI = new ModernPaymentAPI();
const adapter = new ModernPaymentAdapter(modernAPI);
const processor2 = new PaymentProcessor(adapter);
processor2.pay(100); 