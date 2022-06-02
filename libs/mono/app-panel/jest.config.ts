module.exports = {
  displayName: 'mono-app-panel',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/mono/app-panel',
  preset: '../../../jest.preset.ts',
};