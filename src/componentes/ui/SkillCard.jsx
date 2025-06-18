import React from 'react';

const SkillCard = ({ skill }) => {

  const getLevelColor = (level) => {
    switch (level) {
      case 'Avanzado':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermedio':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Principiante':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  }

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Avanzado': return 'w-full';
      case 'Intermedio': return 'w-3/4';
      case 'Principiante': return 'w-1/2';
      default: return 'w-1/4';
    }
  }

  
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover: transform hover:scale-105 ">
      <div className="flex flex-col gap-3 mb-3">
        <span className="text-2xl text-white">{React.createElement(skill.icon)}</span>
        <h4 className="text-white font-medium text-lg">{skill.name}</h4>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className={`px-2 py-1 rounded-b-full text-xs font-medium border ${getLevelColor(skill.level)}`}></span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2 ">
        <div className={`h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 ${getLevelWidth(skill.level)}`}></div>
      </div>
    </div>
  );
};

export default SkillCard;