import { Injectable, set } from '@rhtml/di';

@Injectable()
export class CounterService {
  count = 1000;
}

set(CounterService);