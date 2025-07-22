// Node.js > DDD no Node.js > Subdominios e DomainEvents > Estrutura de eventos de domínio

import { UniqueEntityID } from '../entities/unique-entity-id'

export interface DomainEvent {
  ocurredAt: Date
  getAggregateId(): UniqueEntityID
}