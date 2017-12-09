module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            options: {force: true},
            lib: ['demo/client/lib'],
            jsTemplate: ['src/js/*.template.js'],
            scripts: ['dist/js'],
            scss: ['src/css/*', 'dist/css']
        },
        eslint: {
            options: {
                configFile: "conf/eslint.json",
                fix: true
            },
            src: ['src/js/*.js']
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/scss',
                    specify: 'src/scss/image_slider.scss',
                    cssDir: 'src/css',
                    assetCacheBuster: false
                }

            }
        },
        ngtemplates: {
            image_slider: {
                options: {
                    module: 'templateCacher',
                    standalone: true
                },
                cwd: 'src',
                src: 'views/**.html',
                dest: 'src/js/image_slider.templates.js'

            }
        },
        concat: {
            options: {
                force: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                src: ['src/js/image_slider.js', 'src/js/image_slider.templates.js', 'src/js/image_slider.directive.js', 'src/js/imaeg_slider.controller.*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                beautify: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            jsminify: {
                src: ['dist/js/<%= pkg.name %>.js'],
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            css: {
                src: 'src/css/*.css',
                dest: 'dist/css/<%= pkg.name %>.css'
            },
            lib: {
                expand: true,
                cwd: 'dist/',
                src: ['**'],
                dest: 'demo/lib/',
            },
        },


        cssmin: {
            cssminify: {
                src: 'dist/css/<%= pkg.name %>.css',
                dest: 'dist/css/<%= pkg.name %>.min.css'
            }
        },
        run_node: {
            start: {
                options: {
                    cwd: 'demo',
                    detached: false
                },
                files: {src: ['demo/server/server.js']},
            }
        },
        watch: {
            dist: {
                files: ['Gruntfile.js'],
                tasks: ['clean', 'eslint', 'compass', 'ngtemplates', 'concat', 'uglify', 'copy:css', 'cssmin', 'copy:lib']
            },
            scripts: {
                files: ['src/js/*.js', '!src/js/image_slider.template.js', 'src/views/*.html'],
                tasks: ['clean:scripts','clean:jsTemplate','clean:lib', 'eslint', 'ngtemplates', 'concat', 'uglify', 'copy:lib']
            },
            scss: {
                files: ['src/scss/*.scss'],
                tasks: ['clean:scss', 'clean:lib','compass', 'copy:css', 'cssmin','copy:lib'],
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-run-node');


    grunt.registerTask('default', [
        'clean',
        'eslint',
        'compass',
        'ngtemplates',
        'concat',
        'uglify',
        'copy:css',
        'cssmin',
        'copy:lib',
        'watch'
    ]);
};