module.exports = {
	config: {
		name: "قبح",
		version: "1.0",
		author: "Samir",
		role: 0,
		category: "متعة",
		guide: {
			vi: "Just For Fun",
			en: "احسب قبحك"
		} 
	},

	onStart: async function ({ api, event }) {
		const data = ["أنت 1٪ قبيح تمامًا 🥺", "أنت 2٪ قبيح تمامًا 🥺", "أنت 3٪ قبيح تمامًا 🥺", "أنت 4٪ قبيح تمامًا 🥺", "أنت 5٪ قبيح تمامًا 🥺", "أنت 6٪ قبيح تمامًا 🥺", "أنت 7٪ قبيح تمامًا 🥺", "أنت 8٪ قبيح تمامًا 🥺", "أنت 9٪ قبيح تمامًا 🥺", "أنت 10٪ قبيح تمامًا 🥺", "أنت 11٪ قبيح تمامًا 🥺", "أنت 12٪ قبيح تمامًا 🥺", "أنت 13٪ قبيح تمامًا 🥺", "أنت 14٪ قبيح تمامًا 🥺", "أنت 15٪ قبيح تمامًا 🥺", "أنت 16٪ قبيح تمامًا 🥺", "أنت 17٪ قبيح تمامًا 🥺", "أنت 18٪ قبيح تمامًا 🥺", "أنت 19٪ قبيح تمامًا 🥺", "أنت 20٪ قبيح تمامًا 🥺", "أنت 21٪ قبيح تمامًا 🥺", "أنت 22٪ قبيح تمامًا 🥺", "أنت 23٪ قبيح تمامًا 🥺", "أنت 24٪ قبيح تمامًا 🥺", "أنت 25٪ قبيح تمامًا 🥺", "أنت 26٪ قبيح تمامًا 🥺", "أنت 27٪ قبيح تمامًا 🥺", "أنت 28٪ قبيح تمامًا 🥺", "أنت 29٪ قبيح تمامًا 🥺", "أنت 30٪ قبيح تمامًا 🥺", "أنت 31٪ قبيح تمامًا 🥺", "أنت 32٪ قبيح تمامًا 🥺", "أنت 33٪ قبيح تمامًا 🥺", "أنت 34٪ قبيح تمامًا 🥺", "أنت 35٪ قبيح تمامًا 🥺", "أنت 36٪ قبيح تمامًا 🥺", "أنت 37٪ قبيح تمامًا 🥺", "أنت 38٪ قبيح تمامًا 🥺", "أنت 39٪ قبيح تمامًا 🥺", "أنت 40٪ قبيح تمامًا 🥺", "أنت 41٪ قبيح تمامًا 🥺", "أنت 42٪ قبيح تمامًا 🥺", "أنت 43٪ قبيح تمامًا 🥺", "أنت 44٪ قبيح تمامًا 🥺", "أنت 45٪ قبيح تمامًا 🥺", "أنت 46٪ قبيح تمامًا 🥺", "أنت 47٪ قبيح تمامًا 🥺", "أنت 48٪ قبيح تمامًا 🥺", "أنت 49٪ قبيح تمامًا 🥺", "أنت 50٪ قبيح تمامًا 🥺", "أنت 51٪ قبيح تمامًا 🥺", "أنت 52٪ قبيح تمامًا 🥺", "أنت 53٪ قبيح تمامًا 🥺", "أنت 54٪ قبيح تمامًا 🥺", "أنت 55٪ قبيح تمامًا 🥺", "أنت 56٪ قبيح تمامًا 🥺", "أنت 57٪ قبيح تمامًا 🥺", "أنت 58٪ قبيح تمامًا 🥺", "أنت 59٪ قبيح تمامًا 🥺", "أنت 60٪ قبيح تمامًا 🥺", "أنت 61٪ قبيح تمامًا 🥺", "أنت 62٪ قبيح تمامًا 🥺", "أنت 63٪ قبيح تمامًا 🥺", "أنت 64٪ قبيح تمامًا 🥺", "أنت 65% قبيح", "أنت 66٪ قبيح تمامًا 🥺", "أنت 67٪ قبيح تمامًا 🥺", "أنت 68٪ قبيح تمامًا 🥺", "أنت 69٪ قبيح تمامًا 🥺", "أنت 70٪ قبيح تمامًا 🥺", "أنت 71٪ قبيح تمامًا 🥺", "أنت 72٪ قبيح تمامًا 🥺", "أنت 73٪ قبيح تمامًا 🥺", "أنت 74٪ قبيح تمامًا 🥺", "أنت 75٪ قبيح تمامًا 🥺", "أنت 76٪ قبيح تمامًا 🥺", "أنت 77٪ قبيح تمامًا 🥺", "أنت 78٪ قبيح تمامًا 🥺", "أنت 79٪ قبيح تمامًا 🥺", "أنت 80٪ قبيح تمامًا 🥺", "أنت 81٪ قبيح تمامًا 🥺", "أنت 82٪ قبيح تمامًا 🥺", "أنت 83٪ قبيح تمامًا 🥺", "أنت 84٪ قبيح تمامًا 🥺", "أنت 85٪ قبيح تمامًا 🥺", "أنت 86٪ قبيح تمامًا 🥺", "أنت 87٪ قبيح تمامًا 🥺", "أنت 88٪ قبيح تمامًا 🥺", "أنت 89٪ قبيح تمامًا 🥺", "أنت 90٪ قبيح تمامًا 🥺", "أنت 91٪ قبيح تمامًا 🥺",
"أنت 92٪ قبيح تمامًا 🥺", "أنت 93٪ قبيح تمامًا 🥺", "أنت 94٪ قبيح تمامًا 🥺", "أنت 95٪ قبيح تمامًا 🥺", "أنت 96٪ قبيح تمامًا 🥺", "أنت 97٪ قبيح تمامًا 🥺", "أنت 98٪ قبيح تمامًا 🥺", "أنت 99٪ قبيح تمامًا 🥺", "أنت 100٪ قبيح تمامًا 🥺%",
  ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
	}
};