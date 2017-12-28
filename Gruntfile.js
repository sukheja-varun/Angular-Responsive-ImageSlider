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
            src: ['src/js/**/*.js']
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
                src: 'view/*.html',
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
                src: ['src/js/image_slider.js','src/js/image_slider.templates.js', 'src/js/image_slider.directive.js', 'src/js/service/*.js',  'src/js/controller/*.js'],
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
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['clean', 'eslint', 'compass', 'ngtemplates', 'concat', 'uglify', 'copy:css', 'cssmin', 'copy:lib', 'readme_generator']
            },
            scripts: {
                files: ['src/js/*.js', '!src/js/image_slider.template.js', 'src/view/*.html'],
                tasks: ['clean:scripts', 'clean:jsTemplate', 'clean:lib', 'eslint', 'ngtemplates', 'concat', 'uglify', 'copy:lib']
            },
            scss: {
                files: ['src/scss/*.scss'],
                tasks: ['clean:scss', 'clean:lib', 'compass', 'copy:css', 'cssmin', 'copy:lib'],
            },
            readme: {
                files: ['readme/**/*.md'],
                tasks: ['readme_generator:template_generator', 'readme_generator:my_generator'],
            }
        },


        readme_generator: {
            template_generator: {
                options: {
                    readme_folder: "readme/templates",
                    output: "readme/template.md",
                    table_of_contents: true,
                    toc_extra_links: [],
                    generate_changelog: false,
                    changelog_folder: null,
                    changelog_version_prefix: null,
                    changelog_insert_before: null,
                    banner: null,
                    has_travis: false,
                    github_username: null,
                    travis_branch: null,
                    generate_footer: false,
                    generate_title: false,
                    package_title: null,
                    package_name: null,
                    package_desc: null,
                    informative: false,
                    h1: "##",
                    h2: "###",
                    back_to_top_custom: null
                },
                order: {
                    // Title of the piece and the File name goes here
                    // "Filename" : "Title"
                    "template1.md": "Template1",
                    "template2.md": "Template2",
                }
            },
            my_generator: {
                options: {
                    readme_folder: "readme",
                    output: "README.md",
                    table_of_contents: true,
                    toc_extra_links: [],
                    generate_changelog: false,
                    changelog_folder: "changelogs",
                    changelog_version_prefix: null,
                    changelog_insert_before: null,
                    banner: null,
                    has_travis: true,
                    github_username: "sukheja-varun",
                    travis_branch: "develop",
                    generate_footer: false,
                    generate_title: true,
                    package_title: null,
                    package_name: null,
                    package_desc: null,
                    informative: true,
                    h1: "#",
                    h2: "##",
                    back_to_top_custom: null
                },
                order: {
                    // Title of the piece and the File name goes here
                    // "Filename" : "Title"
                    "installation.md": "Installation",
                    "usage.md": "Usage",
                    "template.md": "Templates",
                    "example.md": "Examples",
                    "legal.md": "License"
                }
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
    grunt.loadNpmTasks('grunt-readme-generator');
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