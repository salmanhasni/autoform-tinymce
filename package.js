Package.describe({
  name: 'salmanhasni:autoform-tinymce',
  version: '1.0.6',
  // Brief, one-line summary of the package.
  summary: 'A small Meteor package to add the TinyMCE WYSIWYG editor as an Autoform input type',
  // URL to the Git repository containing the source code for this package.
  git:'https://github.com/oohaysmlm/autoform-tinymce',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1');
  api.use('ecmascript');
  api.use('blaze-html-templates@1.1.2');
  api.use('salmanhasni:tinymce@5.0.21');
  api.use('aldeed:autoform@5.8.1');
  api.addFiles('autoform-tinymce.html', 'client');
  api.addFiles('autoform-tinymce.js', 'client');
});
