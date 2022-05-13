module.exports = {
  displayName: 'components-switch-form-field',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/components/switch-form-field',
  preset: '../../../jest.preset.ts',
};