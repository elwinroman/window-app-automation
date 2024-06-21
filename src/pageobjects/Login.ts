import { driver } from '@wdio/globals'
import { Keys } from '../constants/keyboard-actions.ts'

interface ILogin {
  inputUsuario: string
  inputPassword: string
  btnAceptar: string
  btnSalir: string
  loginRSC(credentials: { usuario: string; password: string }): void
}

export default class Login implements ILogin {
  inputUsuario: string
  inputPassword: string
  btnAceptar: string
  btnSalir: string

  constructor() {
    this.inputUsuario = '~txtUsuario' //42.2166400
    this.inputPassword = '~txtContraseña' // 42.4004728
    this.btnAceptar = '~btnAceptar'
    this.btnSalir = '~btnSalir' // 72946031
  }

  async loginRSC(credentials: { usuario: string; password: string }) {
    const { usuario, password } = credentials
    await driver.$(this.inputUsuario).setValue(usuario)
    await driver.$(this.inputPassword).setValue(password)
    await driver.$(this.btnAceptar).setValue(Keys.Enter)
  }
}
