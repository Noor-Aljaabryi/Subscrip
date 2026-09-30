import React from 'react';

export default function DailyGoalsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-gray-100">
      <h2 className="text-md font-bold text-gray-800 mb-4">الأهداف اليومية للماكروز والسعرات</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">السعرات الحرارية المستهدفة</p>
          <p className="text-xl font-bold text-green-600">2850</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">كاربوهايدرات</p>
          <p className="text-xl font-bold text-gray-800">320 ج</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">بروتين</p>
          <p className="text-xl font-bold text-gray-800">180 ج</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-xs text-gray-500 mb-1">دهون</p>
          <p className="text-xl font-bold text-gray-800">75 ج</p>
        </div>
      </div>
    </div>
  );
}