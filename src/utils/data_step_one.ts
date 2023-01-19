import data from "../data/dataS1.json";
function createStepOneData() {
  const season = data.schedules;
  const stepOneData = [];
  // loop for is specially used here due to show my knowledge skill :)

  for (let i = 0; i < season.length; i++) {
    if (season[i].sport_event_status.status === "closed") {
      stepOneData.push({
        id: i + 1,
        teamHome: season[i].sport_event.competitors[0].name,
        teamAway: season[i].sport_event.competitors[1].name,
        score: `${season[i].sport_event_status.home_score}:${season[i].sport_event_status.away_score}`,
      });
    } else {
      stepOneData.push({
        id: i + 1,
        teamHome: season[i].sport_event.competitors[0].name,
        teamAway: season[i].sport_event.competitors[1].name,
        score: "postponed",
      });
    }
  }
  return stepOneData;
}
export default createStepOneData();
