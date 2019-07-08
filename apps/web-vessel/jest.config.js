module.exports = {
  name: 'web-vessel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-vessel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
