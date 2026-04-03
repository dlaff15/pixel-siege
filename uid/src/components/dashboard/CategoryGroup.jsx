import { getCategoryById } from '../../data/categories.js'
import MilestoneCard from './MilestoneCard.jsx'

export default function CategoryGroup({ categoryId, milestones }) {
  const category = getCategoryById(categoryId)
  if (!category || milestones.length === 0) return null

  return (
    <div>
      {/* Category header */}
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
          style={{ backgroundColor: category.color + '18' }}
        >
          {category.icon}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">{category.label}</p>
        </div>
        <div className="ml-auto">
          <span className="text-xs text-gray-400">{milestones.length} milestone{milestones.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-2 pl-9">
        {milestones
          .sort((a, b) => a.order - b.order)
          .map(m => (
            <MilestoneCard key={m.id} milestone={m} />
          ))
        }
      </div>
    </div>
  )
}
