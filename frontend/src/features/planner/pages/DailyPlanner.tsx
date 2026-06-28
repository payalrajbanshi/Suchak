import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const moods = ["😄", "😊", "😐", "😔", "😴"];

const getTodayKey = () => {
  const date = new Date().toISOString().split("T")[0];
  return `daily-planner-${date}`;
};

const DailyPlanner = () => {
  const navigate = useNavigate();

  const [selectedMood, setSelectedMood] = useState("😊");
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notes, setNotes] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [reflection, setReflection] = useState("");
  const [theme, setTheme] = useState("pastel");

  // ---------- LOAD ----------
  useEffect(() => {
    const key = getTodayKey();
    const saved = localStorage.getItem(key);

    if (saved) {
      const data = JSON.parse(saved);
      setSelectedMood(data.selectedMood || "😊");
      setTasks(data.tasks || []);
      setNotes(data.notes || "");
      setGratitude(data.gratitude || "");
      setReflection(data.reflection || "");
    }
  }, []);

  // ---------- SAVE ----------
  useEffect(() => {
    const key = getTodayKey();

    const data = {
      date: new Date().toISOString(),
      selectedMood,
      tasks,
      notes,
      gratitude,
      reflection,
    };

    localStorage.setItem(key, JSON.stringify(data));
  }, [selectedMood, tasks, notes, gratitude, reflection]);

  // ---------- PROGRESS ----------
  const completedTasks = tasks.filter((t) => t.completed).length;

  const progress = useMemo(() => {
    if (!tasks.length) return 0;
    return Math.round((completedTasks / tasks.length) * 100);
  }, [tasks, completedTasks]);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

const themes: any = {
  pastel: {
    bg: "bg-[#f8fafc] text-slate-900",
    card: "bg-white text-slate-900 border border-slate-200 shadow-sm",
    input: "bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400",
  },

  dark: {
    bg: "bg-[#0b1220] text-white",
    card: "bg-[#111827] text-white border border-white/10 shadow-lg",
    input: "bg-white/10 text-white border border-white/10 placeholder:text-white/60",
  },

  ocean: {
    bg: "bg-[#eff6ff] text-slate-900",
    card: "bg-white text-slate-900 border border-slate-200 shadow-sm",
    input: "bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400",
  },
};

  const current = themes[theme];

  return (
    <div className={`min-h-screen p-6 ${current.bg}`}>

      
      <div className="relative overflow-hidden rounded-3xl p-8 mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-xl">
        <h1 className="text-4xl font-bold">🌸 Daily Planner</h1>
        <p className="mt-2 opacity-90">{today}</p>
        <p className="mt-3 text-lg">
          Mood: <span className="text-3xl">{selectedMood}</span>
        </p>
      </div>

     
      <div className="flex items-center justify-between mb-6">

       
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 rounded-xl border bg-white text-black"
        >
          <option value="pastel">Pastel</option>
          <option value="dark">Dark</option>
          <option value="ocean">Ocean</option>
        </select>

        
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="rgba(148,163,184,0.3)"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="#8b5cf6"
              strokeWidth="6"
              fill="none"
              strokeDasharray="213"
              strokeDashoffset={213 - (progress / 100) * 213}
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center font-bold text-black">
            {progress}%
          </div>
        </div>
      </div>

     
      <div className={`${current.card} backdrop-blur-xl p-6 rounded-3xl mb-6 shadow-lg`}>
        <h2 className="text-lg font-semibold mb-3">Mood Tracker</h2>

        <div className="flex gap-3">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`text-3xl p-2 rounded-xl transition ${
                selectedMood === mood ? "scale-110 bg-purple-200/40" : ""
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

  
      <div className="grid lg:grid-cols-2 gap-6">

    
        <div className={`${current.card} backdrop-blur-xl p-6 rounded-3xl shadow-lg`}>
          <h2 className="font-semibold mb-3">Tasks</h2>

          <div className="flex gap-2 mb-3">
            <input
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className="flex-1 p-2 rounded-xl border text-black"
              placeholder="Add task..."
            />
            <button
              onClick={() => {
                if (!taskInput.trim()) return;
                setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
                setTaskInput("");
              }}
              className="bg-purple-500 text-white px-4 rounded-xl"
            >
              Add
            </button>
          </div>

          {tasks.map((t) => (
            <div key={t.id} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() =>
                  setTasks(
                    tasks.map((task) =>
                      task.id === t.id
                        ? { ...task, completed: !task.completed }
                        : task
                    )
                  )
                }
              />
              <span className={t.completed ? "line-through opacity-50" : ""}>
                {t.text}
              </span>
            </div>
          ))}
        </div>

        <div className={`${current.card} backdrop-blur-xl p-6 rounded-3xl shadow-lg`}>
          <h2 className="font-semibold mb-3">Notes</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={`${current.input} w-full h-40 p-2 rounded-xl`}
          />
        </div>

       
        <div className={`${current.card} backdrop-blur-xl p-6 rounded-3xl shadow-lg`}>
          <h2 className="font-semibold mb-3">Gratitude</h2>
          <textarea
            value={gratitude}
            onChange={(e) => setGratitude(e.target.value)}
            className="w-full h-40 p-2 rounded-xl border text-black"
          />
        </div>

      
        <div className={`${current.card} backdrop-blur-xl p-6 rounded-3xl shadow-lg`}>
          <h2 className="font-semibold mb-3">Reflection</h2>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            className="w-full h-40 p-2 rounded-xl border text-black"
          />
        </div>

      </div>
    </div>
  );
};

export default DailyPlanner;