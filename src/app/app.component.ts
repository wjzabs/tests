import { AfterViewInit, Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IgxIconModule, IgxNavbarModule, IgxButtonModule } from 'igniteui-angular';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    standalone: true,
    imports: [RouterOutlet,
      IgxIconModule,
      IgxNavbarModule,
      IgxButtonModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit {

    public constructor(
      private _detector: ChangeDetectorRef,
      private router: Router
    )
    {
      
    }

    public ngAfterViewInit(): void
    {

    }

    action(route: string) {
      this.router.navigate([`/${route}`]);
    }
}
