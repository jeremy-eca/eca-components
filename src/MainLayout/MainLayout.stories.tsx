import React from 'react';
import { MainLayout } from './MainLayout';

export default {
  component: MainLayout,
  title: 'Components/MainLayout',
  parameters: {
    componentSubtitle: 'Main Layout with Navigation',
    layout: 'fullscreen'
  }
};

export const Default = {
  render: () => (
    <MainLayout>
      <div className="rounded-lg border border-neutral-detail-palest bg-neutral-layer-2 p-6">
        <h1 className="heading-lg-lighter mb-4">Content Area</h1>
        <p className="paragraph-md-lighter">This is where your main content will be displayed.</p>
      </div>
    </MainLayout>
  )
};