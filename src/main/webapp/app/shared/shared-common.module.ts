import { NgModule } from '@angular/core';

import { JasperTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JasperTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JasperTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JasperTestSharedCommonModule {}
