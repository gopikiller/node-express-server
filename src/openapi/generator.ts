import { promises } from 'fs';
import openapiTS, { SchemaObject } from 'openapi-typescript';

import { spec } from '.';

async function generate() {
    const output = await openapiTS(spec as any, {
        formatter(node: SchemaObject) {
            if (node.format === 'date-time') {
                return 'Date'; // return the TypeScript “Date” type, as a string
            }
        },
    });

    await promises.writeFile('./src/interfaces/schema.interface.ts', output);
}

generate();
