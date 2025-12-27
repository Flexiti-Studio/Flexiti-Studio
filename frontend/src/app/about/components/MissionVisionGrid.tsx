import React from 'react'
import ValueCard from './ValueCard'
import { missionVisionData } from './about-data'


const MissionVisionGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {missionVisionData.map((item) => (
                <ValueCard
                    key={item.id}
                    value={item}
                />
            ))}
        </div>
    )
}

export default MissionVisionGrid