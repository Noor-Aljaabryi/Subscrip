import React from 'react';

export default function MealSection({ title, meals }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4 border-b pb-3">
        <h3 className="font-bold text-gray-800 text-base">{title}</h3>
        <button className="text-green-600 hover:text-green-700 text-xs font-semibold">+ إضافة طعام</button>
      </div>
      <div className="space-y-3">
        {meals.map((meal) => (
          <div key={meal.id} className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col gap-1">
            <span className="font-medium text-gray-800 text-sm">{meal.name}</span>
            <span className="text-xs text-gray-500">{meal.calories}</span>
          </div>
        ))}
      </div>
    </div>
  );
}