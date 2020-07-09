module.exports = {
  apps: [
    {
      name: "API",
      max_restarts: 2,
      min_uptime: "5s",
      restart_delay: 5000,
      node_args: "-r dotenv/config",
      watch: ["./dist"],
      script: "./dist/index.js",
    },
  ],
};
