import React, { useState } from 'react';
import TaskInputModal from './TaskInputModal';
import './ScheduleGrid.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const hours = Array.from({ length: 15 }, (_, index) => 8 + index); // 8 AM to 10 PM

const ScheduleGrid = () => {
  const [tasks, setTasks] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (day, hour) => {
    setSelectedSlot({ day, hour });
  };

  const addTask = (task) => {
    setTasks((prev) => ({
      ...prev,
      [`${selectedSlot.day}-${selectedSlot.hour}`]: task,
    }));
    setSelectedSlot(null);
  };

  const formatHour = (hour) => {
    const isPM = hour >= 12;
    const formattedHour = hour % 12 || 12;
    return `${formattedHour} ${isPM ? 'PM' : 'AM'}`;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        parseTasksFromFile(content);
      };
      reader.readAsText(file);
    }
  };

  const parseTasksFromFile = (content) => {
    const newTasks = {};
    const lines = content.split('\n');
    lines.forEach((line) => {
      const [day, hour, task] = line.split(',').map((item) => item.trim());
      if (days.includes(day) && !isNaN(hour) && task) {
        newTasks[`${day}-${hour}`] = task;
      }
    });
    setTasks((prev) => ({ ...prev, ...newTasks }));
  };

  return (
    <div className="schedule-grid">
      <div>
        <label htmlFor="file-upload">Upload Tasks (CSV): </label>
        <input
          type="file"
          id="file-upload"
          accept=".csv"
          onChange={handleFileUpload}
        />
      </div>
      {days.map((day) => (
        <div className="day-column" key={day}>
          <h3>{day}</h3>
          {hours.map((hour) => (
            <div
              className="hour-slot"
              key={`${day}-${hour}`}
              onClick={() => handleSlotClick(day, hour)}
            >
              {tasks[`${day}-${hour}`] || formatHour(hour)}
            </div>
          ))}
        </div>
      ))}
      {selectedSlot && (
        <TaskInputModal
          slot={selectedSlot}
          onClose={() => setSelectedSlot(null)}
          onSave={addTask}
        />
      )}
    </div>
  );
};

export default ScheduleGrid;
