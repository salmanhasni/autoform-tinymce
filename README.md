#Autoform-TinyMCE#

###Description###
The following package creates a new input type for [Aldeed's meteor-autoform](https://github.com/aldeed/meteor-autoform) package using the [TinyMCE](https://www.tinymce.com/) WYSIWYG text editor.
![autoform-tinymce editor](http://prntscr.com/ae0ovs)
###Usage###
'''javascript
BlogPosts = new SimpleSchema({
    title: {
        type: String,
        max: 100
    },
    content: {
        type: String,
        autoform: {
            type: 'tinyMCE'
        }
    },
'''
####Autoform Inline####

Maintained by [BitTiger](http://bittiger.io)
