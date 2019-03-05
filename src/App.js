import React, { useState } from "react";
import { Container, SubTitle, Title, Field, Control, Input } from "reactbulma";
import "./App.css";

const formatTime = t => {
  return t.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit"
  });
};

const minutesToMilliseconds = mins => mins * 60 * 1000;

const generateRounds = (
  time,
  roundLength,
  breakLength,
  numberOfRounds,
  lunchBreakLength
) => {
  const [hours, minutes] = time.split(":");

  const lunchBreak = parseInt(lunchBreakLength, 10);
  const startTime = new Date();
  const endTime = new Date();
  startTime.setHours(hours);
  startTime.setMinutes(minutes);

  let results = [];
  for (let i = 1; i <= numberOfRounds; i++) {
    endTime.setTime(
      startTime.getTime() + minutesToMilliseconds(parseInt(roundLength, 10))
    );
    let round = {
      name: `Round ${i}`,
      start: formatTime(startTime),
      end: formatTime(endTime)
    };
    results.push(round);
    if (lunchBreak > 0 && Math.floor(numberOfRounds / 2) === i) {
      // Lunch time!
      endTime.setTime(endTime.getTime() + minutesToMilliseconds(lunchBreak));
      let breakRound = {
        name: "Lunch Break",
        start: round.end,
        end: formatTime(endTime)
      };
      results.push(breakRound);
      startTime.setTime(endTime.getTime());
    } else {
      startTime.setTime(endTime.getTime() + minutesToMilliseconds(breakLength));
    }
  }

  return results;
};

const App = () => {
  const [time, setTime] = useState("10:00");
  const [roundLength, setRoundLength] = useState(75);
  const [breakLength, setBreakLength] = useState(15);
  const [lunchBreakLength, setlunchBreakLength] = useState(60);
  const [numberOfRounds, setNumberOfRounds] = useState(6);

  const rounds = generateRounds(
    time,
    roundLength,
    breakLength,
    numberOfRounds,
    lunchBreakLength
  );

  const raw = `\`\`\`
Round #      Start    End
${rounds
  .map(
    r =>
      `${r.name} ${r.name === "Lunch Break" ? "" : "    "} ${r.start}    ${
        r.end
      }`
  )
  .join("\n")}
\`\`\``;

  return (
    <Container>
      <header>
        <Title>Tournament Time Schedule</Title>
      </header>
      <section>
        <Field>
          <label className="label">Start time</label>
          <Control>
            <Input
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
          </Control>
        </Field>
        <Field>
          <label className="label">Round length (minutes)</label>
          <Control>
            <Input
              type="number"
              min="1"
              value={roundLength}
              onChange={e => setRoundLength(Math.max(1, e.target.value))}
              placeholder="in minutes"
            />
          </Control>
        </Field>
        <Field>
          <label className="label">Break between rounds (minutes)</label>
          <Control>
            <Input
              type="number"
              min="0"
              value={breakLength}
              onChange={e => setBreakLength(Math.max(0, e.target.value))}
              placeholder="in minutes"
            />
          </Control>
        </Field>
        <Field>
          <label className="label">Lunch break (minutes)</label>
          <Control>
            <Input
              type="number"
              min="0"
              value={lunchBreakLength}
              onChange={e => setlunchBreakLength(Math.max(0, e.target.value))}
              placeholder="in minutes"
            />
          </Control>
        </Field>
        <Field>
          <label className="label">Number of rounds</label>
          <Control>
            <Input
              type="number"
              min="1"
              value={numberOfRounds}
              onChange={e => setNumberOfRounds(Math.max(1, e.target.value))}
            />
          </Control>
        </Field>
      </section>
      <section>
        <SubTitle>Schedule</SubTitle>
        <table className="table" width="400">
          <thead>
            <tr>
              <th>Round</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {rounds.map(r => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.start}</td>
                <td>{r.end}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>Slack:</p>
        <pre>
          <code>{raw}</code>
        </pre>
      </section>
    </Container>
  );
};

export default App;
