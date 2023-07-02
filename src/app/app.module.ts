import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwitterIconComponent } from './icon/twitter-icon/twitter-icon.component';
import { GithubIconComponent } from './icon/github-icon/github-icon.component';
import { DiscordIconComponent } from './icon/discord-icon/discord-icon.component';
import { MisskeyIconComponent } from './icon/misskey-icon/misskey-icon.component';
import { RecycleIconComponent } from './icon/recycle-icon/recycle-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterIconComponent,
    GithubIconComponent,
    DiscordIconComponent,
    MisskeyIconComponent,
    RecycleIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
