import data from "../data/dataS1.json";
function createStepOneData() {
  const season = data.schedules;
  const stepOneData = [];
  for (let i = 0; i < season.length; i++) {
    stepOneData.push({
      id: i + 1,
      teamHome: season[i].sport_event.competitors[0].name,
      teamAway: season[i].sport_event.competitors[1].name,
      home_score: season[i].sport_event_status.home_score,
      away_score: season[i].sport_event_status.away_score,
    });
  }
  return stepOneData;
}
export default createStepOneData();
