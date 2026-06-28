import { useEffect } from "react";

const useChecklistReminder = () => {
  useEffect(() => {

    Notification.requestPermission();

    const lists =
      JSON.parse(
        localStorage.getItem(
          "suchak-checklists"
        ) || "[]"
      );

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    lists.forEach((list: any) => {

      if (
        list.reminderDate === today &&
        Notification.permission === "granted"
      ) {
        new Notification(
          "Checklist Reminder",
          {
            body: list.title,
          }
        );
      }

    });

  }, []);
};

export default useChecklistReminder;