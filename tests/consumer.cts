import * as api from '@lp-labs/finite-array-sum';
import { sumFinite } from '@lp-labs/finite-array-sum';
console.log(sumFinite([1.5, 2, -0.5]));
// @ts-expect-error invalid argument must be rejected by declarations
api.sumFinite('values');
