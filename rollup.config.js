import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/test.ts',
        output: [
            {
                file: `dist/test.module.js`,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            typescript(),
        ],
    },
];
