const url = "https://www.boredapi.com/api/activity?participants=";

async function fetchActivity(numOfParticipants) {
  const response = await fetch(url + numOfParticipants);
  const data = await response.json();
  return data;
}

export async function getActivities(numOfParticipants) {
  let count = 0;
  const activitiesObj = {};
  while (count < 5) {
    const activity = await fetchActivity(numOfParticipants);
    if (activitiesObj[activity.key]) {
      break;
    } else {
      activitiesObj[activity.key] = activity;
      count++;
    }
  }
  const activities = Object.values(activitiesObj).sort(
    (a, b) => parseFloat(a.price) - parseFloat(b.price)
  );
  return activities;
}
