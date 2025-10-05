/** @format */

import Header from "@/components/common/header";
import OrderManagement from "@/components/orders/orderManag";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header with Search */}
        <Header title="Order Management" />

        {/* Order Management with Tabs */}
        <OrderManagement />
      </div>
    </div>
  );
}
