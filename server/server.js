
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// جلب المباريات المباشرة
app.get("/api/live", async (req, res) => {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/fixtures?live=all",
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "تعذر جلب المباريات"
    });
  }
});

app.listen(PORT, () => {
  console.log(`KILMO SPORTS running on port ${PORT}`);
});
