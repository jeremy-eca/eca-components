import React from 'react';
import { MainLayout } from './MainLayout';
import { Button } from './Button/Button';

function CaseDetails() {
  return (
    <div>
      <div className='mb-6 flex items-center justify-between'>
        <Button variant='outline' name='back'>
          <i className='fi fi-rr-arrow-left me-2' /> Cases
        </Button>
      </div>

      <div className='rounded-lg border border-neutral-detail-palest bg-neutral-layer-2 p-6'>
        <div className='mb-8 flex items-center gap-4'>
          <img
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
            alt='Profile'
            className='size-24 rounded-full object-cover'
          />
          <div>
            <h1 className='heading-lg-lighter mb-2'>Anne Ferguson</h1>
            <p className='paragraph-md-lighter text-neutral-detail-bold'>#1245</p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <Button variant='outline' name='overview' className='flex items-center justify-start gap-3 p-4'>
            <i className='fi fi-rr-eye text-lg' />
            Overview
          </Button>
          
          <Button variant='outline' name='employee' className='flex items-center justify-start gap-3 p-4'>
            <i className='fi fi-rr-user text-lg' />
            Employee profile
          </Button>
          
          <Button variant='outline' name='settings' className='flex items-center justify-start gap-3 p-4'>
            <i className='fi fi-rr-settings text-lg' />
            Case settings
          </Button>
          
          <Button variant='outline' name='documents' className='flex items-center justify-start gap-3 p-4'>
            <i className='fi fi-rr-document text-lg' />
            Documents
          </Button>
          
          <Button variant='outline' name='calculations' className='flex items-center justify-start gap-3 p-4'>
            <i className='fi fi-rr-calculator text-lg' />
            Calculations
          </Button>
          
          <Button variant='outline' name='communications' className='flex items-center justify-start gap-3 p-4'>
            <i className='fi fi-rr-messages text-lg' />
            Communications
          </Button>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <MainLayout>
      <CaseDetails />
    </MainLayout>
  );
}