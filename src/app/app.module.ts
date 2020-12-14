import { Module } from "@rhtml/di";
import { SharedModule } from "@shared/shared.module";
import { AppComponent } from './app.component';

@Module({
  imports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
