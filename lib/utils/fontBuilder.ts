const Weights = {
  '300': '300Light',
  '400': '400Regular',
  '500': '500Medium',
  '600': '600SemiBold',
  '700': '700Bold'
}

class Font {
  #weight: '300' | "400" | "500" | "600" | "700" = '400'
  #italic: boolean = false
  #color: "#434343"
  i = () => {
    this.#italic = true
    return this
  }
  b = () => {
    this.#weight = '700'
    return this
  }
  semi = () => {
    this.#weight = '600'
    return this
  }
  light = () => {
    this.#weight = '300'
    return this
  }
  mid = () => {
    this.#weight = '500'
    return this
  }
  s = () => {
    return {
      fontFamily: `Poppins_${Weights[this.#weight]}${this.#italic ? '_Italic' : ''}`,
      color: '#434343'
    }
  } 
  nocolor = () => ({
    fontFamily: `Poppins_${Weights[this.#weight]}${this.#italic ? '_Italic' : ''}`,
  })
}

export const font = () => new Font()