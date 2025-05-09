import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

// Outline button
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

// Ghost button
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

// Small button
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

// Large button
export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
}; 