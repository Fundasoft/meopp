import { spawn } from 'child_process';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';
import fs from 'fs';
import {platform} from 'os';

let production = !process.env.ROLLUP_WATCH;

let view = (process.env.VIEW || 'index') + '.js';

const PATH_SVELTE = './views/svelte';
const PATH_PUBLIC = './views/public';

const CEN =  fs.readFileSync(PATH_PUBLIC+'/libs/cen/cen.min.js');
 
function serve() {
	
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	if (server) server.process.kill(0);

	return {
		writeBundle() {
		
			if (server) return;
			
			server = spawn('npm', ['run', platform()], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: PATH_SVELTE+'/'+view,
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'app',
		file: PATH_PUBLIC+'/js/'+view
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		//css({ output: 'bundle.css' }),
		css({output:(styles, styleNodes) => {
			// if (!exite carpeta ./public/css/) crear(./public/css/)
			if (!fs.existsSync(PATH_PUBLIC+'/css/')){
					fs.mkdirSync(PATH_PUBLIC+'/css/');
			}
      fs.writeFileSync(PATH_PUBLIC+'/css/'+view.replace('.js','.css'), styles); 
    }}),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		cen(),
		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `dev` directory and refresh the
		// browser on changes when not in production
		!production && livereload(PATH_PUBLIC),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};


// rollup-plugin-zen.js
function cen() {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    resolveId ( source ) {
      if (source === 'virtual-module') {
        // this signals that rollup should not ask other plugins or check
        // the file system to find this id
        return source;
      }
      return null; // other ids should be handled as usually
    },
    load ( id ) {
    
    	if (id === 'virtual-module') {
        // the source code for "virtual-module"
        return 'export default "This is virtual!"';
      }
      return null; // other ids should be handled as usually
    },
    /*transform(code, id) {
    	if(/\.js/.test(id))console.log(5555555555,id,code);  
    },*/
    async renderChunk(code, chunk, outputOptions) {
    	const constantes = fs.existsSync(PATH_PUBLIC+'/libs/cen/constantes.js') 
    		? fs.readFileSync(PATH_PUBLIC+'/libs/cen/constantes.js') 
    		: '';
			return code = `${constantes+CEN};xen(()=>{${code};xen();})`, production ? `(()=>{${code}})(this)` : code;
    }
  };
}
