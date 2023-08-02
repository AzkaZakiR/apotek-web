module.exports = {
  apps: [
    {
      name: "Z-Bot",
      script: "./src/app.js",
      exp_backoff_restart_delay: 100,
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      watch_delay: 1000,
      watch: ["./src/app.js"],
    },
  ],
};
