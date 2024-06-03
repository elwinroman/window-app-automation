import { driver } from '@wdio/globals'

describe('Pruebas de la calculadora SUMA', () => {
  it('Debería sumar dos numeros enteros con los botones', async () => {
    const btnNum1: WebdriverIO.Element = await driver.$('~num1Button')
    const btnNum2: WebdriverIO.Element = await driver.$('~num2Button')
    const btnSumar: WebdriverIO.Element = await driver.$('~plusButton')
    const btnEqual: WebdriverIO.Element = await driver.$('~equalButton')
    const calculatorResults: WebdriverIO.Element = await driver.$('~CalculatorResults')

    await btnNum1.click()
    await btnSumar.click()
    await btnNum2.click()
    await btnEqual.click()

    const resultado: string = await calculatorResults.getText()

    await expect(resultado).toEqual('La pantalla muestra 3')
  })

  it('Debería sumar dos numeros enteros con input y ENTER para ver el resultado', async () => {
    const calculatorResults = await driver.$('~CalculatorResults')
    // const btnEqual = await driver.$('~equalButton')

    await calculatorResults.addValue('4')
    await calculatorResults.addValue('-')
    await calculatorResults.addValue('5')
    await calculatorResults.addValue('\uE007')
    const resultado = await calculatorResults.getText()

    await expect(resultado).toEqual('La pantalla muestra -1')
  })
})
