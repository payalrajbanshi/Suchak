import { useEffect, useState } from "react";

interface Habit {
  id: number;
  name: string;
  done: boolean;
}

const HabitPlanner = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState("");

  const key = "habit-planner";

  // Load
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setHabits(JSON.parse(saved));
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (!newHabit.trim()) return;

    setHabits([
      ...habits,
      {
        id: Date.now(),
        name: newHabit,
        done: false,
      },
    ]);

    setNewHabit("");
  };

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, done: !h.done } : h
      )
    );
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-2xl font-bold">🔥 Habit Planner</h1>
      <p className="text-gray-500 mb-4">
        Build strong daily habits.
      </p>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-3 border rounded-xl"
          placeholder="Add new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />

        <button
          onClick={addHabit}
          className="bg-green-500 text-white px-4 rounded-xl"
        >
          Add
        </button>
      </div>

      {/* List */}
      <div className="space-y-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="flex items-center justify-between p-3 bg-white rounded-xl shadow"
          >
            <span
              className={
                habit.done ? "line-through text-gray-400" : ""
              }
            >
              {habit.name}
            </span>

            <button
              onClick={() => toggleHabit(habit.id)}
              className={`px-3 py-1 rounded-lg ${
                habit.done
                  ? "bg-gray-300"
                  : "bg-green-400 text-white"
              }`}
            >
              {habit.done ? "Undo" : "Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitPlanner;