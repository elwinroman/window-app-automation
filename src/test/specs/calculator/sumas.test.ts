import { driver } from '@wdio/globals'

describe('Pruebas de la calculadora SUMA', () => {
  it('Debería sumar dos numeros enteros con input y ENTER para ver el resultado', async () => {
    const calculatorResults = await driver.$('~CalculatorResults')
    // const btnEqual = await driver.$('~equalButton')

    await calculatorResults.addValue(process.env.UNO)
    await driver.$('~plusButton').click()
    await calculatorResults.addValue(process.env.DOS)
    await calculatorResults.addValue('\uE007')
    const resultado = await calculatorResults.getText()

    await expect(resultado).toEqual('La pantalla muestra 6')
  })
})
