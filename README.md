This is to repo an issue with rollup and typescript

If I type

    rm -rf dist && ./node_modules/.bin/rollup -c

Then look in `dist` I'll see these files

    > ls dist
    foo-impl.d.ts      test.d.ts          test.module.js     test.module.js.map

But if I instead run

    rm -rf dist && ./node_modiles/.bin/tsc

I'll see these files

    Foo.d.ts      Foo.js        foo-impl.d.ts foo-impl.js   test.d.ts     test.js

In particular, when I use rollup `Foo.d.ts` is missing which `foo-impl.d.ts` references
meaning the rollup version is not usable as it gets errors from missing tupes.
