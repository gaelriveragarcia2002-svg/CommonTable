import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { SideBarComponent } from './sidebar.component';

@Component({
  standalone: true,
  selector: 'lib-layout',
  imports: [RouterOutlet, NavbarComponent, SideBarComponent],
  styleUrls: ['./layout.css'],
  template: ` <section id="layout-container">
    <div
      id="layout-side"
      class="p-4 bg-primary-100 border-l-4 border-primary-800 dark:bg-primary-900"
      style="box-shadow: 4px 4px 0px #1e3a5f, 8px 8px 0px #0f2040, 6px 0px 10px rgba(0,0,0,0.4);"
    >
      <lib-sidebar />
    </div>
    <div
      id="layout-header"
      class="glassmorphism-container bg-primary-500/25 shadow-lg"
    >
      <lib-navbar />
    </div>
    <div id="layout-body" class="p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      architecto veritatis aut voluptatem tempore aspernatur quos commodi at ex
      minus odit perspiciatis nam? Commodi nisi nesciunt sapiente, iste
      similique porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident, architecto veritatis aut voluptatem tempore aspernatur quos
      commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt sapiente,
      iste similique porro. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Provident, architecto veritatis aut voluptatem tempore aspernatur
      quos commodi at ex minus odit perspiciatis nam? Commodi nisi nesciunt
      sapiente, iste similique porro. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Provident, architecto veritatis aut voluptatem tempore
      aspernatur quos commodi at ex minus odit perspiciatis nam? Commodi nisi
      nesciunt sapiente, iste similique porro. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Provident, architecto veritatis aut
      voluptatem tempore aspernatur quos commodi at ex minus odit perspiciatis
      nam? Commodi nisi nesciunt sapiente, iste similique porro. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Provident, architecto
      veritatis aut voluptatem tempore aspernatur quos commodi at ex minus odit
      perspiciatis nam? Commodi nisi nesciunt sapiente, iste similique porro.
      <router-outlet />
    </div>
    <div id="layout-footer" class="p-4">Mundo</div>
  </section>`,
})
export class LayoutComponent {}
