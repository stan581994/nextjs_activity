import Form from "@/app/ui/invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { fetchInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  console.log("Params:", params);

  const id = params.id;
  if (!id) {
    return <p>Error: Invoice ID is missing.</p>;
  }
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  try {
    if (!invoice || !customers) {
      return <p>Error: Failed to load invoice or customers.</p>;
    }

    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Invoices", href: "/dashboard/invoices" },
            {
              label: "Edit Invoice",
              href: `/dashboard/invoices/${id}/edit`,
              active: true,
            },
          ]}
        />
        <Form invoice={invoice} customers={customers} />
      </main>
    );
  } catch (error) {
    console.error("Error loading data:", error);
    return <p>Error: Failed to load data.</p>;
  }
}
