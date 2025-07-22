// Node.js > DDD no Node.js > Subdominios e DomainEvents > Estrutura de eventos de domínio

export interface EventHandler {
  setupSubscriptions(): void
}