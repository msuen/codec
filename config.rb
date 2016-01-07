# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/sass"
images_dir = "assets/img"
javascripts_dir = "assets/js"
fonts_dir = "assets/fonts"
http_stylesheets_path = http_path + "codec/" + css_dir
# http_images_path = http_path + "codec/" + images_dir
http_javascripts_path = http_path + "codec/" + javascripts_dir
http_fonts_path = http_path + "codec/" + fonts_dir

output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass assets/sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
