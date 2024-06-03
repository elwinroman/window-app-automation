import { driver } from '@wdio/globals'

describe('Pruebas de la calculadora MULTIPLICACION', () => {
  it('Debería multiplicar dos numeros enteros con los botones', async () => {
    await driver.$('~num3Button').click()
    await driver.$('~multiplyButton').click()
    await driver.$('~num3Button').click()
    await driver.$('~equalButton').click()

    const resultado: string = await driver.$('~CalculatorResults').getText()

    await expect(resultado).toEqual('La pantalla muestra 9')
  })

  /* it('Debería sumar dos numeros enteros con input y ENTER para ver el resultado', async () => {
    const calculatorResults = await driver.$('~CalculatorResults')
    // const btnEqual = await driver.$('~equalButton')

    await calculatorResults.addValue('4')
    await calculatorResults.addValue('-')
    await calculatorResults.addValue('5')
    // await calculatorResults.addValue('Enter')
    await calculatorResults.addValue('\uE007')
    // await btnEqual.click()

    // await driver.pause(5000)

    const resultado = await calculatorResults.getText()

    await expect(resultado).toEqual('La pantalla muestra -1')
  }) */
})
