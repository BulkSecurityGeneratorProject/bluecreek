import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BluecreekBlogModule } from './blog/blog.module';
import { BluecreekEntryModule } from './entry/entry.module';
import { BluecreekTagModule } from './tag/tag.module';
import { BluecreekContactModule } from './contact/contact.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BluecreekBlogModule,
        BluecreekEntryModule,
        BluecreekTagModule,
        BluecreekContactModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BluecreekEntityModule {}
