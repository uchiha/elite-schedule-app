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

[08052018]
what was done:
1. deleted the pages and redid with a different command:
	- ionic generate page Tournaments --no-module
   this in turn created needed files without the module.ts file.
2. the issue Error: "Uncaught (in promise): Error: No component factory found for TournamentsPage. Did you add it to @NgModule.entryComponents? Error: No component factory found for TournamentsPage. Did you add it to @NgModule.entryComponents?"
    was solved by modification in src/app/app.module.ts and adding "TournamentsPage" in the declarations and entryComponents array of the @NgModule decorator.
3. ran the command 'ionic run android" so that the app can be served in my phone. This did some modification in the config.xml and other .json files.
 