Template.autoformTinyMCE.onRendered(function() {
    var initOptions = this.data || {};
    initOptions.selector = '#' + this.firstNode.id;
    initOptions.skin_url = '/packages/teamon_tinymce/skins/lightgray';
    tinymce.init(initOptions);
});

Template.autoformTinyMCE.helpers({
    schemaKey: function() {
        return this.atts['data-schema-key'];
    },
    text: function() {
        return Template.instance().data.value;
    },
    id: function() {
        return Math.random().toString(36).substring(7);
    }
});

AutoForm.addInputType('tinyMCE', {
    template: "autoformTinyMCE",
    valueOut: function() {
        return this.val();
    }
});
