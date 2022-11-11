import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

const config = {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [typescript({module: 'esnext'}), terser()],
}

export default config
