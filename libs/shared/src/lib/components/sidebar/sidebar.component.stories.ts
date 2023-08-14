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

export const sideBarPrimary = Template.bind({})
sideBarPrimary.args = {
    content: SiderbarMocks
}

