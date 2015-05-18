module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/*.js',
                dest: 'js/build/global.min.js'
            }
        },

        sass: {
            options: {
                outputStyle: 'compressed',
            },
            dist: {
                files: {
                    'css/main-unprefixed.css': 'sass/main.scss'
                }
            }
        },

        autoprefixer: {
            global: {
                src: 'css/main-unprefixed.css',
                dest: 'css/main.css'
            }
        },

        shell: {
            jekyllServe: {
                command: "jekyll serve  --no-watch --safe"
            },
            jekyllBuild: {
                command: "jekyll build"
            }
        },

        watch: {
            options: {
                livereload: true
            },
            site: {
                files: ["*.html", "*.md", "_layouts/*.html", "_includes/*.html"],
                tasks: ["shell:jekyllBuild"]
            },
            js: {
                files: ["js/*.js"],
                tasks: ["uglify", "shell:jekyllBuild"]
            },
            css: {
                files: ["sass/*.scss", "sass/partials/*.scss", "sass/modules/*.scss"],
                tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
            }
        },




    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).

    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask("default", ["sass", "autoprefixer", "shell:jekyllBuild", "watch"]);

};
