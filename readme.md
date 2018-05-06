[07052018]: this is the initial commit for following ionic 2 tutorial

things that have been done.
1. created the project by using: ionic start elite-schedule-app sidemenu. This generated list and home pages.
2. did some modifications, created pages using commands
   - ionic generate page Tournaments
   - ionic generate page Teams
   - ionic generate page TeamDetail
   - ionic generate page Game
3. created file app/pages/pages.ts that exports the created pages, the effect is easy import on app/app.component.ts
   by doing "import {MyTeamsPage} from '../pages/pages';" Take note of the commented out files.
4. app/app.html changed the <ion-title> attribute, this made the scaffolding or app skeleton ready.