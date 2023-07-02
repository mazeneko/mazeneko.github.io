import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiscordIconComponent } from './icon/discord-icon/discord-icon.component';
import { GithubIconComponent } from './icon/github-icon/github-icon.component';
import { MisskeyIconComponent } from './icon/misskey-icon/misskey-icon.component';
import { RecycleIconComponent } from './icon/recycle-icon/recycle-icon.component';
import { TwitterIconComponent } from './icon/twitter-icon/twitter-icon.component';
import { LinksComponent } from './links/links.component';
import { TitleComponent } from './title/title.component';
import { LinkButtonComponent } from './links/link-button/link-button.component';
import { NoLinkButtonComponent } from './links/no-link-button/no-link-button.component';
import { ProfileComponent } from './profile/profile.component';
import { SteamIconComponent } from './icon/steam-icon/steam-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterIconComponent,
    GithubIconComponent,
    DiscordIconComponent,
    MisskeyIconComponent,
    RecycleIconComponent,
    TitleComponent,
    LinksComponent,
    LinkButtonComponent,
    NoLinkButtonComponent,
    ProfileComponent,
    SteamIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
