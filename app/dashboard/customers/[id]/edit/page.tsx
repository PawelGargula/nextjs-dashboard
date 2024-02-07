import { fetchCustomerById } from '@/app/lib/data';
import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Customer',
}
 
export default async function Page({ params }: {params: { id: string }}) {
  const id = params.id;  
  const customer = await fetchCustomerById(id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} />
    </main>
  );
}