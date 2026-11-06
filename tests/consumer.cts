import * as api from '@lp-labs/utc-date-comparator';
import { compareIsoDates } from '@lp-labs/utc-date-comparator';
console.log(compareIsoDates('2024-01-01', '2024-12-31'));
// @ts-expect-error invalid argument must be rejected by declarations
api.compareIsoDates(20240101, '2024-02-01');
