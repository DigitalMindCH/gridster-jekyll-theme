module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '',
                        src: ['img/*.png', 'img/**/*.png', 'img/**/**/*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: 'media/compressed/',
                        flatten: true,
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '',
                        src: ['img/*.jpg', 'img/**/*.jpg', 'img/**/**/*.jpg', 'img/*.jpeg', 'img/**/*.jpeg', 'img/**/**/*.jpeg'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: 'media/compressed/',
                        flatten: true,
                        ext: '.jpg'
                    }
                ]
            }
        },

        responsive_images: {
            square:{
                options: {
                    sizes: [{
                        width: 450,
                        height: 450,
                        aspectRatio: false,
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'media/compressed/*.{jpg,gif,png}',
                        'media/compressed/!crops/*.{jpg,gif,png}',
                    ],
                    cwd: '',
                    dest: 'media/compressed/crops/450x450/'
                }]
            },
            thumbs:{
                options: {
                    sizes: [{
                        width: 450,
                        height: 253,
                        aspectRatio: false,
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'media/compressed/*.{jpg,gif,png}',
                        'media/compressed/!crops/*.{jpg,gif,png}',
                    ],
                    cwd: '',
                    dest: 'media/compressed/crops/450x253/'
                }]
            }
        },

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
                    'css/main.css': 'sass/main.scss',
                    'css/grid.css': 'sass/grid.scss',
                    'css/classic.css': 'sass/classic.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['> 1%']
            },
            no_dest: {
                src: 'css/*.css' // globbing is also possible here
            },
        },

        open: {
            build: {
                path: 'http://localhost:4000',
            }
        },

        watch: {
            options: {
                livereload: true
            },
            site: {
                files: ["*.html", "**/*.html", "*.md", "**/*.md", "**/*.yml", "*.yml", "!_site/*.*", "!_site/**/*.*", "!documentation/*.*", "!documentation/**/*.*"],
                tasks: ["shell:jekyllBuild"]
            },
            js: {
                files: ["js/*.js"],
                tasks: ["uglify", "shell:jekyllBuild"]
            },
            css: {
                files: ["sass/*.scss", "sass/partials/*.scss", "sass/partials/components/*.scss", "sass/partials/layout/*.scss", "sass/modules/*.scss"],
                tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
            },
            images: {
                files: ["img/{,*/}{,*/}*.{png,jpg}"],
                tasks: ["newer:imagemin", "responsive_images", "shell:jekyllBuild"]
            }

        },

        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built _site from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'https://github.com/user/reponame.git', // change that
                    branch: 'gh-pages' // adjust here
                }
            }
        },

        shell: {
            jekyllServe: {
                command: "jekyll serve  --no-watch"
            },
            jekyllBuild: {
                command: "jekyll build"
            }
        }
    });


    require('load-grunt-tasks')(grunt);

    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask("default", ["newer:imagemin", "responsive_images", "sass", "autoprefixer", "shell:jekyllBuild", "open", "watch"]);
    grunt.registerTask("deploy", ["buildcontrol:pages"]);
};
