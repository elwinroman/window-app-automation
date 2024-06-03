import data from './../../../config/data'

describe('Suma store data', () => {
  let result = ''
  const num1 = data.num1 || '10'
  const num2 = data.num2 || '3'

  it('should return the sum of the stored data', async () => {
    await driver.$('~CalculatorResults').setValue(num1)
    await driver.$('~multiplyButton').click()
    await driver.$('~CalculatorResults').setValue(num2)
    await driver.$('~equalButton').click()

    result = await driver.$('~CalculatorResults').getText()
    expect(result).toEqual('La pantalla muestra 45')
    await driver.pause(2000)
  })

  it('should return the sum of the stored data', async () => {
    await console.log('Resultado de la multiplicación anterior del test 1 (test 2): ', result)
    await driver.$('~CalculatorResults').setValue(num1)
    await driver.$('~multiplyButton').click()
    await driver.$('~CalculatorResults').setValue(result)
    await driver.$('~equalButton').click()

    const finalResult = await driver.$('~CalculatorResults').getText()
    expect(finalResult).toEqual('La pantalla muestra 405')
    await console.log('Resultado de la multiplicación final (test 2): ', result)
    await driver.pause(2000)
  })
})
