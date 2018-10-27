import { Injectable } from '@angular/core';
import { Actor, Strategy, StrategyOptions, RoundRobinStrategy, spawn } from 'clooneyjs';

@Injectable({
  providedIn: 'root'
})
export class ClooneyService {

  getInstance(actor: Actor, constructorArgs?, opts?: StrategyOptions): Promise<Actor> {
    return spawn<Actor>(actor, constructorArgs, opts);
  }

}
