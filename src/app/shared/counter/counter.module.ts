import { Module } from "@rhtml/di";
import { CounterComponent } from "./counter.component";
import { CounterService } from "./counter.service";

@Module({
  components: [CounterComponent],
  providers: [CounterService],
})
export class CounterModule {}
