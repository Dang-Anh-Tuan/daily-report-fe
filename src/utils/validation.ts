import { useState, useEffect } from 'react'

export interface RuleValidate {
  validator: (value: string | number, args?: object) => boolean
  args?: object
  message: string
}

// *** Usage ***
// ** Create array rules: RuleValidate[]
// ** Call hook useValidate() to get error and valid

export const useValidate = (value: string | number, rules: RuleValidate[]) => {
  const [error, setError] = useState<string[]>([])

  useEffect(() => {
    const errorTemp: string[] = []
    rules.forEach((rule) => {
      const isValid = rule.validator(value, rule.args)
      if (!isValid) errorTemp.push(rule.message)
    })
    setError(errorTemp)
  }, [value])

  return { valid: !(error.length > 0), error }
}

// *** Common rule usually use ***
export const notEmpty: RuleValidate = {
  validator: (value: string | number) => !!value,
  message: 'Please enter value'
}
