import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
}

export default config
