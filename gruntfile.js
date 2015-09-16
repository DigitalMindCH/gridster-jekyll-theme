module.exports = function (grunt) {

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
            square: {
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
            thumbs: {
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
            global: {
                src: ['js/*.js', '!js/infinite/*.js'],
                dest: 'js/build/global.min.js',
            },
            infinite: {
                src: 'js/infinite/*.js',
                dest: 'js/build/infinite.min.js'
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
                    'css/classic.css': 'sass/classic.scss',
                    // you may want to remove these for your site
                    'css/main_brown.css': 'sass/main_brown.scss',
                    'css/main_green.css': 'sass/main_green.scss',
                    'css/main_teal.css': 'sass/main_teal.scss'
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

        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        src: ['css/**'],
                        dest: 'jekyllbuild/'
                    },
                ]
            },
            js: {
                files: [
                    {
                        expand: true,
                        src: ['js/build/**'],
                        dest: 'jekyllbuild/'
                    },
                ]
            }
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
                files: ["{,*/}{,*/}{,*/}*.html", "{,*/}{,*/}{,*/}*.md", "{,*/}*.yml", "!jekyllbuild/{,*/}{,*/}*.*", "!node_modules/{,*/}*.*"],
                tasks: ["shell:jekyllBuild", "copy"]
            },
            js: {
                files: ['js/{,*/}{,*/}*.js'],
                tasks: ["uglify", "copy:js"]
            },
            css: {
                files: ["sass/{,*/}{,*/}{,*/}*.scss"],
                tasks: ["sass", "autoprefixer", "copy:css"]
            },
            images: {
                files: ["img/{,*/}{,*/}*.{png,jpg}"],
                tasks: ["newer:imagemin", "responsive_images", "shell:jekyllBuild", "copy"]
            }
        },

        buildcontrol: {
            options: {
                dir: 'jekyllbuild',
                commit: true,
                push: true,
                message: 'Built jekyllbuild from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:DigitalMindCH/gridster-jekyll-theme.git', // change that
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
    grunt.registerTask("default", ["newer:imagemin", "responsive_images", "uglify", "sass", "autoprefixer", "shell:jekyllBuild", "copy", "open", "watch"]);
    grunt.registerTask("build", ["imagemin", "responsive_images", "uglify", "sass", "autoprefixer", "shell:jekyllBuild", "copy"]);
    grunt.registerTask("deploy", ["buildcontrol:pages"]);
};