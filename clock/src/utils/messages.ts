const timerNotifications = {
  "pt-BR": {
    finishedTime: {
      title: "Tempo finalizado ⏱️",
      body: "Fim do ciclo, iniciando intervalo!",
      data: {},
      trigger: {
        seconds: 1,
      },
    },

    finishedInterval: {
      title: "Intervalo finalizado ⏱️",
      body: "Fim do intervalo, Inicie um novo ciclo!",
      data: {},
      trigger: { seconds: 1 },
    },
  },

  "en-US": {
    finishedTime: {
      title: "Time's up ⏱️",
      body: "End of cycle, starting interval!",
      data: {},
      trigger: {
        seconds: 1,
      },
    },

    finishedInterval: {
      title: "Interval's up ⏱️",
      body: "End of interval, start a new cycle!",
      data: {},
      trigger: { seconds: 1 },
    },
  },
};

interface TimerNotificationProps {
  locale: keyof typeof timerNotifications;
  event: "finishedTime" | "finishedInterval";
}

export function getTimerNotification(props: TimerNotificationProps) {
  const { event, locale } = props;
  const message = timerNotifications[locale ?? "en-US"][event];
  return message;
}
