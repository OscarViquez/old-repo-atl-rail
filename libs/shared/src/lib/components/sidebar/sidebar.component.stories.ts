import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import { SiderbarMocks } from './mocks/sidebar.mocks';

export default {
  title: 'shared/Sidebar',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SidebarComponent>;


const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
    component: SidebarComponent,
    props: args
})

export const Default = () => ({
    template: 'Displays Text',
});

export const sideBarLight = Template.bind({})
sideBarLight.args = {
    content: SiderbarMocks
}

export const sideBarDark = Template.bind({})
sideBarDark.args = {
    content: SiderbarMocks
}

