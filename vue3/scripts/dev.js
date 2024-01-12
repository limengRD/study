// 进行开发环境搭建
import minimist from 'minimist';
import { fileURLToPath } from 'url'; // 文件路径转换
import { dirname,resolve } from 'path';
import esbuild from 'esbuild';


const args = minimist(process.argv.slice(2));
const format = args.f || 'iife';
const target = args._[0] || 'reactivity';
const __dirname = dirname(fileURLToPath(import.meta.url));
esbuild.context({
    entryPoints:[resolve(__dirname,`../packages/${target}/src/index.ts`)],
    outfile: resolve(__dirname,`../packages/${target}/dist/${target}.js`),
    bundle: true,
    sourcemap: true,
    format,
    platform:'browser'
}).then(ctx => ctx.watch())