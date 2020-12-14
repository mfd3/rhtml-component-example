import { Module } from "@rhtml/di";
import { CounterModule } from "./counter/counter.module";

@Module({
  providers: [CounterModule],
})
export class SharedModule {}
