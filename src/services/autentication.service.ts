import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { PersonRepository } from '../repositories';
const generador=require('password-generator');
const cryptoJS=require('crypto-js')
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticationService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
  GenerarClave(){
    let clave=generador(8,false);
    return clave;
  }

  CifrarClave(clave:string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }
}

