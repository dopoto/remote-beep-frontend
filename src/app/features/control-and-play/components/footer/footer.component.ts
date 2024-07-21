import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var require: any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    version = '';
    clientBuildNumber = '';
    serverBuildNumber = '';

    ngOnInit(): void {
        this.version = require( '../../../../../../package.json').version;
        this.clientBuildNumber = environment.clientBuildNumber;
        this.serverBuildNumber = environment.serverBuildNumber;
    }
}
