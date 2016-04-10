Package.describe({
  name: 'tapfuse:collection-global',
  version: '2.0.0',
  // Brief, one-line summary of the package.
  summary: 'Defines a global Collection object',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

const C = 'client';
const S = 'server';
const CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  // Core
  api.use([
    'ecmascript',
    'promise',
    'mongo',
  ]);
  // 3rd party
  api.use([

  ]);
  // Exports
  api.addFiles('lib/tapfuse-collection-global.js', CS);
  api.addFiles('lib/mongo-extensions.js', S);
  api.export('Collection', CS);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tapfuse:collection-global');
  api.addFiles('tests/package-tests.js');
});
