module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		requirejs: {
		  js: {
		      options: {
		          uglify2: {
		              mangle: false
		          },
		          baseUrl: "app/scripts",
		          mainConfigFile: "app/scripts/main.js",
		          name: 'main',
		          generateSourceMaps: true,
		          preserveLicenseComments: false,
		          useSourceUrl: true,
		          out: "dist/<%= pkg.name %>.min.js",
		          optimize: 'uglify2'
		      }
		  }
		},
		jshint: {
			files: [
				'Gruntfile.js', 
				'app/scripts/controllers/**/*.js', 
				'app/scripts/services/**/*.js', 
				'app/scripts/factory/**/*.js',
				'app/scripts/directives/**/*.js',
				'app/scripts/app.js',
				'app/scripts/main.js'
			],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		concat_css: {
			all: {
				src: ["app/css/**/*.css"],
				dest: "app/css/<%= pkg.name %>.css"
			},
		},
		copy: {
			main: {
				src: 'app/css/<%= pkg.name %>.css',
				dest: 'dist/<%= pkg.name %>.css',
			},
		},
		cssmin: {
			target: {
				files: [
					{
						expand: true,
						cwd: 'dist',
						src: ['<%= pkg.name %>.css'],
						dest: 'dist',
						ext: '.min.css'
					}
				]
			}
		},
		karma: {
			unit: {
				configFile: 'app/test/karma.conf.js',
				port: 9999,
				singleRun: false,
				browsers: ['PhantomJS'],
				autoWatch: true
			}
		},
		clean: ['dist/<%= pkg.name %>.css', 'app/css/<%= pkg.name %>.css'],
		watch: {
			html: {
				files: ['app/templates/**/*'],
				tasks: ['requirejs']
			},
			js: {
				files: ['app/scripts/**/*'],
				tasks: ['requirejs']
			},
			css: {
				files: ['app/css/**/*'],
				tasks: ['concat_css', 'copy', 'cssmin', 'clean']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	
	grunt.registerTask('default', ['jshint', 'requirejs', 'concat_css', 'copy', 'cssmin', 'clean']);

	grunt.registerTask('start', function () {
		grunt.util.spawn({
			cmd: 'node',
			args: ['server.js']
		});
		grunt.task.run(['requirejs', 'concat_css', 'copy', 'cssmin', 'clean', 'watch']);
	});

};